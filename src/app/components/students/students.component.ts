import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../../services/students-data.service';
import { StateService } from '../../services/state.service';
import { combineLatest, Observable } from 'rxjs';
import { ClassType, Student } from '../../models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  isTable: Observable<boolean>;
  students: Observable<Student[]>;

  constructor(private studentsDataService: StudentsDataService, private stateService: StateService) {
  }

  ngOnInit(): void {
    this.isTable = this.stateService.table;

    this.students = combineLatest([this.stateService.year, this.stateService.course]).pipe(
      map(([year, course]: [number, ClassType]) => this.studentsDataService.getStudentsBy(year, course))
    );
  }

  toggle(view: 'table' | 'list'): void {
    this.stateService.switchTableList(view === 'table');
  }
}
