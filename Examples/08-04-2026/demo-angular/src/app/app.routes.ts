import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { StudentList } from '../student-list/student-list';
import { AddStudent } from './add-student/add-student';
import { List } from './list/list';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'studentlist',component:StudentList},
    {path:'addstudent',component:AddStudent},
    {path:'list',component:List}
];
