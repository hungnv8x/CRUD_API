import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errLogin: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submit() {
    const data = this.loginForm.value;
    this.authService.login(data).subscribe(res => {
      if (res.status === 'success') {
        const userLogin = res.user;
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        this.router.navigate(['admin/dashboard']);
      } else {
          this.errLogin = res.message;
      }
    });
  }

}
