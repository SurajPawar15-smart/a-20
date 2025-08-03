import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  //declaration + initialization (Best)
  courseName: string = 'Angular 20';
  rollNo: number = 101;
  isActive: boolean = true;
  currentDate: Date = new Date();
  nothing: null = null;
  notAssigned: undefined = undefined;
  bigCount: bigint = 9007199254740991n;
  uniqueId: symbol = Symbol('id');

  //declaration
  courseTitle: string;
  courseDuration: string;
  instructorName: string;
  enrolledStudents: number;

  productPrice: number;

  //initialization
  productName = 'Mobile Samsung';
  student: any;
  firstName: string = 'Pranay';
  lastName: string = 'Pawar';
  fullName: string = '';

  constructor() {
    this.courseName = 'Angular 20';
    this.rollNo = 101;
    this.isActive = false;

    this.courseTitle = 'Angular 20 Mastery from Zero to Hero';
    this.courseDuration = '6 Weeks';
    this.enrolledStudents = 1200;
    this.instructorName = 'Suraj Pawar';

    this.productName = 'Real Me Mobile';
    this.productPrice = 45000;
    console.log(this.productName);

    this.student = '200';
    this.student = 12345;

    this.fullName = this.firstName + this.lastName;

    this.showWelcomeMessage();
    this.showMessage('Welcome Angular Developer');
    const result = this.addTwoNum(10, 20);
  }
  showWelcomeMessage() {
    alert('welcome in Angular Series');
    let fullName = this.firstName + ' ' + this.lastName;
  }
  showMessage(message: string): void {
    alert(message);
  }
  addTwoNum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
