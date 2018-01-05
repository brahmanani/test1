import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x){
	  console.log(x)
  }

  subnit(form){
	console.log(form)
  }

  countries = [
	  {
		  id:1,
		  name:'INDIA'
	  },
	  {
		id:2,
		name:'USA'
	},
	{
		id:3,
		name:'JAPAN'
	}
  ];

}
