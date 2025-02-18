import { Injectable, inject } from '@angular/core';
import { doc, setDoc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);
  constructor(
  ) { }


  crearDoc(enlace: string, idDoc: string, data: any) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }
  async getUserData(uid: string) {
    const userDocRef = doc(this.firestore, `Usuarios/${uid}`);
    const docSnap = await getDoc(userDocRef);
    return docSnap.exists() ? docSnap.data() : null;
  }
}