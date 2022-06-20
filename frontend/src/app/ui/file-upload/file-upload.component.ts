import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {login} from '../../store/actions/auth.action';
import {Router} from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
  }

  fileBrowserHandler($event: Event) {
    const filesInput = document.getElementById('fileDropRef') as HTMLInputElement;
    if (filesInput) {
      const files = filesInput['files'];
      if (files && files.length > 0) {
        const file = files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(file, 'UTF-8');
        fileReader.onload = (event: ProgressEvent<FileReader>) => {
          const privateKey = event.target?.result;
          if (typeof privateKey === 'string') {
            SharedDataService.privateKey = privateKey;
            this.router.navigate(['/dashboard']).then();
          }
        };
        fileReader.onerror = (event: ProgressEvent<FileReader>) => {
          console.error('Error reading file:', event);
        };
      }
    }
  }
}
