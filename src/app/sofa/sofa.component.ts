import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-sofa',
  standalone: true,
  imports: [],
  template: '',
})
export class SofaComponent {
  @Input({transform: parseInput}) formInput: string = '';
  @Output() dataReceived = new EventEmitter<string>();
}

function parseInput(this: {
  dataReceived: any; transform: (value: string | undefined) => any; 
}, value: string | undefined): any {
  if (value === 'sofa') {
    return (
      value.toLowerCase(),
      this.dataReceived.emit('sofa - данные получены!')
    )
  }
}