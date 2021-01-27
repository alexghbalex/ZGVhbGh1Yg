import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
  @Input() students: Observable<Student[]>;
}
