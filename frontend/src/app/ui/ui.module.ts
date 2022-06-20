import {NgModule} from '@angular/core';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    TranslateModule,
    MatIconModule
  ],
  exports:[
    FileUploadComponent
  ]
})
export class UiModule { }
