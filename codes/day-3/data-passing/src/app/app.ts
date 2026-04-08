import { Component } from '@angular/core';
import { FirtNested } from "./firt-nested/firt-nested";
import { SecondNested } from "./second-nested/second-nested";

@Component({
  selector: 'app-root',
  imports: [FirtNested, SecondNested],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  parentData = 10
  updateParentData(value: number) {
    this.parentData = value
  }
}
