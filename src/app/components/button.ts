import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>

    @if (href()) {
      @if (isExternalLink) {
        <a
          [href]="href()"
          target="_blank"
          rel="noopener noreferrer"
          [class]="computedClasses"
        >
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </a>
      } @else {
        <a
          [routerLink]="href()"
          [class]="computedClasses"
        >
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </a>
      }
    } @else {
      <button
        [type]="type()"
        [class]="computedClasses"
        [disabled]="disabled()"
        (click)="clicked.emit($event)"
      >
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </button>
    }
  `,
})
export class Button {
  variant = input<'primary' | 'secondary' | 'outline' | 'ghost'>('primary');
  href = input<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  className = input<string>('');
  disabled = input<boolean>(false);
  
  clicked = output<MouseEvent>();

  get isExternalLink(): boolean {
    const link = this.href();
    return !!link && (link.startsWith('http://') || link.startsWith('https://'));
  }

  get computedClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2';
    
    let variantClasses = '';
    switch (this.variant()) {
      case 'primary':
        variantClasses = 'bg-white text-black hover:bg-gray-200';
        break;
      case 'secondary':
        variantClasses = 'bg-[#141414] text-white hover:bg-[#1f1f1f] border border-[#262626]';
        break;
      case 'outline':
        variantClasses = 'border border-[#262626] bg-transparent hover:bg-[#141414] text-white';
        break;
      case 'ghost':
        variantClasses = 'bg-transparent hover:bg-[#141414] text-white';
        break;
    }

    return `${baseClasses} ${variantClasses} ${this.className()}`;
  }
}
