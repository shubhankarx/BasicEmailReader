import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// @ts-ignore
import { Email } from './Interfaces/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmailReader';
  From = "";
  To = " ";
  Subject = "";
  Body = "";
  

}
