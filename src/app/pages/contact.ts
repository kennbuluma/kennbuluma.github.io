import { Component, inject } from '@angular/core';
import { Section } from '../components/section';
import { Button } from '../components/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Section, Button, ReactiveFormsModule],
  template: `
    <app-section className="pt-32 pb-20 md:pt-48">
      <div class="grid gap-16 md:grid-cols-2">
        <div>
          <h1 class="mb-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Let's build something robust.
          </h1>
          <p class="mb-12 text-lg leading-relaxed text-gray-400">
            Whether you need to scale an existing platform, architect a new system from scratch, or discuss a potential collaboration, I'm ready to talk.
          </p>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium uppercase tracking-widest text-gray-500">Email</h3>
              <a href="mailto:kennbuluma@gmail.com" class="mt-1 block text-lg text-white hover:text-[#3b82f6] transition-colors">
                kennbuluma&#64;gmail.com
              </a>
            </div>
            <div>
              <h3 class="text-sm font-medium uppercase tracking-widest text-gray-500">Location</h3>
              <p class="mt-1 text-lg text-white">
                Global / Remote
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-[#262626] bg-[#141414] p-8">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label for="name" class="mb-2 block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                formControlName="name"
                class="w-full rounded-md border border-[#262626] bg-[#0a0a0a] px-4 py-3 text-white placeholder-gray-600 focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                formControlName="email"
                class="w-full rounded-md border border-[#262626] bg-[#0a0a0a] px-4 py-3 text-white placeholder-gray-600 focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6] transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label for="message" class="mb-2 block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                formControlName="message"
                rows="5"
                class="w-full rounded-md border border-[#262626] bg-[#0a0a0a] px-4 py-3 text-white placeholder-gray-600 focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6] transition-colors resize-none"
                placeholder="Tell me about your system requirements..."
              ></textarea>
            </div>
            <app-button type="submit" variant="primary" className="w-full" [disabled]="contactForm.invalid || isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </app-button>
          </form>
        </div>
      </div>
    </app-section>
  `,
})
export class Contact {
  private fb = inject(FormBuilder);
  contactForm: FormGroup;
  isSubmitting = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.contactForm.reset();
        alert('Message sent successfully!'); // In a real app, use a toast notification
      }, 1500);
    }
  }
}
