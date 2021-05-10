import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservice/user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute ) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    
      let token = this.route.snapshot.paramMap.get('token');
      console.log(token);

      let reqObj = {
        newPassword: this.form.value.password
      }
  
      this.userService.resetPasswordService(reqObj, token).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
