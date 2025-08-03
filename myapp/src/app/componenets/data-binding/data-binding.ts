import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, JsonPipe],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular';
  courseDuration = '3 months';
  latestVersion: string;
  isActive: boolean = false;
  myPlaceholderText: string = 'Enter Your Name';
  inputType: string = 'checkbox';
  myClassName: string = 'bg-warning p-3';
  constructor() {
    this.courseName = 'Angular from Zero to Hero';
    this.courseDuration = '4 Months';
    this.latestVersion = 'Angular 20 Version';
  }

  showWelcomeMessage() {
    alert('welcome to learning Angular');
  }
  showMessage(message: string): void {
    alert(message);
  }
  cityChanged() {
    alert('City Got Changed...!!!');
  }
  onTextChanges() {
    console.log('Text changed');
  }
  onMouseEnter() {
    console.log('On Mouse Enter...!!!');
  }
  onMouseLeft() {
    console.log('On Mouse Left...!!!');
  }
  ChangeCourseName() {
    this.courseName = 'Java Backend';
  }
  studentObj = {
    name: '',
    age: null,
    course: '',
    email: '',
    contactNumber: '',
    address: '',
    gender: '',
    enrollmentDate: '',
    isScholarship: false,
  };
  cityList: string[] = ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Hyderabad'];
}
