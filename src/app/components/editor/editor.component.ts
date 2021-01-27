import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs';
import { Student } from '../../models';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  selectedStudent: Observable<Student>;
  isVisible: Observable<boolean>;
  content: string;

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.selectedStudent = this.stateService.student;
    this.isVisible = this.stateService.table;
  }

  submit(): void {
    // submit a comment
  }
}
