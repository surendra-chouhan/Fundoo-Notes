import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public show = false;
  form: FormGroup;
  cardArray = [] as any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  
  }
