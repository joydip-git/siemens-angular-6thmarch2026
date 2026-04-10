import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  // username = ''
  // password = ''
  // register(e: Event) {
  //   e.preventDefault()

  // }
  register(frm: NgForm) {
    const formGroup: FormGroup = frm.form
    const value = formGroup.value
    console.log(value as User);
  }
}
