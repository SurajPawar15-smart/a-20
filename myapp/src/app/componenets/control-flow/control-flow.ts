import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule, JsonPipe],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isDivVisible: boolean = false;
  div2Status: string = 'show';
  startingCharDayName: string = '';
  hideDiv1() {
    this.isDivVisible = false;
  }
  showDiv1() {
    this.isDivVisible = true;
  }
  toggleDiv2() {
    // if (this.div2Status == 'show') {
    //   this.div2Status = 'hide';
    // } else {
    //   this.div2Status = 'show';
    // }
    this.div2Status = this.div2Status == 'show' ? 'hide' : 'show';
  }
  toggleDiv3() {
    this.isDivVisible = !this.isDivVisible;
  }
  cityList: string[] = ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Hyderabad'];

  studentList = [
    {
      id: 1,
      name: 'Suraj Pawar',
      age: 22,
      course: 'Angular',
      email: 'suraj@example.com',
      contactNumber: '9876543210',
      gender: 'Male',
      enrollmentDate: '2025-08-01',
      isScholarship: true,
      city: 'Pune',
    },
    {
      id: 2,
      name: 'Sneha Patil',
      age: 20,
      course: 'React',
      email: 'sneha@example.com',
      contactNumber: '9876543211',
      gender: 'Female',
      enrollmentDate: '2025-07-20',
      isScholarship: false,
      city: 'Mumbai',
    },
    {
      id: 3,
      name: 'Amit Sharma',
      age: 23,
      course: 'Node.js',
      email: 'amit@example.com',
      contactNumber: '9876543212',
      gender: 'Male',
      enrollmentDate: '2025-06-15',
      isScholarship: true,
      city: 'Nagpur',
    },
  ];
}
