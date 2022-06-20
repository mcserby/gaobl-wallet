import { NgModule } from '@angular/core';
import {RegisterComponent} from './register.component';
import {RouterModule} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '', component: RegisterComponent
    }]),
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    TranslateModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class RegisterModule { }
