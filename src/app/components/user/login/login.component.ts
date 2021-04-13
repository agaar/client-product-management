import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.user).subscribe(data => {
      this.router.navigate(['/profile']);
    },err=> {
      this.errorMessage = "Username or password is incorrect.";
    });
  }

}
