import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, TasksIcon, GoalsIcon, ObjectivesIcon, DreamsIcon } from '../components/icons';
import { hierarchyData } from '../data/sampleData';
import { Task, Goal, Objective, Dream, HierarchyEntity } from '../types';

type CalendarEvent = {
    id: string;
    title: string;
    type: 'task' | 'goal' | 'objective' | 'dream';
    date: Date;
    item: HierarchyEntity;
};

const CALENDAR_VIEW_DATE_KEY = 'calendarViewDate';

const getInitialDate = (): Date => {
    const storedDate = localStorage.getItem(CALENDAR_VIEW_DATE_KEY);
    if (storedDate) {
        const date = new Date(storedDate);
        if (!isNaN(date.getTime())) {
            return date;
        }
    }
    // Set to a specific date for consistent demo data
    return new Date(2025, 8, 1);
};


const CalendarPage: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(getInitialDate);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 8, 15));

    useEffect(() => {
        localStorage.setItem(CALENDAR_VIEW_DATE_KEY, currentDate.toISOString());
    }, [currentDate]);

    const eventsByDate = useMemo(() => {
        const eventsMap = new Map<string, CalendarEvent[]>();
        
        const addEvent = (item: Task | Goal | Objective | Dream, type: CalendarEvent['type'], date: Date | undefined) => {
            if (!date) return;
            const dateKey = date.toISOString().split('T')[0];
            if (!eventsMap.has(dateKey)) {
                eventsMap.set(dateKey, []);
            }
            eventsMap.get(dateKey)!.push({ id: item.id, title: item.title, type, date, item: {...item, type} as HierarchyEntity });
        };

        hierarchyData.forEach(dream => {
            addEvent(dream, 'dream', dream.deadline);
            dream.objectives.forEach(objective => {
                addEvent(objective, 'objective', objective.deadline);
                objective.goals.forEach(goal => {
                    addEvent(goal, 'goal', goal.dueDate);
                    goal.tasks.forEach(task => {
                        addEvent(task, 'task', task.dueDate);
                    });
                });
            });
        });
        return eventsMap;
    }, []);
    
    // Handlers for month navigation
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleTodayClick = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
    };

    const handleDateClick = (day: Date) => {
        setSelectedDate(day);
    };

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startingDay = firstDayOfMonth.getDay();
    const daysInMonth = Array.from({ length: lastDayOfMonth.getDate() }, (_, i) => new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1));
    const emptyDays = Array(startingDay).fill(null);
    const calendarDays = [...emptyDays, ...daysInMonth];

    const selectedDayEvents = selectedDate ? eventsByDate.get(selectedDate.toISOString().split('T')[0]) || [] : [];

    const EventItem: React.FC<{event: CalendarEvent}> = ({ event }) => {
        const icons = {
            dream: <DreamsIcon className="w-4 h-4 text-primary" />,
            objective: <ObjectivesIcon className="w-4 h-4 text-secondary" />,
            goal: <GoalsIcon className="w-4 h-4 text-accent" />,
            task: <TasksIcon className="w-4 h-4 text-neutral-500" />,
        };
        return (
            <div className="flex items-center p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700/50">
                {icons[event.type]}
                <span className="ml-2 text-sm font-medium">{event.title}</span>
            </div>
        )
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-full">
            <div className="flex-grow bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                    <div className="flex items-center space-x-2">
                        <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700"><ChevronLeftIcon className="w-5 h-5" /></button>
                        <button onClick={handleTodayClick} className="px-3 py-1 text-sm font-medium rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700">Today</button>
                        <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700"><ChevronRightIcon className="w-5 h-5" /></button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-px">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center text-xs font-bold uppercase text-neutral-500 pb-2">{day}</div>)}
                    {calendarDays.map((day, index) => {
                        if (!day) return <div key={`empty-${index}`} className="border-t border-r border-neutral-200 dark:border-dark-border"></div>;
                        const dateKey = day.toISOString().split('T')[0];
                        const dayEvents = eventsByDate.get(dateKey) || [];
                        const isToday = day.toDateString() === new Date().toDateString();
                        const isSelected = selectedDate?.toDateString() === day.toDateString();

                        return (
                            <div 
                                key={day.toString()} 
                                onClick={() => handleDateClick(day)}
                                className={`p-2 border-t border-r border-neutral-200 dark:border-dark-border h-28 flex flex-col cursor-pointer transition-colors ${isSelected ? 'bg-primary/10' : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50'}`}
                            >
                                <span className={`font-semibold ${isToday ? 'bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>{day.getDate()}</span>
                                <div className="mt-1 overflow-y-auto text-xs">
                                    {dayEvents.map(event => (
                                        <div key={event.id} className={`p-0.5 rounded-sm mb-0.5 truncate ${
                                            event.type === 'dream' ? 'bg-primary/20' :
                                            event.type === 'objective' ? 'bg-secondary/20' :
                                            event.type === 'goal' ? 'bg-accent/20' :
                                            'bg-neutral-200/50 dark:bg-neutral-700'
                                        }`}>{event.title}</div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="lg:w-80 flex-shrink-0">
                <div className="bg-white dark:bg-dark-card rounded-xl border border-neutral-200 dark:border-dark-border p-6 shadow-sm">
                     <h3 className="text-lg font-bold">
                        {selectedDate ? selectedDate.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Select a date'}
                    </h3>
                    <div className="mt-4 space-y-2">
                        {selectedDayEvents.length > 0 ? (
                            selectedDayEvents.map(event => <EventItem key={event.id} event={event} />)
                        ) : (
                            <p className="text-sm text-neutral-500">No events scheduled.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;