// services/student/student.service.ts

import { Injectable } from '@angular/core';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { Student } from '../../models/student'; 
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl: string = 'http://localhost:9428/api/students';
  private studentList: Student[] = [];
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor(private http: HttpClient) {
    this.getStudents().subscribe();
  }
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // getAllStudents(): Student[] {
  //  return this.studentList;
  //}

  // getStudentById(studentId: number): Student | undefined {
  //  return this.studentList.find(student => student.id === studentId);
  // }
}
  