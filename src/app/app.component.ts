import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') inputForm: NgForm;
  defaultGender = 'male';
  alert = '';
  defaultRadio = 'dog';
  animals = ['dog', 'cat', 'horse', 'bee'];

  user= {
    username: '',
    email: '',
    gender: '',
    alert: '',
    animal: ''
  }

  isSubmited = false;

    onClick() {
    // this.inputForm.setValue({
    //   groupUser:{
    //     username: 'ali',
    //     email: ''
    //   },
    //   gender: '',
    //   alert: '',
    //   animal: '', 
    // });
    this.inputForm.form.patchValue({
      groupUser: {
        username: 'ali',
      }
      });
  }

  onSubmit() {
    this.isSubmited = true;
    this.user.username = this.inputForm.value.groupUser.username;
    this.user.email = this.inputForm.value.groupUser.email;
    this.user.gender = this.inputForm.value.gender;
    this.user.alert = this.inputForm.value.alert;
    this.user.animal = this.inputForm.value.animal;

    this.inputForm.reset();
  }
}
