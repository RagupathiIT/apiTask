import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  signInForm: FormGroup;
  requiredEmail: string = "ragu@gmail.com";
  requiredPassword: string = "ragupathi123";

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        
      ]]
    });
  }

  onSubmit() {
    console.log("Form Value:", this.signInForm.value); 
    console.log("Form Validity:", this.signInForm.valid);
    if (this.signInForm.valid) {
      const email = this.signInForm.value.email;
      const password = this.signInForm.value.password;

      console.log("Email:", email);
      console.log("Password:", password);

      if (email === this.requiredEmail && password === this.requiredPassword) {
        console.log("Navigating to '/home'");
        this.router.navigate(['/home']);
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("Please enter a valid email and password.");
    }
  }






}
