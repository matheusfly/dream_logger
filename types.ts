
export interface Task {
  id: string;
  title: string;
  progress: number;
  completed?: boolean;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  dueDate: Date;
  progress: number;
  tasks: Task[];
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  deadline: Date;
  priority: 'high' | 'medium' | 'low';
  progress: number;
  goals: Goal[];
}

export interface Dream {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  deadline: Date;
  priority: 'high' | 'medium' | 'low';
  progress: number;
  objectives: Objective[];
}

export type HierarchyEntity = 
  | ({ type: 'dream' } & Dream)
  | ({ type: 'objective' } & Objective)
  | ({ type: 'goal' } & Goal)
  | ({ type: 'task' } & Task);

