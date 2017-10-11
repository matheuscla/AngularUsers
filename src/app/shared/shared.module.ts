import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [MaterializeModule]
})

export class SharedModule {}
