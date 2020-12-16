import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  users: any;
  importedFile: any;

  @ViewChild("labelImport")
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;

  constructor(private service: HttpServiceService, private router: Router) {
    this.formImport = new FormGroup({
      importFile: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.users = data;
    });
  }
  onFileChange(file: FileList) {
    console.log(this.importedFile);
    this.labelImport.nativeElement.innerText = Array.from(file)
      .map((f) => f.name)
      .join(", ");
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload.name);
    this.importedFile = this.fileToUpload.name;
  }
  logout() {
    this.router.navigate(["/register"]);
  }

  downloadFile(data) {
    console.log(data);
  }
}
