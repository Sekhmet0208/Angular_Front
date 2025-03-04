import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }
  
  // deleteTicket(ticket: Ticket) {
  //   this.ticketService.deleteTicket(ticket);
  // }

  archivedTicket(ticket: Ticket) {
    this.ticketService.archivedTicket(ticket);
    console.log("archived ticket :", ticket);
  }
  toggleDisplayArchived() {
    this.displayTicketArchived = !this.displayTicketArchived;
  }

  filteredTickets(): Ticket[] {
    return this.displayTicketArchived
      ? this.ticketList
      : this.ticketList.filter((ticket) => !ticket.archived);
  }
}
