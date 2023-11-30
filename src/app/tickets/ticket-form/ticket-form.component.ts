import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket, Major } from '../../../models/ticket';
import { StudentService } from '../../../services/student/student.service';
import { Student } from '../../../models/student';
import { STUDENTS_MOCKED } from '../../../mocks/students.mock';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public majors: string[] = Object.values(Major);
  public students: Student[] = STUDENTS_MOCKED;


  constructor(public formBuilder: FormBuilder, public ticketService: TicketService,     public studentService: StudentService    ) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      studentID: 1
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const data = this.ticketForm.getRawValue()
    const title = data.title
    const descript = data.description
    const major = data.major
    const studentID = Number(data.studentID)

    const studentTemp: Student = this.students.find(student => student.id === studentID);
    const ticket: Ticket = {
      title: title,
      description: descript,
      date: new Date(),
      student: studentTemp,
      major: major,
      archived: false
    }
    

    this.ticketService.addTicket(ticket)
  }
  
  majorValues(): string[] {
    return Object.values(Major);
  }
}

