import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {

  usuario = {
    nombre: '',
    email: '',
    fechaRegistro: new Date()
  };

  constructor(private firestoreService: FirestoreService) { }

  // Método para guardar el usuario en Firestore
  async registrarUsuario() {
    try {
      // Llama al servicio para agregar el usuario
      await this.firestoreService.agregarUsuario(this.usuario);
      console.log('Usuario registrado correctamente');
      this.limpiarFormulario(); // Limpia el formulario después de guardar
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.usuario = {
      nombre: '',
      email: '',
      fechaRegistro: new Date()
    };
  }
}