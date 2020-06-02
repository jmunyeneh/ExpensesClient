import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private service: AuthService) {
    this.registerForm = this.fb.group({
       userName: ['', Validators.required],
       password: ['', Validators.required],
       confirmPassword: ['', Validators.required]
    }, {validator: matchingFields('password','confirmPassword')})

   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    delete this.registerForm.value.confirmPassword;
    this.service.register(this.registerForm.value).subscribe((data:any)=> {
      console.log(data);
      localStorage.setItem('userName', data.userName);
      localStorage.setItem('token_value', data.token);
    })
  }


}

function matchingFields(field1, field2){
  return form => {
      if(form.controls[field1].value !== form.controls[field2].value)
      return {matchingFields: true}
  }
}
