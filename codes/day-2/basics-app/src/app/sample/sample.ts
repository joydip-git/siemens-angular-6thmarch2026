import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.css',
})
export class Sample {
  //data = 100
  data: WritableSignal<number> = signal(0)
  readOnlyData = this.data.asReadonly()
  multipliedValue: Signal<number> = computed(() => this.data() * 2)
  // updateData(value: number) {
  //   this.data = value
  // }
}
