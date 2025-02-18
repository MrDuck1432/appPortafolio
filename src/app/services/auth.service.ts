import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    public auth: AngularFireAuth
  ) { }

  registrar(email: string,password:string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  async getUid(){
    const user = await this.auth.currentUser;
    return user?.uid;
  }
}
