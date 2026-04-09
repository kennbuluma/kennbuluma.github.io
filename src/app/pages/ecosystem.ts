import { Component } from '@angular/core';
import { Section } from '../components/section';
import { Card } from '../components/card';
import { Button } from '../components/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ecosystem',
  standalone: true,
  imports: [Section, Card, Button, MatIconModule],
  template: `
    <app-section className="pt-32 pb-20 md:pt-48">
      <div class="max-w-3xl">
        <h1 class="mb-6 text-4xl font-semibold tracking-tight md:text-6xl">
          The Ecosystem
        </h1>
        <p class="text-lg leading-relaxed text-gray-400 md:text-xl">
          How my personal brand, consulting services, and proprietary products interconnect to deliver comprehensive technological solutions.
        </p>
      </div>
    </app-section>

    <app-section className="border-t border-[#262626] bg-[#141414]">
      <!-- Visual Flow Diagram (CSS Grid based) -->
      <div class="mb-20 flex flex-col items-center justify-center">
        
        <!-- Top Node -->
        <div class="z-10 flex h-24 w-64 flex-col items-center justify-center rounded-xl border border-[#3b82f6]/50 bg-[#0a0a0a] shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <span class="text-sm font-medium uppercase tracking-widest text-gray-500">The Architect</span>
          <span class="mt-1 text-lg font-semibold text-white">Kennedy Buluma</span>
        </div>

        <!-- Connecting Lines -->
        <div class="flex w-full max-w-md justify-between">
          <div class="h-16 w-[2px] bg-gradient-to-b from-[#3b82f6]/50 to-[#262626] ml-[25%]"></div>
          <div class="h-16 w-[2px] bg-gradient-to-b from-[#3b82f6]/50 to-[#262626] mr-[25%]"></div>
        </div>
        <div class="flex w-full max-w-md justify-between border-t border-[#262626] px-[25%]">
          <div class="h-8 w-[2px] bg-[#262626] -mt-[1px]"></div>
          <div class="h-8 w-[2px] bg-[#262626] -mt-[1px]"></div>
        </div>

        <!-- Bottom Nodes -->
        <div class="flex w-full max-w-3xl flex-col gap-8 sm:flex-row sm:justify-between">
          <div class="z-10 flex h-32 w-full flex-col items-center justify-center rounded-xl border border-[#262626] bg-[#0a0a0a] sm:w-72">
            <span class="text-sm font-medium uppercase tracking-widest text-gray-500">Services</span>
            <span class="mt-1 text-xl font-semibold text-white">System Anatomy</span>
            <span class="mt-2 text-xs text-gray-400">Consulting & Architecture</span>
          </div>
          
          <!-- Feedback Loop Line -->
          <div class="hidden items-center sm:flex">
            <div class="h-[2px] w-16 border-t border-dashed border-[#262626]"></div>
            <mat-icon class="text-[#262626] -ml-2">chevron_right</mat-icon>
            <mat-icon class="text-[#262626] -ml-4">chevron_left</mat-icon>
            <div class="h-[2px] w-16 border-t border-dashed border-[#262626]"></div>
          </div>

          <div class="z-10 flex h-32 w-full flex-col items-center justify-center rounded-xl border border-[#262626] bg-[#0a0a0a] sm:w-72">
            <span class="text-sm font-medium uppercase tracking-widest text-gray-500">Products</span>
            <span class="mt-1 text-xl font-semibold text-white">Bulums Innovations</span>
            <span class="mt-2 text-xs text-gray-400">Proprietary Platforms</span>
          </div>
        </div>
      </div>

      <div class="grid gap-12 md:grid-cols-2">
        <app-card className="flex flex-col h-full">
          <div class="flex-1">
            <h2 class="mb-4 text-2xl font-medium">System Anatomy</h2>
            <p class="mb-6 text-gray-400 leading-relaxed">
              The consulting arm of the ecosystem. System Anatomy provides high-level architectural guidance, system audits, and hands-on engineering for complex backend challenges.
            </p>
            <ul class="space-y-3 text-sm text-gray-300">
              <li class="flex items-start gap-3">
                <mat-icon class="text-[#3b82f6] text-[20px] h-[20px] w-[20px]">check_circle</mat-icon>
                <span>Architecture Reviews & Audits</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-[#3b82f6] text-[20px] h-[20px] w-[20px]">check_circle</mat-icon>
                <span>Scalability Consulting</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-[#3b82f6] text-[20px] h-[20px] w-[20px]">check_circle</mat-icon>
                <span>Custom System Development</span>
              </li>
            </ul>
          </div>
          <div class="mt-8 pt-6 border-t border-[#262626]">
            <app-button href="https://systemanatomy.dev/" variant="outline" className="w-full">Visit System Anatomy</app-button>
          </div>
        </app-card>

        <app-card className="flex flex-col h-full">
          <div class="flex-1">
            <h2 class="mb-4 text-2xl font-medium">Bulums Innovations</h2>
            <p class="mb-6 text-gray-400 leading-relaxed">
              The product incubator. Bulums Innovations develops proprietary tools and platforms that solve recurring infrastructure and identity challenges identified through consulting.
            </p>
            <ul class="space-y-3 text-sm text-gray-300">
              <li class="flex items-start gap-3">
                <mat-icon class="text-[#3b82f6] text-[20px] h-[20px] w-[20px]">check_circle</mat-icon>
                <span>Identity Verification APIs</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-[#3b82f6] text-[20px] h-[20px] w-[20px]">check_circle</mat-icon>
                <span>Infrastructure Monitoring Tools</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-[#3b82f6] text-[20px] h-[20px] w-[20px]">check_circle</mat-icon>
                <span>Data Pipeline Frameworks</span>
              </li>
            </ul>
          </div>
          <div class="mt-8 pt-6 border-t border-[#262626]">
            <app-button href="https://bulums.com" variant="outline" className="w-full">Visit Bulums Innovations</app-button>
          </div>
        </app-card>
      </div>
    </app-section>
  `,
})
export class Ecosystem {}
