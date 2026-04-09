import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <header class="sticky top-0 z-50 w-full border-b border-[#262626] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <a routerLink="/" class="text-lg font-semibold tracking-tight text-white">
          Kennedy<span class="text-gray-500"> Buluma</span>
        </a>
        <nav class="hidden md:flex items-center gap-8">
          @for (link of links; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="text-white"
              [routerLinkActiveOptions]="{exact: link.path === '/'}"
              class="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {{ link.label }}
            </a>
          }
        </nav>
        <div class="flex items-center md:hidden">
          <!-- Mobile menu button could go here -->
          <button class="text-gray-400 hover:text-white">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>
    </header>
  `,
})
export class Navbar {
  links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/systems', label: 'Systems' },
    { path: '/ecosystem', label: 'Ecosystem' },
    { path: '/contact', label: 'Contact' },
  ];
}
