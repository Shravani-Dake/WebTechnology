// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.html',
//   styleUrl: './home.css',
// })
// export class Home {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //interpolation
  fname : String="Shravani";
  myRoll:Number=303;
  course:String="WebTechnology";
  imageURL:String="https://google.com";

  showButton()
  {
    this.fname="Shravani Dake";
    alert("Message Displayed !");
  }

  student = {
    name: "shravani",
    age: 21,
    course: "AIML"
  }

  newStudent = {
    name: '',
    age:'',
    course:''
  }

  updateStudent(){
    this.student.name = this.newStudent.name;
    this.student.age = Number(this.newStudent.age);
    this.student.course = this.newStudent.course;
  }

    //array of courses
  courses : string[] = ["CSE", "AIML", "AIDS", "ENTC"];

  src='https://www.highereducationdigest.com/wp-content/uploads/2020/11/DKTE-1-550x330.jpg'
  heroes: string[] = ['Iron Man', 'Thor', 'Hulk', 'Spider-Man'];

}

