export interface Student {
  fname: string;
  lname: string;
  grade: number;
  year: number;
  course?: ClassType;
}

export interface Students {
  students: Student[];
  classType: ClassType;
}

export interface School {
  classStudents: Students[];
  classTypes: ClassType[];
}

export enum ClassType {
  Biology = 'Biology',
  Chemistry = 'Chemistry',
  ComputerScience = 'ComputerScience'
}
