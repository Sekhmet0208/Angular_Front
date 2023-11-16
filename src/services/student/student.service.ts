// services/student/student.service.ts

import { Injectable } from '@angular/core';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { Student } from '../../models/student'; 

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: Student[] = STUDENTS_MOCKED;

  // getAllStudents(): Student[] {
  //  return this.studentList;
  //}

  // getStudentById(studentId: number): Student | undefined {
  //  return this.studentList.find(student => student.id === studentId);
  // }
}
  