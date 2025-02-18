import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword,Auth} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    public auth: AngularFireAuth,
    private afAuth:Auth,
  ) { }

  registrar(email: string,password:string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  async getUid(){
    const user = await this.auth.currentUser;
    return user?.uid;
  }

  async login(email: string, password: string){
    const credentials = await signInWithEmailAndPassword(this.afAuth, email, password);
    return credentials;
  }
}
