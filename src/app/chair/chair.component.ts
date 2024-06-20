import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-chair',
  standalone: true,
  imports: [],
  template: '',
})
export class ChairComponent {
  @Input({transform: parseInput}) formInput: string = '';
  @Output() dataReceived = new EventEmitter<string>();
}

function parseInput(this: {
  dataReceived: any; transform: (value: string | undefined) => any; 
}, value: string | undefined): any {
  if (value === 'chair') {
    return (
      value.toLowerCase(),
      this.dataReceived.emit('chair - данные получены!')
    )
  }
}