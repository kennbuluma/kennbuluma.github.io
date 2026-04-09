import { Component } from '@angular/core';
import { Section } from '../components/section';
import { Card } from '../components/card';

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [Section, Card],
  template: `
    <app-section className="pt-32 pb-20 md:pt-48">
      <div class="max-w-3xl">
        <h1 class="mb-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Selected Systems
        </h1>
        <p class="text-lg leading-relaxed text-gray-400 md:text-xl">
          A deep dive into the architecture and impact of the platforms I've built.
        </p>
      </div>
    </app-section>

    <app-section className="border-t border-[#262626]">
      <div class="space-y-24">
        
        <!-- System 1 -->
        <div class="grid gap-12 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <div class="sticky top-32">
              <div class="mb-4 inline-flex items-center rounded-full border border-[#262626] bg-[#141414] px-3 py-1 text-xs font-medium text-gray-300">
                Identity & Security
              </div>
              <h2 class="mb-4 text-3xl font-medium tracking-tight">National Biometric Platform</h2>
              <p class="mb-8 text-gray-400 leading-relaxed">
                A highly secure, distributed system for processing and verifying biometric data at a national scale. Designed to handle millions of concurrent requests with sub-second latency while maintaining strict compliance and data sovereignty.
              </p>
              <div class="grid grid-cols-2 gap-6 border-t border-[#262626] pt-8">
                <div>
                  <div class="text-2xl font-semibold text-white">50M+</div>
                  <div class="text-sm text-gray-500">Records Processed</div>
                </div>
                <div>
                  <div class="text-2xl font-semibold text-white">< 200ms</div>
                  <div class="text-sm text-gray-500">P99 Latency</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7">
            <app-card className="h-full bg-[#141414]">
              <h3 class="mb-6 text-xl font-medium">Architecture Overview</h3>
              <div class="space-y-8">
                <div>
                  <h4 class="mb-2 font-medium text-gray-300">Event-Driven Core</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Utilized Kafka as the central nervous system, decoupling ingestion from processing. This allowed the system to absorb massive traffic spikes without dropping requests.
                  </p>
                </div>
                <div>
                  <h4 class="mb-2 font-medium text-gray-300">Distributed Matching Engine</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Custom-built, memory-optimized matching nodes deployed across multiple Kubernetes clusters. Nodes use a custom binary protocol over gRPC for ultra-fast communication.
                  </p>
                </div>
                <div>
                  <h4 class="mb-2 font-medium text-gray-300">Zero-Trust Security</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Implemented mutual TLS (mTLS) between all microservices and hardware-backed encryption for data at rest.
                  </p>
                </div>
              </div>
            </app-card>
          </div>
        </div>

        <!-- System 2 -->
        <div class="grid gap-12 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <div class="sticky top-32">
              <div class="mb-4 inline-flex items-center rounded-full border border-[#262626] bg-[#141414] px-3 py-1 text-xs font-medium text-gray-300">
                Data Processing
              </div>
              <h2 class="mb-4 text-3xl font-medium tracking-tight">Automated Document Pipeline</h2>
              <p class="mb-8 text-gray-400 leading-relaxed">
                An intelligent document processing system that ingests unstructured data, performs OCR, and uses machine learning models to classify and extract key information.
              </p>
              <div class="grid grid-cols-2 gap-6 border-t border-[#262626] pt-8">
                <div>
                  <div class="text-2xl font-semibold text-white">99.9%</div>
                  <div class="text-sm text-gray-500">Uptime</div>
                </div>
                <div>
                  <div class="text-2xl font-semibold text-white">85%</div>
                  <div class="text-sm text-gray-500">Manual Effort Reduced</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7">
            <app-card className="h-full bg-[#141414]">
              <h3 class="mb-6 text-xl font-medium">Architecture Overview</h3>
              <div class="space-y-8">
                <div>
                  <h4 class="mb-2 font-medium text-gray-300">Serverless Ingestion</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Leveraged serverless functions for the initial ingestion layer to handle unpredictable document upload volumes cost-effectively.
                  </p>
                </div>
                <div>
                  <h4 class="mb-2 font-medium text-gray-300">Asynchronous Processing Workflow</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Implemented a robust state machine using Temporal.io to manage the complex, multi-step processing workflow, ensuring reliability and easy error recovery.
                  </p>
                </div>
                <div>
                  <h4 class="mb-2 font-medium text-gray-300">Scalable ML Inference</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Deployed ML models on GPU-enabled Kubernetes nodes with auto-scaling based on queue depth, optimizing resource utilization.
                  </p>
                </div>
              </div>
            </app-card>
          </div>
        </div>

      </div>
    </app-section>
  `,
})
export class Systems {}
