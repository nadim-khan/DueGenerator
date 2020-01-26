# Project Information

Due date generator.

Build on Angular material , Moment JS (for Dates)

To Run the project :-
1. clone the project from the repository  
2. run npm install (for dependencies).
3. if any fix is there then run :-  npm audit fix
4. start the project   :-  ng serve --open

# Application FLow 

Step 1 :- a) Start by clicking Start and End from the top menu  or sidebar menu.
          b) Fill the Start date (Mandatory field).
          c) User can choose either from the End date or by filling End after x occurences by choosing the respective radio button.
          d) Save the dates.
          
Step 2 :- After filling the start and End dates user will be redirected automatically to set the WeekOff dates.
          Set the weekoff by selecting the weekoffs.
          Save the weekoff.
          
Step 3 :- After filling the weekoff, 
          user will be redirected automatically to Frequency page where 4 tabs are there each generating result.
          Report Types :-
          1) Daily - Result will be generates from Start Date to End , Days will be shown excluding the weekoffs(Sat and Sun).
          2) Weekly -  In this case due date will be generated on a weekly basis. 
                       ● Due date will be generated on selected days in every week.  - Example: Every monday & wednesday.
          3) Monthly - In this case, the due date will be generated on a monthly basis.  - Example: If user choose 
                      “​Starts From​” date as 22-Jan-2020 and from Monthly  Frequency ​Jan​, ​Mar​, ​Jul​, ​Sep​, 
                      then it should be considered as 22nd of every Jan, Mar,  Jul and Sep  
          4) Random -  In this case, the due date will be generated on random basis. This has two options: 
                       a) Weekly:  If we select weekly, any two dates in a week will be generated except the  days configured in “Weekly Off”
                       b) Monthly: If we select ‘Monthly’, any 6 dates will be generated in a month except the  days configured in “Weekly Off” section.  
               
Step 4 :- Result will be shown on the basis of previos informations.

          

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
