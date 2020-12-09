import { Component, OnInit, ElementRef,ViewChild, Output, Input, Injectable } from '@angular/core';
import { NgForm,  FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
// @Injectable()
export class ContactComponent implements OnInit {
// messageForm:FormGroup ;
 submitted=true;
success=false ;
verified=false;
namev:string;
snamev:string;
emailv:string;
mdpv:string;


@ViewChild('f') signupForm: NgForm;

  constructor() {


  }

  ngOnInit(): void {
//     this.messageForm= new FormGroup({

//       'name': new FormControl('') ,
//     'sname': new FormControl(''),
//     'email': new FormControl(''),
//     'mdp': new FormControl('')


// });
    // 'userData':
    // 'name':['',Validators.required] ,
    // 'sname':['',Validators.required] ,
    // 'email':['',Validators.required] ,
    // 'mdp': ['',Validators.required]
  }
  verif(){
    this.verified=true ;
  }

  onSubmit(form:NgForm){
    this.submitted=true;
      this.namev = this.signupForm.value.name;
      this.snamev = this.signupForm.value.sname;
      this.emailv = this.signupForm.value.email;
      this.mdpv = this.signupForm.value.mdp;

    // console.log(name) ;
    // this.user.email = this.signupForm.value.userData.email;

    this.success=true;
    this.signupForm.reset() ;
  }
}
