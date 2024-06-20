import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  template: '',
})
export class TableComponent {
  @Input({transform: parseInput}) formInput: string = '';
  @Output() dataReceived = new EventEmitter<string>();
}

function parseInput(this: {
  dataReceived: any; transform: (value: string | undefined) => any; 
}, value: string | undefined): any {
  if (value === 'table') {
    return (
      value.toLowerCase(),
      this.dataReceived.emit('table - данные получены!')
    )
  }
}