import {Component} from '@angular/core';
import { ChairComponent } from './chair/chair.component';
import { TableComponent } from './table/table.component';
import { SofaComponent } from './sofa/sofa.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ChairComponent, TableComponent, SofaComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  furnitureInput: string = '';
  isValid: boolean = false;
  imageSrc: string = '';

  onSubmit() {
    const validValues = ['sofa', 'chair', 'table'];
    this.isValid = validValues.includes(this.furnitureInput);

    if (this.isValid) {
      this.imageSrc = `./assets/${this.furnitureInput}.jpeg`;
    } else {
      this.imageSrc = '';
    }
  }

  logMessage(message: string) {
    console.log(message);
  }
}