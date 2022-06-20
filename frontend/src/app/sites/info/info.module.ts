import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {InfoComponent} from "./info.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '', component: InfoComponent
    }]),
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: []
})
export class InfoModule { }
