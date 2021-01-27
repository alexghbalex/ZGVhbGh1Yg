import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models';
import { filter, map } from 'rxjs/operators';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
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
