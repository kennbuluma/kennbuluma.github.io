import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  template: `
    <section [class]="computedClasses" [id]="id()">
      <div class="mx-auto w-full max-w-7xl px-6 md:px-12">
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class Section {
  className = input<string>('');
  id = input<string>('');

  get computedClasses(): string {
    return `py-20 md:py-32 ${this.className()}`;
  }
}
