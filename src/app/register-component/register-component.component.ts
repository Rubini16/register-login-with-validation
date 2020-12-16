import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../confirm-password.validator';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: "app-register-component",
  templateUrl: "./register-component.component.html",
  styleUrls: ["./register-component.component.css"],
})
export class RegisterComponentComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: HttpServiceService
  ) {}
  GenderList: string[] = ["Female", "Male"];

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        mobile: [
          "",
          [Validators.required, Validators.pattern("^[0-9]{10,12}$")],
        ],
        gender: ["", Validators.required],
        address: ["", [Validators.required, Validators.maxLength(255)]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword"),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.router.navigate(["/dashboard"]);
  }
}
