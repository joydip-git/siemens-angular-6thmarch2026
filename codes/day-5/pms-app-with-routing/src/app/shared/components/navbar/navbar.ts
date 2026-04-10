import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TokenService } from '../../services/token-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  tokenSvc = inject(TokenService)

  logout() {
    this.tokenSvc.removeToken()
  }
}
