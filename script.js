// ==========================================================================
// Kennedy Buluma — Portfolio Scripts
// Theme Switching (Light/Dark), Modal Viewer, Project Filtering, Navigation
// ==========================================================================

(() => {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. Theme Management (Black, Copper, White with Light & Dark Mode)
  // --------------------------------------------------------------------------
  const THEME_STORAGE_KEY = "kb-theme-preference";
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    htmlElement.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      themeToggle.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  // Initialize theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    });
  }

  // Listen to OS theme change if user hasn't explicitly set preference
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Project Filter Tabs
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 4. Project Detail Modal Data & Handler
  // --------------------------------------------------------------------------
  const projectData = {
    "doctors-directory": {
      category: "Healthcare Product · Mobile Architecture",
      title: "Doctors’ Directory Kenya",
      subtitle: "A high-performance offline-first mobile directory transforming fragmented practitioner records into an accessible tool for clinicians and patients.",
      challenge: "Healthcare professional registries in emerging markets are often dispersed across static PDFs, governmental boards, and siloed portals. Clinicians and patients frequently face limited cellular bandwidth or erratic connections in regional clinics.",
      solution: "Engineered an Android application in native Java with an optimized SQLite local datastore and differential delta-sync. Records are cryptographically signed and indexed for instant full-text lookups by specialty, medical board number, facility, and county.",
      decisions: "Chose pure native Java over hybrid runtimes to minimize memory footprint on low-spec Android devices. Implemented multi-layered caching with background worker reconciliation so search latency remains strictly sub-20ms under zero-connectivity conditions.",
      stack: ["Android SDK", "Java", "SQLite", "Differential Delta Sync", "Full-Text Search (FTS)"]
    },
    "document-workflow": {
      category: "Enterprise Architecture · Systems Integration",
      title: "Document Workflow Architecture",
      subtitle: "A fault-tolerant transactional pipeline managing document verification, policy enforcement, background job scheduling, and multi-tenant notifications.",
      challenge: "High-volume operational processes involving mission-critical document submissions often fail under network timeouts, duplicate submissions, and non-deterministic third-party API dependencies.",
      solution: "Designed a clean layered architecture combining ASP.NET / .NET Core and Java microservices. Features idempotent request endpoints, transactional outbox pattern for distributed message delivery, and exponential backoff retry queues.",
      decisions: "Separated synchronous validation from asynchronous storage and conversion workflows. Enforced atomic database transactions with optimistic concurrency locking to eliminate race conditions during concurrent approvals.",
      stack: ["Java", "C# / .NET Core", "PostgreSQL", "Message Queue (RabbitMQ)", "Docker", "REST APIs"]
    },
    "cross-platform-mobile": {
      category: "Mobile Product · Commercial Engineering",
      title: "Cross-Platform Mobile Products",
      subtitle: "Production mobile applications built under Bulums Innovations, delivering structured client flows, offline resilience, and decoupled API interfaces.",
      challenge: "Creating mobile products that maintain fluid 60fps interaction while handling complex business validation, offline drafts, and multi-role data synchronization.",
      solution: "Built modular React Native applications in TypeScript with a strictly typed API client layer, localized SQLite/WatermelonDB storage, and centralized state machines.",
      decisions: "Established a clear separation between domain models and UI components. Designed a robust offline conflict resolution strategy based on vector timestamps and server-authoritative reconciliation.",
      stack: ["React Native", "TypeScript", "Redux Toolkit", "Local Persistence", "REST / JSON APIs"]
    },
    "algorithms-workbench": {
      category: "Core Engineering · Computer Science",
      title: "Data Structures & Algorithms Workbench",
      subtitle: "A rigorous deep-dive into algorithmic efficiency, memory layouts, cache locality, and runtime benchmark comparisons.",
      challenge: "High-level frameworks often hide substantial memory allocation overhead and algorithmic bottlenecks that only surface under heavy enterprise workloads.",
      solution: "Constructed comprehensive Java benchmarks evaluating balance algorithms (AVL, Red-Black), graph pathfinding (Dijkstra, A*), and dynamic programming approaches with real-time memory profile telemetry.",
      decisions: "Used JMH (Java Microbenchmark Harness) for high-precision micro-benchmarking with JIT warm-up cycles, avoiding common benchmark pitfalls like dead-code elimination.",
      stack: ["Java 17+", "JMH", "Graph Theory", "Algorithmic Complexity", "Memory Profiling"]
    },
    "applied-ai": {
      category: "Applied AI · Architecture & Determinism",
      title: "AI for Useful Work",
      subtitle: "Harnessing LLMs for operational leverage while keeping core business transactions deterministic, audited, and strictly validated.",
      challenge: "Generative AI introduces non-deterministic hallucinations that make raw LLM outputs hazardous for critical business decisions, invoicing, and auditable workflows.",
      solution: "Architected a dual-stage system where LLMs handle unstructured document classification and entity extraction, but all extracted data passes through rigorous schema validation (Zod/JSON Schema) and deterministic business rule gates.",
      decisions: "Prohibited direct automated execution of high-risk transactions. Built human-in-the-loop review queues for confidence scores below 95% and preserved complete audit trails for every inference call.",
      stack: ["LLM API Orchestration", "Structured JSON Schema", "Rule Engines", "Audit Logging", "TypeScript"]
    },
    "operations-software": {
      category: "Operations Platform · Systems Modernization",
      title: "Turning Operations into Software",
      subtitle: "Transitioning manual logistics, dispatch tracking, and ad-hoc chat channels into auditable, unified enterprise platforms.",
      challenge: "Logistics and dispatch teams relying on sprawling spreadsheets and messaging groups suffer from lost orders, data discrepancies, and zero operational visibility for leadership.",
      solution: "Built an end-to-end operational software suite that coordinates customer intake, inventory reservation, route assignment, and driver proof-of-delivery with live status dashboards.",
      decisions: "Implemented role-based access control (RBAC) across dispatchers, drivers, and management. Structured relational database schemas with foreign key integrity to eliminate orphan records.",
      stack: ["PostgreSQL", "Node.js", "Express", "Role-Based Access Control", "WebSockets"]
    }
  };

  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalDismissBtn = document.getElementById("modal-dismiss");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalChallenge = document.getElementById("modal-challenge");
  const modalSolution = document.getElementById("modal-solution");
  const modalDecisions = document.getElementById("modal-decisions");
  const modalStack = document.getElementById("modal-stack");
  const openModalButtons = document.querySelectorAll(".open-modal-btn");

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data || !modal) return;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalChallenge.textContent = data.challenge;
    modalSolution.textContent = data.solution;
    modalDecisions.textContent = data.decisions;

    modalStack.innerHTML = "";
    data.stack.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className = "modal-tag";
      tag.textContent = tech;
      modalStack.appendChild(tag);
    });

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalCloseBtn?.focus();
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      if (projectId) openProjectModal(projectId);
    });
  });

  modalCloseBtn?.addEventListener("click", closeProjectModal);
  modalDismissBtn?.addEventListener("click", closeProjectModal);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal?.classList.contains("active")) {
        closeProjectModal();
      }
      if (navLinks?.classList.contains("menu-open")) {
        navLinks.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    }
  });

  // --------------------------------------------------------------------------
  // 5. Copy Email Button with Visual Confirmation
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = "kennedy@systemanatomy.dev";
      try {
        await navigator.clipboard.writeText(email);
        const originalContent = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `<span>Copied!</span> <span aria-hidden="true">✓</span>`;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalContent;
        }, 2200);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Interactive Inquiry Form
  // --------------------------------------------------------------------------
  const inquiryForm = document.getElementById("inquiry-form");
  const formFeedback = document.getElementById("form-feedback");

  if (inquiryForm && formFeedback) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("inquiry-name").value.trim();
      const email = document.getElementById("inquiry-email").value.trim();
      const scope = document.getElementById("inquiry-scope").value.trim();

      if (!name || !email || !scope) return;

      formFeedback.className = "form-feedback success";
      formFeedback.textContent = `Thank you, ${name}! Your inquiry has been received. Kennedy will follow up directly at ${email}.`;
      inquiryForm.reset();
    });
  }
})();
