import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserFormComponent } from "./user-form/user-form.component";
import { UserComponent } from './user.component';
import { UserRoutingModule } from "./user.routing.module";



@NgModule({
  declarations: [UserComponent, UserFormComponent],
  exports: [UserComponent],
  imports: [
    MaterializeModule,
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class UserModule {}
