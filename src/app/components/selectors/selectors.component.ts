import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../../services/students-data.service';
import { ClassType } from '../../models';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {
  years: number[];
  classes: ClassType[];

  constructor(private studentsDataService: StudentsDataService, private stateService: StateService) {
  }

  ngOnInit(): void {
    this.classes = this.studentsDataService.getClasses();
    this.years = this.studentsDataService.getYears();
  }

  setYear(year: number): void {
    this.stateService.setYear(year);
    this.classes = this.studentsDataService.getClasses(year);
  }

  setCourse(course: ClassType): void {
    this.stateService.setCourse(course);
    this.years = this.studentsDataService.getYears(course);
  }
}
