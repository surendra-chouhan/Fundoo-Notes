import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value.email);
      let reqObj = {
                      email: this.form.value.email,
                      password: this.form.value.password
                    }
      console.log(reqObj);
      this.userService.loginService(reqObj).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }

  }

  ngOnInit(): void {
  }

}
