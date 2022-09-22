import { Component, OnInit } from '@angular/core';
import { Email } from '../Interfaces/email';
@Component({
  selector: 'app-email-reader-basics',
  templateUrl: './email-reader-basics.component.html',
  styleUrls: ['./email-reader-basics.component.css']
})
export class EmailReaderBasicsComponent implements OnInit {
  email: Email;
  constructor() {
    this.email = {From: "Shubhankar", To:"Guillermo", Subject: "Assignment", Body: "Programming of User Interfaces"};
   }

  ngOnInit(): void {
  }

  clean (): void {
    console.log("Updating"); 
    this.email.From = "";
    this.email.To = ""; 
    this.email.Subject = "";
    this.email.Body= "";
  }

  print (): void {
    window.alert('The Email is From: ' + this.email.From  + " To:" + 
        this.email.To + " Subject: " + this.email.Subject + " Body:  " + this.email.Body );
    this.email.From = "";
    this.email.To = ""; 
    this.email.Subject = "";
    this.email.Body= "";    
  }
}
