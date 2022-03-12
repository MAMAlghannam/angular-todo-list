import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-err-msg',
  templateUrl: './input-err-msg.component.html',
  styleUrls: ['./input-err-msg.component.css']
})
export class InputErrMsgComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("i'm err message")
  }

  ngOnDestroy(): void {
      console.log("err destroied")
  }

}
