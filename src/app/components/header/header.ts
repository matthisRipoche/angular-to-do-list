import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);

  isCreatePage(): boolean {
    return this.router.url === '/create';
  }

  toggleNav() {
    if (this.isCreatePage()) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/create']);
    }
  }
}
