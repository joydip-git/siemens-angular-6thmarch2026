import { Component, signal } from '@angular/core';
import { Calculator } from "./calculator/calculator";

@Component({
  selector: 'app-root',
  imports: [Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Welcome to Binding"
  width = 300
  updateTitle(newData: string) {
    this.title = newData
  }
}
