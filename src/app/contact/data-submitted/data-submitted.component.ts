// import { ContactComponent } from './../contact.component';
import { Component, OnInit, Input } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-data-submitted',
  templateUrl: './data-submitted.component.html',
  styleUrls: ['./data-submitted.component.css'],

})
export class DataSubmittedComponent implements OnInit {
  @Input() name:string ;
  @Input() sname:string ;
  @Input() email:string ;
  @Input() mdp:string ;
  @Input() submitted:boolean ;

  constructor() { }

  ngOnInit(): void {

  }

if(submitted){
  //console.log(name);
}
}
