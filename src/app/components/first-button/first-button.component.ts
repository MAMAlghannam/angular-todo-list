import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-button',
  templateUrl: './first-button.component.html',
  styleUrls: ['./first-button.component.css']
})
export class FirstButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickMeFunc(): void {
    alert("You've clicked me.")
  }

}
