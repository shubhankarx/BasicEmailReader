import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailReaderBasicsComponent } from './email-reader-basics/email-reader-basics.component';
// import the feature module here so you can add it to the imports array below


@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
