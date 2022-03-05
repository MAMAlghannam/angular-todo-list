import { Component, Input, OnInit, forwardRef, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-plus',
  templateUrl: './input-plus.component.html',
  styleUrls: ['./input-plus.component.css'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => InputComponent),
  //     multi: true
  //   }
  // ]
})
export class InputPlusComponent implements OnInit, ControlValueAccessor {

  @Input() label:string = "";
  @Input() errMsg!:string;

  value: string = "";
  onChange!: (value: string) => void;
  onTouched!: () => void;

  constructor(
    @Self() public ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
  }
  
  writeValue(obj: any): void { 
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    
  }

}
