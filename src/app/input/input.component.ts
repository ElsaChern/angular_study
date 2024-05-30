import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { ChairComponent } from '../chair/chair.component';
import { TableComponent } from '../table/table.component';
import { SofaComponent } from '../sofa/sofa.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule, ChairComponent, TableComponent, SofaComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  input: string  = ''
  inputIsEmpty: boolean = false;
  error: boolean = false
  isSofaShowed: boolean = false
  isChairShowed: boolean= false
  isTableShowed: boolean = false

  onInputChange() : void {
    this.inputIsEmpty = false;
    this.error = false
    this.isSofaShowed = false
    this.isChairShowed = false
    this.isTableShowed = false
  }

  submitForm(form: any): boolean | void {
    if (!this.input.length) {
      return this.inputIsEmpty = true;
    }

    if(this.input === 'sofa') {
      return this.isSofaShowed = true
    } else if (this.input === 'chair') {
      return this.isChairShowed = true
    } else if (this.input === 'table') {
      return this.isTableShowed = true
    } else {
      return this.error = true
    }
  }
}

