import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students : any[] = [];

  constructor (private studentService : StudentService) {}
  ngOnInit(){
  this.students = this.studentService.getStudents();
  console.log(this.students);
}
}
