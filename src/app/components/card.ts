import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div [class]="computedClasses">
      <ng-content></ng-content>
    </div>
  `,
})
export class Card {
  className = input<string>('');
  hover = input<boolean>(false);

  get computedClasses(): string {
    const baseClasses = 'rounded-xl border border-[#262626] bg-[#0a0a0a] p-6 text-white';
    const hoverClasses = this.hover() ? 'transition-all duration-300 hover:border-gray-500 hover:bg-[#141414]' : '';
    return `${baseClasses} ${hoverClasses} ${this.className()}`;
  }
}
