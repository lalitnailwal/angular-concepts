import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'lalit nailwal';
  textID = 'SampleId';
  isDisabled = true;
  ngifshow = true;

  integerData =3;

  managers = ['tom','harry','jon','kim']

  managersList = [
    {name: 'Tom', salary: '100', address: 'USA'},
    {name: 'Harry', salary: '200', address: 'India'},
    {name: 'Jon', salary: '300', address: 'China'},
    {name: 'Kim', salary: '400', address: 'Aus'},
    {name: 'Hallie', salary: '500', address: 'Canada'},
  ]

  refresh(): void{
    this.managersList = [
      {name: 'Tom', salary: '100', address: 'USA'},
      {name: 'Harry', salary: '200', address: 'India'},
      {name: 'Jon', salary: '300', address: 'China'},
      {name: 'Kim', salary: '400', address: 'Aus'},
      {name: 'Hallie', salary: '500', address: 'Canada'},
      {name: 'Charls', salary: '600', address: 'America'},
    ]
  }

  refreshEmployees(index: number, managers: any): string{
    return managers.name;
  }

  // Class Binding
  //myClasses = 'success height20';
  //myClasses = ['success', 'height20'];
  //myClasses ={'success': true, 'height20': false};
  //myClasses ={'success': this.isDisabled, 'height20': false};
  myClasses ={'success': this.isDisabled, 'height20': this.foo()};

  //Attribute Binding
  src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80';
  imgwidth='200px';

  // Style Binding
  // textStyle = 'color:green; font-size:30px';
  textStyle = {'color':'pink', 'font-size':'30px'};

  getName(data: number): string{
    if(data ==1)
    {
      return 'Hello from method 1';
    }
    else
    {
      return 'hello with value ' + data;
    }
  }

  // Interploation
  employees: string[] = ['ron','jhon','jacob'];

  employee : any = {
    title: 'softwae engineer',
    name: 'lalit',
    salary: 200,
    src:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    alt:'profile pic'
  }

  //Enent Binding
  Save(): void
  {
    alert('Data Saved');
  }

  changeme(): void{
    this.name = 'namechanged'
  }

  mouseover(): void{
    this.name = 'mouseover'
  }

  mouseout(): void{
    this.name = 'lalit nailwal'
  }

  foo(): boolean
  {
    return true;
  }
}
