import { Injectable } from '@angular/core';
import { ClassType, School, Student, Students } from '../models';
import StudentsData from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
  private data: School;
  private studentsByYear: { [year: number]: Student[] };
  private allStudents: Student[];

  constructor() {
    this.data = StudentsData as School;
    this.setAllStudents();
    this.setStudentsByYear();
  }

  getStudentsData(): Students[] {
    return this.data.classStudents;
  }

  getStudentsByClassType(classType: ClassType): Student[] {
    const course = this.getStudentsData().find(data => data.classType === classType);
    if (course) {
      course.students.forEach(student => student.course = classType);
    }
    return course ? course.students : [];
  }

  getStudentsBy(year: number, course: ClassType): Student[] {
    let students: Student[];

    if (year) {
      students = this.studentsByYear[year];

      if (course) {
        students = students.filter(student => student.course === course);
      }
    } else if (course) {
      students = this.getStudentsByClassType(course);
    } else {
      students = this.allStudents;
    }

    return students;
  }

  getClasses(year?: number): ClassType[] {
    if (year) {
      return [...new Set(this.studentsByYear[year].map(student => student.course))];
    }
    return this.data.classTypes;
  }

  getYears(course?: ClassType): number[] {
    if (course) {
      return [...new Set(this.getStudentsByClassType(course).map(student => student.year))].sort();
    }
    return Object.keys(this.studentsByYear).map(year => parseInt(year, 10)).sort();
  }

  private setStudentsByYear(): void {
    this.studentsByYear = this.allStudents.reduce((acc: { [year: number]: Student[] }, student: Student) => {
      if (!acc[student.year]) {
        acc[student.year] = [];
      }
      acc[student.year].push(student);
      return acc;
    }, {});
  }

  private setAllStudents(): void {
    this.allStudents = this.data.classStudents.reduce((students: Student[], curr: Students) => {
      curr.students.forEach(student => {
        student.course = curr.classType;
        students.push(student);
      });
      return students;
    }, []);
  }
}
