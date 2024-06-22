import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { Assignment18MayComponent } from '../assignment18-may/assignment18-may.component';
import { AssignmenetOfDirective21052024Component } from '../assignmenet-of-directive21052024/assignmenet-of-directive21052024.component';
import { ProductComponent } from '../product/products.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { DirectivesComponent } from '../directives/directives.component';
import { MyModelComponent } from '../my-model/my-model.component';
import { PipeComponent } from '../pipe/pipe.component';
import { EmployeeCrudBySirComponent } from '../employee-crud-by-sir/employee-crud-by-sir.component';
import { EmployeecrudComponent } from '../employeecrud/employeecrud.component';
import { ParentsComponent } from '../parents/parents.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { TrafficLightComponent } from '../trafficlight/trafficlight.component';
import { DisplayEmpComponent } from '../display-emp/display-emp.component';
import { HttpclientCompComponent } from '../httpclient-comp/httpclient-comp.component';
import { UserComponent } from '../user/user.component';
import { EmployeecrudwithjsonsrComponent } from '../employeecrudwithjsonsr/employeecrudwithjsonsr.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ObservabledemoComponent } from '../observabledemo/observabledemo.component';
import { Observabledemo2Component } from '../observabledemo2/observabledemo2.component';
import { Observabledemo3Component } from '../observabledemo3/observabledemo3.component';
import { Subjectdemo1Component } from '../subjectdemo1/subjectdemo1.component';
import { Employee1Component } from '../employee1/employee1.component';
import { Employee2Component } from '../employee2/employee2.component';
import { Employee3Component } from '../employee3/employee3.component';
import { EmployeeSub1Component } from '../employee-sub1/employee-sub1.component';
import { EmployeeSub2Component } from '../employee-sub2/employee-sub2.component';
import { EmployeeSub3Component } from '../employee-sub3/employee-sub3.component';
import { SubjectToDoListComponent } from '../subject-to-do-list/subject-to-do-list.component';
import { SubjectToDoAddComponent } from '../subject-to-do-add/subject-to-do-add.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ModelReactiveFormComponent } from '../model-reactive-form/model-reactive-form.component';
import { RouterOutlet } from '@angular/router';
import { NavbarCurComponent } from '../navbar-cur/navbar-cur.component';

@Component({
  selector: 'app-center',
  standalone: true,
  //imports: [DatabindingComponent],
  //imports: [Assignment18MayComponent],
  imports: [
    DatabindingComponent, Assignment18MayComponent, ProductComponent,EmployeeCRUDComponent,DirectivesComponent,
    MyModelComponent,PipeComponent,EmployeeCrudBySirComponent,EmployeecrudComponent,ParentsComponent,UserdetailsComponent
    ,TrafficLightComponent,DisplayEmpComponent,HttpclientCompComponent,UserComponent,EmployeecrudwithjsonsrComponent
    ,    ProductlistComponent,ObservabledemoComponent,Observabledemo2Component,Observabledemo3Component,Subjectdemo1Component
    ,Employee1Component,Employee2Component,Employee1Component,Employee3Component,EmployeeSub1Component,EmployeeSub2Component,EmployeeSub3Component
    ,SubjectToDoListComponent,SubjectToDoAddComponent,RegistrationFormComponent,ModelReactiveFormComponent
    ,RouterOutlet,
    NavbarCurComponent

  ],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {
   
}
