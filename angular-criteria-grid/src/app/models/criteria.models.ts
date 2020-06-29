export interface Level {
    id: number;
    description: string;
    points: number;
}

export interface Criteria {
    id: number;
    description: string;
    levels: Level[];
}
