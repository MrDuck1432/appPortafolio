import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private afAuth: Auth) {}

  // Registrar un nuevo usuario
  registrar(email: string, password: string) {
    return createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  // Obtener el UID del usuario autenticado
  getUid(): string | null {
    return this.afAuth.currentUser?.uid ?? null;
  }

  // Iniciar sesión
  async login(email: string, password: string) {
    const credentials = await signInWithEmailAndPassword(this.afAuth, email, password);
    return credentials;
  }

  // Cerrar sesión
  logout() {
    return signOut(this.afAuth);
  }

  // Obtener el estado de autenticación como observable
  getAuthState(): Observable<User | null> {
    return new Observable((observer) => {
      onAuthStateChanged(this.afAuth, (user) => {
        observer.next(user);
      });
    });
  }
}
