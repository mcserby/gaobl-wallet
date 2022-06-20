import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {UiModule} from '../../ui/ui.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        RouterModule.forChild([{
            path: '', component: LoginComponent
        }]),
        UiModule,
        TranslateModule
    ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
