import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user:User = new User();
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.register(this.user).subscribe((data: any) => {
      this.router.navigate(['/login']);
    },(err: any)=>{
      this.errorMessage = "Username already exists"
    })
  }

}
