import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseAuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: FirebaseAuthService,
    private router: Router,

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
      // Aquí iría la lógica de autenticación
    }
  }

  login(){
    if (this.loginForm.valid) {
      const {email,password}= this.loginForm.getRawValue();
      this.auth.login(email,password)
      .then(()=>{
        this.router.navigate(['/home'])
        this.loginForm.reset();
      }).catch(error=>{
        console.log("error de credenciales")
      })
    }
  }
//borrar
//borrar
  autoCompletar() {
    this.loginForm.patchValue({
      email: 'seba6@seba.com',
      password: '12345678'
    });
  }
//borrar
//borrar
}
