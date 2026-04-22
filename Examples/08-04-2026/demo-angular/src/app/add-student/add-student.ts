import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student-service';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  name = '';
  age = '';
  course = '';

  constructor(private studentService: StudentService) {}

  addStudent(){
    this.studentService.addStudent({
      name: this.name,
      age: Number(this.age),
      course: this.course
    });

    this.name = '';
    this.age = '';
    this.course = '';

    alert('Student added successfully');
  }
}
