export interface Task {
    id: number;
    task: string;
    completed: boolean;
    subtasks: subtasks[];
}

export interface subtasks {
    id: number;
    task: string;
    completed: boolean;
}
