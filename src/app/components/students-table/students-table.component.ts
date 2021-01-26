import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models';
import { StateService } from '../../services/state.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  @Input() students: Observable<Student[]>;
  readonly displayedColumns = ['Name', 'S.Name', 'Score'];
  selectedStudent: Observable<string>;

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.selectedStudent = this.stateService.student.pipe(
      filter(student => !!student),
      map(student => student.fname + student.lname)
    );
  }

  selectStudent(student: Student): void {
    this.stateService.setStudent(student);
  }
}
