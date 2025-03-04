import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
