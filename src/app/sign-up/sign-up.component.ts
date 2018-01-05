import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
	  userName:new FormControl('',[
		Validators.required,
		Validators.minLength(3),
	  ]),
	  password:new FormControl('',Validators.required)
  })

  get userName() {
	  return this.form.get('userName')
  }

  login(){
	//   if(this.form.value){
	// 	this.form.setErrors({
	// 		invalidLogin:true
	// 	})
	//   }
	let isValid = this.form.value;

	console.log(isValid =!isValid)
	 
  }

}
