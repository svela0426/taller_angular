import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
  })
  export class CourseComponent implements OnInit {

    constructor(private courseService: CourseService) { }
    courses: Array<Course>=[];
    pala:string="";
     numero: number = 0;
  
    getCourses() {
      this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
        courses.forEach((course) => this.pala = this.pala + course.titulo);
        this.pala=this.pala;
      });
    }
    gethola() {
      return this.numero;

    }


    ngOnInit() {
      this.getCourses();
      this.gethola();
    }
  }