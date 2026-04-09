import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-[#262626] bg-[#0a0a0a] py-12">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <p class="text-sm text-gray-500">
          &copy; {{ currentYear }} Kennedy Buluma. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="https://github.com/kennbuluma/" target="_blank" rel="noopener noreferrer" class="text-gray-400 transition-colors hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kennedy-buluma/" target="_blank" rel="noopener noreferrer" class="text-gray-400 transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:kennbuluma@gmail.com" class="text-gray-400 transition-colors hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  currentYear = new Date().getFullYear();
}
