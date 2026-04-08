import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { LowerCaseConverterPipe } from './lowercase-converter.pipe';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, CurrencyPipe, LowerCaseConverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "anil"
  department = "HR"
  price = 100
}
