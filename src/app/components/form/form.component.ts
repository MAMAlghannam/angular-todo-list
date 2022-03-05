import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.email
    ]]
  });

  get nameField(): FormControl {
    return this.myForm.get('name') as FormControl;
  }
  
  get emailField(): FormControl {
    return this.myForm.get('email') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.emailField.disable();

    this.nameField.valueChanges.subscribe(control => {
      if(this.nameField.valid)
        this.emailField.enable(); 
      else   
        this.emailField.disable();
    });
  }

  onSubmit() {
    console.warn(this.myForm.value);
  }

}
