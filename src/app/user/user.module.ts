import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';

import { UserFormComponent } from "./user-form/user-form.component";
import { UserComponent } from './user.component';
import { UserRoutingModule } from "./user.routing.module";



@NgModule({
  declarations: [UserComponent, UserFormComponent],
  exports: [UserComponent],
  imports: [
    MaterializeModule,
    UserRoutingModule
  ]
})

export class UserModule {}
