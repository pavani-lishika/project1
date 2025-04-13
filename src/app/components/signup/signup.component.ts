import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname:['',Validators.required],
      dob:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.signupForm.value); // ✅ Add this to test
    this.authService.signup(this.signupForm.value).subscribe(() => {
      alert('Signup successful!');
      this.router.navigate(['login']);
    });
  }
  
}
