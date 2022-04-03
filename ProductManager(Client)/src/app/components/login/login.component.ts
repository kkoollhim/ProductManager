import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
     username:'',
     password:''
   }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)){
      this.loginService.doLogin(this.credentials).subscribe(
        response=>{
          this.loginService.loginUser(response['token']);
          window.location.href = '/dashboard';
        },
        error =>{
          console.log('Error',error); 
        }
      )
    }
    else{
      console.log('Fields are empty!');
    }
  }

}
