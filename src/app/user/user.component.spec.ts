import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { UserComponent } from './user.component';
import { UserFormComponent } from "./user-form/user-form.component";
import { SearchBarComponent } from "../shared/search-bar/search-bar.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserService } from "./services/user.service";
import { HttpModule } from '@angular/http'
import { MzToastService } from "ng2-materialize/dist";
import { MaterializeModule } from 'ng2-materialize';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, UserFormComponent, SearchBarComponent , UserListComponent],
      imports: [Ng2FilterPipeModule, ReactiveFormsModule, FormsModule, HttpModule, MaterializeModule],
      providers: [ UserService, MzToastService ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
