export interface Habit {
    id: number;
    habit: string;
    completed: boolean;
    remindTime: Date;
    subhabits: subhabits[]; 
}

export interface subhabits {
    id: number;
    habit: string;
    completed: boolean;
    remindTime: Date;
}
