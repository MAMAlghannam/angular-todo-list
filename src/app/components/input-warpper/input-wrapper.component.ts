import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.css']
})
export class InputWrapperComponent implements OnInit {

  @Input() label:string = "";
  @Input() errMsg!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
