import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  // Método para agregar un usuario a Firestore
  async agregarUsuario(usuario: any) {
    try {
      // Agrega un documento a la colección 'usuarios'
      const docRef = await addDoc(collection(this.firestore, 'usuarios'), usuario);
      console.log('Usuario agregado con ID:', docRef.id);
      return docRef;
    } catch (error) {
      console.error('Error al agregar usuario:', error);
      throw error;
    }
  }
}
