import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  firstValue = 0
  secondValue = 0
  choice = 1;
  result = 0;

  updateFirst(value: number) {
    this.firstValue = value
  }
  updateSecond(value: number) {
    this.secondValue = value
  }
  updateChoice(value: number) {
    this.choice = value
  }
  calculate() {
    switch (this.choice) {
      case 1:
        this.result = this.firstValue + this.secondValue
        break;

      case 2:
        this.result = this.firstValue - this.secondValue
        break;

      case 3:
        this.result = this.firstValue * this.secondValue
        break;

      case 4:
        this.result = this.firstValue / this.secondValue
        break;

      default:
        break;
    }
  }
}
