import { Component } from '@angular/core';
import { Section } from '../components/section';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Section],
  template: `
    <app-section className="pt-32 pb-20 md:pt-48">
      <div class="max-w-3xl">
        <h1 class="mb-8 text-4xl font-semibold tracking-tight md:text-6xl">
          Systems Thinker. Architect. Builder.
        </h1>
        <p class="text-lg leading-relaxed text-gray-400 md:text-xl">
          I don't fit neatly into standard job titles. I am a systems builder. My focus is on the architecture, the data flow, and the infrastructure that makes complex operations possible.
        </p>
      </div>
    </app-section>

    <app-section className="border-t border-[#262626] bg-[#141414]">
      <div class="grid gap-12 md:grid-cols-3">
        <div class="md:col-span-1">
          <h2 class="text-2xl font-medium tracking-tight">Philosophy</h2>
        </div>
        <div class="md:col-span-2">
          <div class="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 class="mb-3 text-lg font-medium text-white">Resilience by Design</h3>
              <p class="text-sm leading-relaxed text-gray-400">
                Systems should expect failure and handle it gracefully. I build with fault tolerance and redundancy at the core.
              </p>
            </div>
            <div>
              <h3 class="mb-3 text-lg font-medium text-white">Data Integrity</h3>
              <p class="text-sm leading-relaxed text-gray-400">
                Data is the lifeblood of any system. Ensuring its accuracy, security, and availability is non-negotiable.
              </p>
            </div>
            <div>
              <h3 class="mb-3 text-lg font-medium text-white">Scalable Foundations</h3>
              <p class="text-sm leading-relaxed text-gray-400">
                I architect for the future, ensuring that the infrastructure can handle 10x or 100x growth without a complete rewrite.
              </p>
            </div>
            <div>
              <h3 class="mb-3 text-lg font-medium text-white">Simplicity in Complexity</h3>
              <p class="text-sm leading-relaxed text-gray-400">
                The best systems hide their complexity. I strive for clean interfaces and modular architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-section>

    <app-section className="border-t border-[#262626]">
      <div class="grid gap-12 md:grid-cols-3">
        <div class="md:col-span-1">
          <h2 class="text-2xl font-medium tracking-tight">Domain Expertise</h2>
        </div>
        <div class="md:col-span-2">
          <div class="space-y-12">
            <div class="border-l-2 border-[#262626] pl-6">
              <h3 class="mb-2 text-xl font-medium">Identity & Access Management</h3>
              <p class="text-gray-400 leading-relaxed">
                Designing national-scale biometric platforms, secure authentication flows, and role-based access control systems for highly sensitive environments.
              </p>
            </div>
            <div class="border-l-2 border-[#262626] pl-6">
              <h3 class="mb-2 text-xl font-medium">Financial Technology</h3>
              <p class="text-gray-400 leading-relaxed">
                Building low-latency trading platforms, secure transaction processing pipelines, and robust ledger systems.
              </p>
            </div>
            <div class="border-l-2 border-[#262626] pl-6">
              <h3 class="mb-2 text-xl font-medium">Document & Data Processing</h3>
              <p class="text-gray-400 leading-relaxed">
                Architecting distributed systems for document ingestion, OCR processing, and automated classification using machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-section>

    <app-section className="border-t border-[#262626] bg-[#141414]">
      <div class="grid gap-12 md:grid-cols-3">
        <div class="md:col-span-1">
          <h2 class="text-2xl font-medium tracking-tight">Technical Depth</h2>
        </div>
        <div class="md:col-span-2">
          <div class="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 class="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">Infrastructure</h3>
              <ul class="space-y-2 text-gray-300">
                <li>Kubernetes & Docker</li>
                <li>Terraform & Infrastructure as Code</li>
                <li>AWS, GCP, Azure</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">Backend & APIs</h3>
              <ul class="space-y-2 text-gray-300">
                <li>Go, Rust, Node.js</li>
                <li>gRPC & Protocol Buffers</li>
                <li>GraphQL & REST</li>
                <li>Event-Driven Architecture</li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">Data Systems</h3>
              <ul class="space-y-2 text-gray-300">
                <li>PostgreSQL & Distributed SQL</li>
                <li>Redis & Caching Layers</li>
                <li>Kafka & Message Brokers</li>
                <li>Elasticsearch</li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">Security</h3>
              <ul class="space-y-2 text-gray-300">
                <li>OAuth2 & OIDC</li>
                <li>Zero Trust Architecture</li>
                <li>Encryption at Rest & Transit</li>
                <li>Compliance (SOC2, GDPR)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </app-section>
  `,
})
export class About {}
