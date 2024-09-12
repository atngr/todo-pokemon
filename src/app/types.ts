export interface Buddy {
  level: number;
  experience: number;
  name: string;
  nickname: string;
  shiny: boolean;
}

export interface Task {
  name: string;
  description: string;
  date: Date;
  project: Area;

}

export interface Area {
  name: string;
  description: string;
  color: string;
}

