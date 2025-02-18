import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  userData: any = null;
  constructor(
    private authService: FirebaseAuthService,
    private router: Router,
    private firestoreService: FirestoreService
  ) { }

  async ngOnInit() {
    const uid = this.authService.getUid();
    if (uid) {
      this.userData = await this.firestoreService.getUserData(uid);
    }
  }
  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
    // Redirigir a la página de inicio o login
  }
}
