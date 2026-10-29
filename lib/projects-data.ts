export interface ProjectScreenshot {
  src: string
  title: string
  description?: string
}

export interface ProjectItem {
  id: string
  title: string
  organization: string
  platformType: "web" | "app"
  platformLabel: string
  tagline: string
  description: string
  detailedOverview: string[]
  role: string
  deployment: string
  deploymentDetails: string[]
  features: string[]
  tech: string[]
  architectureHighlights: string[]
  screenshots?: ProjectScreenshot[]
  githubLinks: { label: string; url: string; isPrimary?: boolean }[]
}

export const primaryGithub = "https://github.com/NatnaelHaile47"
export const additionalGithub = "https://github.com/NatnaelWalletbirr"
export const linkedinProfile = "https://www.linkedin.com/in/natnael-haile-72614b255/"
export const contactEmail = "natihaile6568@gmail.com"

export const projectsData: ProjectItem[] = [
  {
    id: "cbe-workflow",
    title: "Workflow Management System",
    organization: "Commercial Bank of Ethiopia (CBE)",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "Mission-critical enterprise workflow and operational governance platform for Ethiopia's largest commercial bank.",
    description:
      "Enterprise workflow orchestration platform handling task management, executive meetings, document management, intra-bank communications, memo approvals, organization calendar, and dynamic role-based access control.",
    detailedOverview: [
      "The CBE Workflow Management System serves as the central operational backbone for administrative and inter-departmental communications across the Commercial Bank of Ethiopia.",
      "Designed from the ground up to replace legacy manual paper channels with real-time digital approvals, executive tracking, and strict regulatory compliance.",
      "Implements dynamic Role-Based Access Control (RBAC) enabling administrators to configure permissions, approval limits, and departmental hierarchies on the fly.",
    ],
    role: "Full-Stack Development, Core Architecture & Production Deployment Lead",
    deployment:
      "Deployed on CBE enterprise infrastructure with Oracle Database high availability, secure network segregation, automated CI/CD pipelines, and audited access controls.",
    deploymentDetails: [
      "Containerized deployment on production Linux servers with Nginx reverse proxy configuration.",
      "Oracle Database clustering with connection pooling, automated failover, and daily encrypted backups.",
      "Strict network segregation adhering to financial security guidelines and intranet firewalls.",
      "Zero-downtime database migration scripts and automated CI/CD build deployment.",
    ],
    features: [
      "Task management and multi-departmental assignment workflows with priority tracking",
      "Executive board and committee meeting coordination, agenda attachments, and official minutes",
      "Enterprise Document Management System (EDMS) with digital indexing, search, and version control",
      "Secure intra-bank communication channels, departmental bulletin boards, and instant alerts",
      "Official electronic memo drafting, multi-tier approval chains, and digital signature sign-offs",
      "Dynamic organization calendar with role-based visibility and institutional holiday syncing",
      "Dynamic Role-Based Access Control (RBAC) with hierarchical permission matrices",
      "Comprehensive audit trail logging, regulatory compliance tracking, and executive BI reports",
    ],
    tech: ["TypeScript", ".NET Core", "ASP.NET Web API", "Oracle DB", "Entity Framework Core", "Dynamic RBAC", "Docker", "CI/CD"],
    architectureHighlights: [
      "Modular Clean Architecture separating domain logic, application use cases, and infrastructure adapters.",
      "Oracle Entity Framework Core with optimized index strategies for high-frequency task transactions.",
      "JWT-based authentication integrated with bank Active Directory and dynamic permission caching.",
    ],
    screenshots: [
      {
        src: "/images/projects/cbe-workflow/cbe-dashboard.png",
        title: "CBE Nexus Workflow Dashboard & Operational Metrics",
        description:
          "Live executive dashboard displaying real-time synchronization, pending approval alerts, overdue task indicators, active meeting counts, and key performance KPIs across departments.",
      },
      {
        src: "/images/projects/cbe-workflow/cbe-task-management.png",
        title: "Enterprise Task Management & Detailed Workflow Tracking",
        description:
          "Task assignment and review interface with status badges, priority levels, workflow audit trails, subtask breakdowns, deferral history, and memorandum attachments.",
      },
      {
        src: "/images/projects/cbe-workflow/cbe-approvals.png",
        title: "Multi-Level Task & Delegation Completion Approvals",
        description:
          "Hierarchical authorization queue showing multi-tiered approval workflows (Division Level, Direct Review, President/CEO Access), SLA tracking, and one-click execution.",
      },
      {
        src: "/images/projects/cbe-workflow/cbe-chat-communication.png",
        title: "Inter-Departmental Case Discussions & Instant Messaging",
        description:
          "Secure internal collaboration portal featuring channel management, case-specific group threads, direct staff messaging, and real-time read receipts.",
      },
      {
        src: "/images/projects/cbe-workflow/cbe-reports.png",
        title: "User Accomplishment & Departmental SLA Analytics",
        description:
          "Enterprise reporting suite with staff performance evaluation, completion rates, on-time SLA metrics, and interactive drilldown analysis.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "cbe-lease",
    title: "Lease Management System",
    organization: "Commercial Bank of Ethiopia (CBE)",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "End-to-end branch property requisition, valuation tracking, and multi-tier approval workflow system.",
    description:
      "Enterprise property and branch lease request platform with multi-level approval workflows, valuation tracking, and automated contract renewals.",
    detailedOverview: [
      "Built specifically for the Commercial Bank of Ethiopia to oversee property requisitions, landlord negotiations, and rental contract lifecycles across its extensive nationwide branch network.",
      "Eliminates manual lease paperwork by enforcing automated multi-level approval hierarchies from branch managers to district directors and head-office executive committees.",
      "Tracks rental expense forecasts, landlord payment installments, and automated notice dates before lease expiration.",
    ],
    role: "Full-Stack Solutions Developer & Production Deployment",
    deployment:
      "Deployed on CBE infrastructure utilizing Microsoft SQL Server, IIS/Docker containerization, and automated database backups.",
    deploymentDetails: [
      "Deployed within secure enterprise bank network environments with Microsoft SQL Server failover clusters.",
      "Automated database schema migrations and audited ledgering of every approval step.",
      "Configured automated scheduled background jobs for lease expiration reminders and payment triggers.",
    ],
    features: [
      "Branch and asset lease requisition submission portal with custom appraisal criteria",
      "Configurable multi-level approval hierarchies with delegation rules and escalation timeouts",
      "Automated lease contract renewal alerts, expiry countdowns, and renewal negotiations",
      "Property valuation records, payment schedule tracking, and branch budget allocations",
      "Document attachment storage for title deeds, tenancy agreements, and legal clearance forms",
      "Audited review chains, exportable financial summaries, and lease expenditure analytics",
    ],
    tech: ["TypeScript", ".NET Core", "C#", "SQL Server", "RESTful APIs", "Docker", "Enterprise Security"],
    architectureHighlights: [
      "State-machine workflow engine managing requisition statuses (Draft, Review, Under Valuation, Executive Approval, Active, Terminated).",
      "SQL Server optimized indexes for fast multi-branch search and reporting queries.",
      "Role-based action guards preventing unauthorized modifications after approval submission.",
    ],
    screenshots: [
      {
        src: "/images/projects/cbe-lease/cbe-lease-dashboard.png",
        title: "CBE Region Lease Approval Portal Dashboard",
        description:
          "Executive VP Retail Banking dashboard showing total lease requests (25), pending approval sign-offs (10), 305 contracts expiring within 3 months, recent branch lease submissions, and request status distribution analytics.",
      },
      {
        src: "/images/projects/cbe-lease/cbe-lease-active-branches.png",
        title: "Active Nationwide Branch Leases Directory",
        description:
          "Enterprise contract monitoring directory managing 1,920+ active CBE branch premises nationwide, rental costs in ETB/month, square meter dimensions, expiration countdowns, and renewal status.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "cbe-atm-lease",
    title: "ATM Lease Request System",
    organization: "Commercial Bank of Ethiopia (CBE)",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "Off-site and branch ATM location lease request, multi-ATM branch allocation, and approval workflow system.",
    description:
      "Enterprise ATM lease request platform for Commercial Bank of Ethiopia managing site requisitions, landlord negotiations, multi-ATM per branch allocations, and multi-tier approval workflows.",
    detailedOverview: [
      "Engineered for the Commercial Bank of Ethiopia (CBE) as a specialized extension of the enterprise lease management platform, tailored specifically for ATM terminal placement across Ethiopia.",
      "Shares the core lease information schema and approval workflows with branch leasing, with crucial extensions supporting 1-to-many branch-to-ATM allocations (a single bank branch oversees multiple off-site or on-site ATMs).",
      "Tracks ATM site appraisals, landlord negotiations, power and connectivity infrastructure clearance, rental rate schedules, and scheduled renewal/decommission notices.",
    ],
    role: "Full-Stack Solutions Developer & Production Deployment",
    deployment:
      "Deployed on CBE infrastructure utilizing Microsoft SQL Server, .NET Core API, IIS/Docker containerization, and automated background jobs.",
    deploymentDetails: [
      "Enterprise .NET Core and SQL Server database schema with relational 1:N branch-to-ATM mapping.",
      "Automated daily background jobs alerting facility managers of upcoming ATM lease expirations.",
      "Multi-level approval state engine enforcing validation before landlord contract disbursement.",
    ],
    features: [
      "1-to-Many Branch ATM Management: A single parent branch can initiate, monitor, and manage multiple ATM leases across its territory",
      "ATM Site Requisition & Feasibility: Multi-criteria evaluation of foot traffic, accessibility, 24/7 security, power supply, and network readiness",
      "Configurable Multi-Tier Approval Workflow: Dynamic sign-off routing across Branch Managers, District Directors, Facilities, and Executive Committees",
      "Contract & Landlord Terms: Automated rental calculation in ETB, payment installment schedules, advance rent tracking, and stamp duty records",
      "Automated Renewal & Expiry Alerts: Timely reminders 3 to 6 months prior to lease expiration with one-click renewal initiation",
      "Relocation & Decommission Workflows: Managed process for transferring underperforming ATM sites to higher-yield retail locations",
      "Centralized Document Repository: Digital archiving of site lease deeds, municipal permits, landlord IDs, and legal clearance sign-offs",
      "Comprehensive Analytics & Audit Trail: Complete history of every review note, approval timestamp, and regional ATM expenditure",
    ],
    tech: ["TypeScript", ".NET Core", "C#", "SQL Server", "RESTful APIs", "Docker", "Enterprise Security"],
    architectureHighlights: [
      "Relational branch-to-ATM hierarchy supporting multiple active terminals per administrative branch.",
      "Reusable workflow state machine compatible with CBE's core branch lease approval pipeline.",
      "Optimized SQL queries and indexes for fast cross-regional ATM lease searching and SLA tracking.",
    ],
    screenshots: [
      {
        src: "/images/projects/cbe-lease/cbe-lease-dashboard.png",
        title: "CBE Region Lease Approval Portal - ATM & Branch Dashboard",
        description:
          "Executive VP Retail Banking dashboard showing total requests, pending approval sign-offs, ATM site contract tracking, and approval breakdown.",
      },
      {
        src: "/images/projects/cbe-lease/cbe-lease-active-branches.png",
        title: "Active ATM & Branch Leases Directory",
        description:
          "Enterprise contract monitoring directory managing nationwide branch and ATM leases, rental costs in ETB/month, location details, and expiration countdowns.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "opp-membership",
    title: "OPP Membership Management System",
    organization: "Mackmil P.L.C",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "Nationwide socio-economic membership platform with digital archiving and integrated Jitsi Meet video conferencing.",
    description:
      "Socio-economic membership platform for Oromia Prosperity Party featuring member registration, digital document archiving, strategic planning, event management, and integrated Jitsi video conferencing.",
    detailedOverview: [
      "Commissioned by Mackmil P.L.C to develop a scalable socio-economic membership and governance system for the Oromia Prosperity Party.",
      "Empowers party headquarters and regional offices to manage hundreds of thousands of members, track socio-economic development initiatives, and archive digital documents.",
      "Features a built-in virtual conference room module powered by Jitsi Meet API, allowing delegates to hold secure, real-time video sessions directly within the portal.",
    ],
    role: "Full-Stack Developer, Architecture & Deployment Engineer",
    deployment:
      "Full production deployment on containerized Linux servers (Docker Compose), PostgreSQL database, Nginx reverse proxy, and Jitsi Meet video bridge.",
    deploymentDetails: [
      "Containerized deployment using Docker Compose on high-memory Linux servers.",
      "PostgreSQL configuration with indexed demographic queries, connection pooling, and SSL.",
      "Self-hosted and tuned Jitsi Meet video bridge server supporting multi-party conferences with low latency.",
      "Nginx reverse proxy with automated SSL certificate provisioning and HTTP/2 acceleration.",
    ],
    features: [
      "Decentralized member registration, demographic profiling, and digital ID card generation",
      "Digital document management system (DDMS) with secure file uploads and categorizations",
      "Strategic planning module with milestone tracking, KPI monitoring, and socio-economic goals",
      "Event planning, delegate invitations, automated notifications, and attendance verification",
      "Integrated virtual video conferencing system powered by Jitsi Meet API with screen sharing and agendas",
      "Multi-tier administrative roles (Regional, Zonal, District, and Kebele levels)",
      "Real-time demographic analytics, membership age distribution charts, and exportable reports",
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Jitsi Meet API", "Docker", "Nginx", "CI/CD"],
    architectureHighlights: [
      "Next.js App Router with server-side rendering for lightning-fast dashboard metrics.",
      "PostgreSQL schema designed for rapid demographic aggregation and historical record indexing.",
      "Custom Jitsi JWT token generation guaranteeing meeting room privacy and role-based moderator access.",
    ],
    screenshots: [
      {
        src: "/images/projects/opp/opp.png",
        title: "OPP Membership System & Demographic Analytics",
        description:
          "Live production dashboard displaying member age distribution, gender balance, growth trends, zonal allocation, and integrated Jitsi conference modules.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "kebele-management",
    title: "Kebele Management System",
    organization: "Mackmil P.L.C",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "Municipal public administration system digitizing local resident registrations, vital statistics, and public clearances.",
    description:
      "Municipal public administration system digitizing local resident registrations, vital statistics, official clearance requests, and public records.",
    detailedOverview: [
      "Developed at Mackmil P.L.C to modernize municipal Kebele administration offices and replace slow physical filing systems.",
      "Digitizes citizen profiles, vital statistics (birth, marriage, death, and residency relocation), and provides immediate document issuance workflows.",
      "Drastically reduces waiting times for residents while guaranteeing record security and auditability.",
    ],
    role: "Full-Stack Developer & Deployment Specialist",
    deployment:
      "Turnkey deployment with PostgreSQL, Docker containerization, role segregation for administrative clerks, and automated schema migrations.",
    deploymentDetails: [
      "Packaged into lightweight Docker containers for simple deployment across municipal office servers.",
      "PostgreSQL database setup with automated daily backup dumps and encrypted citizen identities.",
      "Role-based security restricting clearance approvals strictly to authorized Kebele leaders.",
    ],
    features: [
      "Resident profiling, family tree linkage, and household identity records",
      "Vital events registry tracking births, marriages, deaths, and resident transfers",
      "Digital clearance and official resident ID verification workflows",
      "Public service request tracking with front-desk queue management",
      "Official certificate and clearance letter auto-generation with printable templates",
      "Audit logging of all officer updates, clearances granted, and resident lookups",
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma/TypeORM", "Docker", "Tailwind CSS"],
    architectureHighlights: [
      "Next.js full-stack architecture with Prisma ORM for type-safe database queries.",
      "Responsive UI built with Tailwind CSS optimized for administrative desktop monitors and tablets.",
      "Client-side search and filtering for thousands of household records in milliseconds.",
    ],
    screenshots: [
      {
        src: "/images/projects/kebele/socio-economic.png",
        title: "Socio-Economic & Demographics Overview",
        description:
          "High-level municipal dashboard reporting total population, municipal land usage (hectares), kebele units, gender, age cohorts, and social base occupation metrics.",
      },
      {
        src: "/images/projects/opp/opp-dashboard-1.png",
        title: "Resident Population Registry & Identity Verification",
        description:
          "Official Kebele citizen registry showing citizen names, National IDs, mobile contacts, age verification, and administrative clearance controls.",
      },
      {
        src: "/images/projects/opp/opp-dashboard-2.png",
        title: "Quarterly Sector Data Entry Modal",
        description:
          "Dynamic administrative modal for entering education, social sector, and public service statistics organized by administrative quarter.",
      },
      {
        src: "/images/projects/opp/opp-dashboard-3.png",
        title: "Municipal Data Records & Report Export",
        description:
          "Central data ledger for municipal reporting with record actions, data filtering, and one-click export capability.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "eaglist-marketplace",
    title: "Eaglist Mobile Application",
    organization: "Eaglist",
    platformType: "app",
    platformLabel: "Mobile App",
    tagline: "Comprehensive cross-platform mobile marketplace for vehicles, apartments, and electronics with real-time comparisons.",
    description:
      "Comprehensive multi-category mobile marketplace connecting buyers and sellers for vehicles (cars), real estate & apartments, and electronics with instant search and direct communication.",
    detailedOverview: [
      "Engineered from the ground up for Eaglist as a cross-platform mobile application on Android and iOS.",
      "Supports high-volume multi-category commerce: automotive vehicles (sedans, SUVs, pickups, hatchbacks), prime residential properties (apartments, penthouses, luxury villas), and consumer electronics.",
      "Includes real-time side-by-side vehicle comparison, comprehensive technical spec breakdowns, high-res photo carousels, and one-tap seller calling and messaging.",
    ],
    role: "Lead Mobile App Developer & Cloud API Deployment",
    deployment:
      "Cross-platform compilation for Android and iOS using React Native, cloud backend deployment with object storage CDN for high-resolution vehicle and property images.",
    deploymentDetails: [
      "React Native build pipeline optimized for Android (release APK/AAB) and iOS testing.",
      "Cloud backend microservices deployed on Linux cloud instances with reverse proxy and SSL.",
      "Cloud object storage and CDN media optimization ensuring instantaneous image load times across mobile networks.",
    ],
    features: [
      "Multi-category marketplace: Vehicles/Cars, Apartments/Properties, Electronics and Goods",
      "Side-by-side vehicle comparison tool with technical specs (make, model, year, body type, fuel, transmission, mileage)",
      "Direct seller contact button with one-tap phone calling and inquiry messaging",
      "Advanced filtering by price, location, vehicle brand, condition, and property categories",
      "High-resolution multi-photo upload and responsive image galleries",
      "Listing favorites, view counters, price drop alerts, and verified seller badges",
      "Offline caching and optimized native performance on diverse smartphone screens",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "REST APIs", "Cloud Storage"],
    architectureHighlights: [
      "React Native component architecture with reusable card grids, filter drawers, and comparison tables.",
      "Optimized image compression pipeline reducing mobile data consumption without quality loss.",
      "State management handling search criteria, favorites cache, and instant filter updates.",
    ],
    screenshots: [
      {
        src: "/images/projects/eaglist/eaglist-home.png",
        title: "Home & Categories Screen",
        description: "Browse featured vehicles and properties, quick category filters (Sedan, SUV, Hatchback, Pickup).",
      },
      {
        src: "/images/projects/eaglist/eaglist-compare.png",
        title: "Compare Vehicles Feature",
        description: "Side-by-side technical specification comparison (2023 Toyota Land Cruiser Prado).",
      },
      {
        src: "/images/projects/eaglist/eaglist-vehicle-details.png",
        title: "Vehicle Details & Seller Contact",
        description: "Full vehicle specs, pricing in ETB, location tags, view counts, and direct seller contact button.",
      },
      {
        src: "/images/projects/eaglist/eaglist-browse-properties.png",
        title: "Real Estate & Properties Listings",
        description: "Real-time search and filter for luxury villas and penthouses in Addis Ababa.",
      },
      {
        src: "/images/projects/eaglist/eaglist-property-details.png",
        title: "Property Details Page",
        description: "High-resolution property showcase, negotiation status, and direct inquiry.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "binget-core-banking",
    title: "Core Banking System",
    organization: "Binget Microfinance",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "Core financial engine processing customer accounts, loans, savings, and general ledger transactions.",
    description:
      "Central financial processing engine handling customer accounts, loans, deposits, and real-time transaction accounting.",
    detailedOverview: [
      "Developed at Binget Microfinance to provide a secure, transaction-safe core banking platform.",
      "Handles customer account onboarding, KYC records, loan origination with custom interest calculations, teller operations, and central financial accounting.",
      "Engineered with strict ACID compliance ensuring transaction integrity across all cash and deposit operations.",
    ],
    role: "Core Banking Developer & Deployment",
    deployment:
      "Enterprise financial deployment with transactional ACID guarantees, PostgreSQL clustering, and secure API gateways.",
    deploymentDetails: [
      "High-availability PostgreSQL database configuration with replication and transaction logging.",
      "Containerized backend hosting with rate-limited API gateways and intranet firewall rules.",
      "End-of-day reconciliation automated tasks with verification reports.",
    ],
    features: [
      "Customer account lifecycle, KYC records, and teller cashier financial operations",
      "Loan origination, amortization schedules, penalty logic, and interest calculations",
      "Real-time transaction processing and end-of-day general ledger balancing",
      "Automated regulatory and microfinance compliance reporting",
    ],
    tech: ["Java", ".NET", "PostgreSQL", "Financial APIs", "Docker", "ACID Compliance"],
    architectureHighlights: [
      "Database transaction wrappers ensuring zero double-spending or partial debit/credits.",
      "RESTful API integration endpoints for mobile money and external bank gateways.",
    ],
    screenshots: [
      {
        src: "/images/projects/binget/corebanking.png",
        title: "Core Banking Administration & Financial Operations",
        description:
          "Mission-critical core banking system console for managing customer accounts, deposit balancing, loan amortizations, and daily ledger accounting.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "bingetbirr-wallet",
    title: "BingetBirr Mobile Money",
    organization: "Binget Microfinance",
    platformType: "app",
    platformLabel: "Mobile App",
    tagline: "Mobile money wallet enabling P2P transfers, cash-in/out, utility payments, and merchant QR checkout.",
    description:
      "Mobile money and digital wallet platform integrated with banks, telecom providers, and merchant payment systems.",
    detailedOverview: [
      "Engineered for Binget Microfinance as their flagship digital mobile money and financial wallet application.",
      "Allows consumers and business agents to deposit, transfer, withdraw funds, and pay utility bills seamlessly from their mobile phones.",
      "Integrated with telecom SMS gateways, third-party payment processors, and core microfinance banking ledgers.",
    ],
    role: "Mobile App Developer & Deployment",
    deployment:
      "Containerized microservices deployment with payment gateways, SMS notifications, and security protocols.",
    deploymentDetails: [
      "Containerized microservices architecture with high concurrency support.",
      "SMS gateway webhooks for instant transaction OTPs and receipts.",
      "Hardened API communication with TLS encryption and tamper verification.",
    ],
    features: [
      "P2P money transfers, cash-in/cash-out agent network, and merchant QR payments",
      "Utility bill payments, municipal service payments, and mobile airtime recharge",
      "Security layers with PIN/biometric authentication, session timeouts, and transaction audits",
      "Transaction history, digital receipts, and mini-statements",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "Payment APIs", "SMS Gateways", "Docker"],
    architectureHighlights: [
      "React Native mobile front-end with secure token storage and biometric unlock.",
      "Node.js asynchronous event-driven backend handling thousands of simultaneous transactions.",
    ],
    screenshots: [
      {
        src: "/images/projects/binget/bingetbirr.jpg",
        title: "BingetBirr Mobile Money Interface",
        description:
          "Consumer and merchant mobile wallet interface featuring quick money transfers, cash-out agents, bill payments, and transaction history.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "bingetbirr-cms",
    title: "CMS for BingetBirr",
    organization: "Binget Microfinance",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "Administrative content and operations management portal for BingetBirr digital wallet platform.",
    description:
      "Centralized administrative content management system enabling operational oversight, user verification, and platform configurations.",
    detailedOverview: [
      "The internal back-office management system for BingetBirr operators, compliance officers, and system administrators.",
      "Enables manual KYC reviews, transaction dispute investigations, dynamic fee configuration, and agent liquidity monitoring.",
    ],
    role: "Full-Stack Developer & Deployment",
    deployment:
      "Production web deployment with automated administrative audit logs and secure RBAC.",
    deploymentDetails: [
      "Secure web server hosting with audit-trail generation for every administrative action.",
      "PostgreSQL connection with read-replicas for analytical dashboard queries.",
    ],
    features: [
      "User verification, KYC processing, and transaction audit dashboards",
      "Platform configuration rules, fee structures, and merchant agent monitoring",
      "Real-time operational dashboards with analytical reporting and CSV/PDF exports",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "RESTful APIs"],
    architectureHighlights: [
      "Dashboard components with real-time operational status graphs.",
      "Fine-grained administrative permission guards.",
    ],
    screenshots: [
      {
        src: "/images/projects/binget/cms.png",
        title: "BingetBirr Operations & CMS Management Portal",
        description:
          "Centralized back-office portal for KYC validation, dispute handling, tier fee schedules, and agent network monitoring.",
      },
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
  {
    id: "one-window-properties",
    title: "One Window Properties System",
    organization: "One Window",
    platformType: "web",
    platformLabel: "Web System",
    tagline: "Comprehensive digital property management portal streamlining unit inventory, contracts, and clients.",
    description:
      "Unified property and real estate operations platform streamlining property records, lease workflows, and client agreements.",
    detailedOverview: [
      "Comprehensive platform managing real estate listings, unit availability, tenant agreements, and client inquiries for One Window Properties.",
    ],
    role: "Full-Stack Developer & Deployment Specialist",
    deployment:
      "Containerized deployment with Docker, Nginx proxy, and automated database backups.",
    deploymentDetails: [
      "Containerized deployment on production Linux servers using Docker.",
      "Nginx reverse proxy and automated daily database dumps.",
    ],
    features: [
      "Property unit inventory, availability calendar, and specifications",
      "Client lead management, inquiries, and scheduled viewings",
      "Contract lifecycle, tenancy records, and payment history archiving",
    ],
    tech: ["React", "Python", "MySQL", "Docker", "Nginx", "REST APIs"],
    architectureHighlights: [
      "React web portal connected to Python RESTful backend.",
      "MySQL schema optimized for property attributes and pricing queries.",
    ],
    githubLinks: [
      { label: "NatnaelHaile47 (Primary)", url: primaryGithub, isPrimary: true },
      { label: "NatnaelWalletbirr (Additional)", url: additionalGithub },
    ],
  },
]
