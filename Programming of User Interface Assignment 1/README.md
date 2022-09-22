# EmailReader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Assignment submission by SHUBHANKAR

i. Create an Angular Add application named EmailReader and use Bootstrap in your application
    Yes, completed. The app is titled EmailReader, and we can check in the console to see that we have enabled Bootstrap.
    Also, used buttons that use Bootstrap.
    We create the app by following commands
        ng new EmailReader
    And to run the application, we use:
        ng serve

    However, Bootstrap can be added to a project easily :
    ng add @ng-bootstrap/ng-bootstrap
    Also, we can setup by running following command:
    npm install --save bootstrap@3
    It will save bootstrap locally. 
    Next, we change the styles in angular.json file. 
    we add the line
    "node_modules/bootstrap/dist/css/bootstrap.min.css",



ii. Create an interface called "Email" to structure the email information
Yes, In src>app>interfaces
    You can see we created an Interface "Email", with fields as the requirement. 
    Source code in src>app>Interfaces>email.ts
    We reference the same for two-way data binding.

iii. Create a module emailreaderbasic which contains a form to write the contents of an email with the following data ◦ From, To, subject and body 
    Yes, completed. In the directory, src>app>email-reader-basics, you can find the module "email-reader-basics".
    There we have a form to take input of the fields: From, To, subject and body.
    We create the component by the following command:
    ng generate component email-reader-basics
    
    We reference email interface in email-reader-basics.component, define functionality of buttons.
    Then, we add import {EmailReaderBasicsComponent} & we also add line "EmailReaderBasicsComponent" in exports.

    in email-reader-basics.module.ts

iv. Below the form, add a "up must show todate viewer" of the email, that is, the viewer the contents of all fields while they are edited in the form
    For each module, its HTML code and its corresponding controller have two-way binding.
    ◦Data shown in the view and its “associated” data in the controller are updated in both directions, when something is changed in any of them. 


v. Create a button "Send" which shows a message taking the email information and, after that,  cleans all form fields
    Yes, created. Code is available in src>app>email-reader-basics>email-reader-basics.component.html
    Also, we can see on the main page, the button titled "Send". Also, It uses bootstrap.

vi. Create a button "Clean" which cleans the form fields
    Yes, created. Code is available in src>app>email-reader-basics>email-reader-basics.component.html
    Also, we can see on the main page, the button titled "Clean". Also, It uses bootstrap.