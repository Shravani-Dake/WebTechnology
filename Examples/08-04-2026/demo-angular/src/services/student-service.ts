import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {name : "shravani", age : 22, course : 'AIML'},
    {name : "Arya", age : 22, course : 'CSE'},
    {name : "Taslima", age : 22, course : 'AIDS'}
  ];

getStudents(){
  return this.students;
}

  
}