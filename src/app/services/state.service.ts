import { Injectable } from '@angular/core';
import { ClassType, Student } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  year: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  course: BehaviorSubject<ClassType> = new BehaviorSubject<ClassType>(null);
  student: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);
  table: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setYear(year: number): void {
    this.year.next(year);
  }

  setCourse(course: ClassType): void {
    this.course.next(course);
  }

  setStudent(student: Student): void {
    this.student.next(student);
  }

  switchTableList(isTable: boolean): void {
    this.table.next(isTable);
  }
}
