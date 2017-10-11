import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      'name': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'website': ['', Validators.required],
    })
   }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }

}
