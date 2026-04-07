import { Component } from '@angular/core';
import { SecondComponent } from "./second/second";

@Component({
  selector: 'app-root',
  imports: [SecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
