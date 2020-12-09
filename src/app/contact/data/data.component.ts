import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }
  @Input() named:string ;
  @Input() snamed:string ;
  @Input() emaild:string ;
  @Input() mdpd:string ;
  ngOnInit(): void {
  }

}
