import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firt-nested',
  imports: [FormsModule],
  templateUrl: './firt-nested.html',
  styleUrl: './firt-nested.css',
})
export class FirtNested {
  someData = 0
  @Output('valueChanged') someDataChanged: EventEmitter<number> = new EventEmitter<number>()

  updateSomeData(value: number) {
    this.someData = value;
    this.someDataChanged.emit(this.someData)
  }
  // send() {
  //   this.someDataChanged.emit(this.someData)
  // }
}
