
export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High'
}

export interface Task {
  id: string;
  title: string;
  deadline: string;
  priority: Priority;
  completed: boolean;
}

export interface Career {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  details: {
    tasks: string[];
    skills: string[];
    subjects: string[];
    majors: string[];
  };
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    category: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
