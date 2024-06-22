import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-reactive-form',
  standalone: true,
  imports: [FormsModule,
    CommonModule,ReactiveFormsModule
    
  ],
  templateUrl: './model-reactive-form.component.html',
  styleUrl: './model-reactive-form.component.css'
})
export class ModelReactiveFormComponent {
 registerForm:any | undefined;
constructor(private formBuilder:FormBuilder)
{

}
ngOnInit(){
  //this.usingFormGroup();
  this.usingFormBuilder();
}
usingFormGroup()
{
  this.registerForm=new FormGroup({
    firstName:new FormControl('DK',[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl('kumar',[Validators.required,Validators.pattern('/[a-z]/')]),
    email:new FormControl('',[Validators.required,Validators.email]),

    address:new FormGroup({
       street:new FormControl(),
       city:new FormControl(),
       pin:new FormControl()
    })
  });
}
usingFormBuilder()
{
  this.registerForm=this.formBuilder.group({
    firstName:new FormControl('DK',[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl('kumar',[Validators.required,Validators.pattern('/[a-z]/')]),
    email:new FormControl('',[Validators.required,Validators.email]),

    address:new FormGroup({
       street:new FormControl(),
       city:new FormControl(),
       pin:new FormControl()
    })
  },{ updateOn: 'change' });
}
}
