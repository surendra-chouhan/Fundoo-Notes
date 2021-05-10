import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }

    let reqObj = {
      email: this.form.value.email
    }

    this.userService.forgotPasswordService(reqObj).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
    
  }

  ngOnInit(): void {
  }

}
