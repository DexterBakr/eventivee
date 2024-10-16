import { Component, OnInit } from '@angular/core';
import { Userlogin } from './userModel';
import { UserService } from '../../services/user.login-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userModel = new Userlogin('', ''
  );

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  // دالة تسجيل الدخول المعدلة لإضافة المستخدم إلى Firebase
  
    };
  

