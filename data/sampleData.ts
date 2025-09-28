import type { Dream } from '../types';

export const hierarchyData: Dream[] = [
  {
    id: 'D-001',
    title: 'Launch new software product',
    description: 'Develop and launch a new productivity software product',
    startDate: new Date(2025, 0, 1),
    deadline: new Date(2025, 11, 31),
    priority: 'high',
    progress: 45,
    objectives: [
      {
        id: 'O-001',
        title: 'Expand regional sales',
        description: 'Increase market presence in the Northeast region',
        startDate: new Date(2025, 0, 1),
        deadline: new Date(2024, 2, 31), // Overdue
        priority: 'high',
        progress: 72.5,
        goals: [
          {
            id: 'M-07',
            title: 'Product Launch Campaign',
            description: 'Execute marketing campaign for product launch',
            startDate: new Date(2025, 8, 1), // Corresponds to current month for demo
            dueDate: new Date(2025, 8, 30),
            progress: 55,
            tasks: [
              { id: 'T-001', title: 'Create marketing materials', progress: 100, status: 'completed', dueDate: new Date(2025, 8, 5) },
              { id: 'T-002', title: 'Set up social media accounts', progress: 100, status: 'completed', dueDate: new Date(2025, 8, 10) },
              { id: 'T-003', title: 'Develop email campaign', progress: 75, status: 'in_progress', dueDate: new Date(2025, 8, 15) },
              { id: 'T-004', title: 'Plan influencer partnerships', progress: 50, status: 'in_progress', dueDate: new Date(2025, 8, 20) },
            ],
          },
        ],
      },
      {
        id: 'O-002',
        title: 'Achieve Product-Market Fit',
        description: 'Ensure the product meets strong market demand.',
        startDate: new Date(2025, 3, 1),
        deadline: new Date(2025, 5, 30),
        priority: 'high',
        progress: 30,
        goals: [],
      }
    ],
  },
];