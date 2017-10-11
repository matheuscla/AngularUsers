import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from "../services/user.service";
import { MzToastService } from "ng2-materialize/dist";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
    private toastService: MzToastService
  ) {

    this.userForm = formBuilder.group({
      'name': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'website': ['', Validators.required],
      'street': ['', Validators.required],
      'suite': ['', Validators.required],
      'city': ['', Validators.required],
      'zip': ['', Validators.required],
      'company_name': ['', Validators.required],
      'catchphrase': ['', Validators.required],
      'bs': [''],      
    })
   }

  ngOnInit() {
  }

  onSubmit(form) {
    const user = {
      'name': form.name,
      'username': form.username,
      'email': form.email,
      'phone': form.phone,
      'website': form.website,
      'address': {
        'street': form.street,
        'suite': form.suite,
        'city': form.city,
        'zipcode': form.zip
      },
      'company': {
        'name': form.company_name,
        'catchPhrase': form.catchphrase,
        'bs': form.bs
      }
    }
    
    this.userForm.reset();
    this.userService.createUser(user).then(res => {
      if (res == 'OK') {
        this.toastService.show('User created successfully!', 4000, 'green');
      }
    })
  }

}
