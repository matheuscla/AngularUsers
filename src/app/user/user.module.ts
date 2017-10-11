import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { UserFormComponent } from "./user-form/user-form.component";
import { UserComponent } from './user.component';
import { UserRoutingModule } from "./user.routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserService } from "./services/user.service";
import { SearchBarComponent } from "../shared/search-bar/search-bar.component";

@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserListComponent,
    SearchBarComponent
  ],
  exports: [UserComponent],
  imports: [
    Ng2FilterPipeModule,
    MaterializeModule,
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ UserService ]
})

export class UserModule {}
