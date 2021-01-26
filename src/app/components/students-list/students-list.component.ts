import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  @Input() students: Observable<Student[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
