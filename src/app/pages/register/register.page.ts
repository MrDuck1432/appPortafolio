import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseAuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage{
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: FirebaseAuthService,
    private router: Router,
    private firestore: FirestoreService,
  ) {
    this.registroForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidoPaterno: ['', [Validators.required, Validators.minLength(2)]],
      apellidoMaterno: ['', [Validators.required, Validators.minLength(2)]],
      fechaNacimiento: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { notSame: true };
  }

  async register() {
    const path = 'Usuarios';
    if (this.registroForm.valid) {
      const { correo, password } = this.registroForm.getRawValue();
      const valores = this.registroForm.getRawValue();
      await this.auth.registrar(correo,password);
      const uid = await this.auth.getUid();
      console.log(path);
      console.log(uid);
      console.log(valores);
      const uid2= '01'
      const data= {nombre: 'prueba',precio: 30}
      if (uid2 !== undefined) {
        this.firestore.crearDoc2(path,uid!, valores);//revisar
      } else {
        console.error("UID no disponible");
      }
      console.log(valores);
      //this.firestore.crearDoc(path,uid,valores);
      //this.router.navigate(['/login']);
    }
  }
}