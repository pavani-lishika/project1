import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(users => {
      if (users.length > 0) {
        alert('Login successful!');
        this.router.navigate(['resto']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
