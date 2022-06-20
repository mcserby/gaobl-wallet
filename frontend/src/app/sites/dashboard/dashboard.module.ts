import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '', component: DashboardComponent
    }]),
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
