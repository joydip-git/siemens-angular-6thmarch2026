import { Component, signal, WritableSignal } from '@angular/core';
//import { NgIf, NgForOf } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // imports: [NgIf, NgForOf, FormsModule],
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  show: WritableSignal<boolean> = signal(false)
  names = ['anil', 'sunil', 'joy']
  nameValue = 'NA'

  // updateName(name: string) {
  //   this.nameValue = name;
  // }

  toggle() {
    //this.show.set(!this.show())
    this.show.update((current) => { return !current })
  }
}
