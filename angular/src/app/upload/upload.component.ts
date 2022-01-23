import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  readonly baseApiUrl = "http://localhost:4321/fileupload"
  constructor(private http: HttpClient) { }
  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("filetoupload", file, file.name);
    return this.http.post(this.baseApiUrl, formData)
  }
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  fileURL: string = "";
  loading: boolean = false;
  file: File | null = null;

  constructor(private fileUploadService: FileUploadService) { }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  send() {
    if (!this.file) return;
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe({
      next: (data: any) => {
        if (data[0]?.url) {
          this.fileURL = data[0].url;
          this.loading = false;
        }
      },
      error: err => this.loading = false
    }
    );
  }

}
