import { Component, ElementRef, inject, afterNextRender } from '@angular/core';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Section } from '../components/section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button, Card, Section],
  template: `
    <!-- Hero Section -->
    <app-section className="pt-32 pb-20 md:pt-48 md:pb-32">
      <div class="hero-content max-w-4xl">
        <h1 class="mb-6 text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl">
          I design and build systems that power real-world operations.
        </h1>
        <p class="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
          Scalable backend infrastructure, identity platforms, and distributed systems built for reliability, performance, and scale.
        </p>
        <div class="flex flex-wrap gap-4">
          <app-button href="/contact" variant="primary">Work With Me</app-button>
          <app-button href="/systems" variant="secondary">Explore My Work</app-button>
        </div>
      </div>
    </app-section>

    <!-- Positioning Section -->
    <app-section className="bg-[#141414] border-y border-[#262626]">
      <div class="grid gap-12 md:grid-cols-2">
        <div>
          <h2 class="text-sm font-medium uppercase tracking-widest text-gray-500">Positioning</h2>
          <h3 class="mt-4 text-3xl font-medium leading-tight md:text-4xl">
            Systems over silos. Architecture over ad-hoc.
          </h3>
        </div>
        <div class="text-gray-400">
          <p class="mb-6 leading-relaxed">
            I don't just write code; I architect solutions that solve complex operational challenges. My focus is on the holistic system—how data flows, how services communicate, and how infrastructure scales to meet demand.
          </p>
          <p class="leading-relaxed">
            By treating infrastructure as code and prioritizing robust identity and data management, I build platforms that are resilient, secure, and ready for the future.
          </p>
        </div>
      </div>
    </app-section>

    <!-- Capabilities Section -->
    <app-section>
      <div class="mb-12">
        <h2 class="text-3xl font-medium tracking-tight">Capabilities</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-2">
        <app-card [hover]="true">
          <h3 class="mb-3 text-xl font-medium">Scalable Backend Systems</h3>
          <p class="text-sm text-gray-400 leading-relaxed">
            Designing high-throughput, low-latency microservices and APIs that handle millions of requests with zero downtime.
          </p>
        </app-card>
        <app-card [hover]="true">
          <h3 class="mb-3 text-xl font-medium">Distributed Infrastructure</h3>
          <p class="text-sm text-gray-400 leading-relaxed">
            Architecting multi-region, fault-tolerant cloud environments using Kubernetes, Terraform, and modern DevOps practices.
          </p>
        </app-card>
        <app-card [hover]="true">
          <h3 class="mb-3 text-xl font-medium">Identity & Data Systems</h3>
          <p class="text-sm text-gray-400 leading-relaxed">
            Implementing secure authentication, authorization, and robust data pipelines for sensitive and critical information.
          </p>
        </app-card>
        <app-card [hover]="true">
          <h3 class="mb-3 text-xl font-medium">System Integration</h3>
          <p class="text-sm text-gray-400 leading-relaxed">
            Connecting disparate legacy and modern systems into cohesive, unified platforms that streamline operations.
          </p>
        </app-card>
      </div>
    </app-section>

    <!-- Impact Metrics Section -->
    <app-section className="border-y border-[#262626] bg-[#141414]">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col border-l border-[#262626] pl-6">
          <span class="text-4xl font-semibold text-white">80%</span>
          <span class="mt-2 text-sm text-gray-400">Latency Reduction</span>
        </div>
        <div class="flex flex-col border-l border-[#262626] pl-6">
          <span class="text-4xl font-semibold text-white">National</span>
          <span class="mt-2 text-sm text-gray-400">Scale Systems</span>
        </div>
        <div class="flex flex-col border-l border-[#262626] pl-6">
          <span class="text-4xl font-semibold text-white">Multi</span>
          <span class="mt-2 text-sm text-gray-400">Region Deployments</span>
        </div>
        <div class="flex flex-col border-l border-[#262626] pl-6">
          <span class="text-4xl font-semibold text-white">50%</span>
          <span class="mt-2 text-sm text-gray-400">Efficiency Improvement</span>
        </div>
      </div>
    </app-section>

    <!-- Selected Systems Section -->
    <app-section>
      <div class="mb-12 flex items-end justify-between">
        <h2 class="text-3xl font-medium tracking-tight">Selected Systems</h2>
        <app-button href="/systems" variant="ghost" className="hidden sm:inline-flex">View All</app-button>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <app-card [hover]="true" className="flex flex-col justify-between">
          <div>
            <div class="mb-4 inline-flex items-center rounded-full border border-[#262626] bg-[#141414] px-3 py-1 text-xs font-medium text-gray-300">
              Identity
            </div>
            <h3 class="mb-3 text-xl font-medium">Biometric Platform</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              A national-scale biometric identity verification system processing millions of records with sub-second latency.
            </p>
          </div>
        </app-card>
        <app-card [hover]="true" className="flex flex-col justify-between">
          <div>
            <div class="mb-4 inline-flex items-center rounded-full border border-[#262626] bg-[#141414] px-3 py-1 text-xs font-medium text-gray-300">
              Data
            </div>
            <h3 class="mb-3 text-xl font-medium">Document System</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Distributed document management and processing pipeline utilizing OCR and machine learning for automated classification.
            </p>
          </div>
        </app-card>
        <app-card [hover]="true" className="flex flex-col justify-between">
          <div>
            <div class="mb-4 inline-flex items-center rounded-full border border-[#262626] bg-[#141414] px-3 py-1 text-xs font-medium text-gray-300">
              Finance
            </div>
            <h3 class="mb-3 text-xl font-medium">Investment Platform</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              High-frequency trading and investment management platform built on event-driven architecture.
            </p>
          </div>
        </app-card>
      </div>
      <div class="mt-8 sm:hidden">
        <app-button href="/systems" variant="outline" className="w-full">View All</app-button>
      </div>
    </app-section>

    <!-- Ecosystem Section -->
    <app-section className="border-t border-[#262626]">
      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 class="mb-6 text-3xl font-medium tracking-tight">The Ecosystem</h2>
          <p class="mb-8 text-gray-400 leading-relaxed">
            My work spans across consulting services and proprietary products, forming a cohesive ecosystem of technological solutions.
          </p>
          <app-button href="/ecosystem" variant="outline">Explore the Ecosystem</app-button>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-xl border border-[#262626] bg-[#141414] p-6">
            <h3 class="mb-2 text-lg font-medium">System Anatomy</h3>
            <p class="text-sm text-gray-400">Consulting & Architecture Services</p>
          </div>
          <div class="rounded-xl border border-[#262626] bg-[#141414] p-6">
            <h3 class="mb-2 text-lg font-medium">Bulums Innovations</h3>
            <p class="text-sm text-gray-400">Proprietary Products & Platforms</p>
          </div>
        </div>
      </div>
    </app-section>

    <!-- CTA Section -->
    <app-section className="border-t border-[#262626] bg-gradient-to-b from-[#0a0a0a] to-[#141414] text-center">
      <h2 class="mb-6 text-4xl font-medium tracking-tight md:text-5xl">Ready to build?</h2>
      <p class="mx-auto mb-10 max-w-xl text-gray-400">
        Let's discuss how we can architect a system that scales with your ambition.
      </p>
      <app-button href="/contact" variant="primary">Start a Conversation</app-button>
    </app-section>
  `,
})
export class Home {
  private el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      import('motion').then(({ animate, stagger }) => {
        const heroElements = this.el.nativeElement.querySelectorAll('.hero-content > *');
        animate(
          heroElements,
          { opacity: [0, 1], y: [20, 0] },
          { delay: stagger(0.1), duration: 0.8, ease: 'easeOut' }
        );
      });
    });
  }
}
