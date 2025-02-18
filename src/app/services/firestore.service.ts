import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, setDoc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);
  constructor(
    public database: AngularFirestore
  ) { }

  crearDoc(path: string,uid: string,data: any){
    const collection = this.database.collection(path);
    return collection.doc(uid).set(data);
  }

  crearDoc2(enlace: string, idDoc: string, data: any) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }
}