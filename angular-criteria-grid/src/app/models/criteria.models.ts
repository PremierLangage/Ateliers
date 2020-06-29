export interface Niveau{
    description: string;
    points: number;
}

export interface Critere {
    description: string;
    niveaux: Niveau[];
}
  
  