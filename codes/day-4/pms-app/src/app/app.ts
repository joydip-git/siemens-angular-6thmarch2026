import { Component, signal } from '@angular/core';
import { ProductList } from "./products/components/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  show = signal(false)
}
