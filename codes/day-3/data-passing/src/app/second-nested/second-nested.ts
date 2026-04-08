import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-nested',
  imports: [],
  templateUrl: './second-nested.html',
  styleUrl: './second-nested.css',
})
export class SecondNested {
  @Input('value') data = 0
}
