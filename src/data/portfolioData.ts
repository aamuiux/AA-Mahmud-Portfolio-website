import { Project, Testimonial, FaqItem, ExperienceItem, SkillCategory, CertificationItem, AwardItem } from "../types/portfolio";

export const PROJECTS: Project[] = [
  {
    "id": "proj-1",
    "category": "saas",
    "title": "Collablly Supply Chain Collaboration",
    "heading": "Collablly Supply Chain &amp; Supplier Portal",
    "medium": "Enterprise Manufacturing &amp; Distribution Operations Platform",
    "client": "Collablly Technologies",
    "year": "2025",
    "roi": "+3.8x PO Cycle Velocity",
    "categoryLabel": "SaaS Platform · Supplier & Operations Collaboration",
    "challenge": "Manufacturing and distribution teams suffered from fragmented supplier email threads, uncoordinated purchase orders, and high manual follow-up overhead.",
    "solution": "Architected a unified supplier collaboration portal featuring real-time purchase order lifecycle tracking, automated approval multi-tier workflows, and inventory delivery risk telemetry.",
    "techStack": "React · TypeScript · Tailwind CSS · Workflow Engine · REST & WebSockets",
    "image": "/assets/aistudio/collablly_2baa5c21.jpg",
    "pills": [
      "+3.8x PO Velocity",
      "-45% Supplier Delays"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-2",
    "category": "saas",
    "title": "Docomate AI Document Processing",
    "heading": "Docomate AI Intelligent Document Processing",
    "medium": "Next-Gen OCR, Automated Schema Extraction &amp; Enterprise IDP",
    "client": "Docomate Intelligence",
    "year": "2026",
    "roi": "99.4% Extraction Precision",
    "categoryLabel": "SaaS Platform · Intelligent Document Processing & OCR",
    "challenge": "Knowledge workers wasted thousands of monthly hours manually transcribing invoices, bill-of-ladings, and complex multi-page unstructured PDF files into internal ERP systems.",
    "solution": "Engineered a dual-pane intelligent document processing studio with side-by-side OCR visualization, confidence heatmaps, schema-guided validation, and instant JSON/CSV export.",
    "techStack": "React · TypeScript · Next.js · Canvas OCR Overlay · Web Workers · REST API",
    "image": "/assets/aistudio/docomate_3bee0e29.jpg",
    "pills": [
      "99.4% Precision",
      "-82% Manual Entry Time"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-3",
    "category": "saas",
    "title": "Othership Hybrid Workplace Platform",
    "heading": "Othership Hybrid Workplace &amp; Desk Booking",
    "medium": "Interactive Floorplan Digital Twin &amp; Team Scheduling",
    "client": "Othership Workspaces",
    "year": "2022",
    "roi": "+92% Space Utilization",
    "categoryLabel": "SaaS Platform · Workplace & Desk Booking",
    "challenge": "Enterprises transitioning to flexible hybrid work struggled with empty desks, friction booking meeting rooms, and disconnected team scheduling.",
    "solution": "Designed an interactive multi-floor digital twin floorplan with live presence indicators, 1-click hot-desk reservations, and calendar synchronization across 8,000+ workplace tools.",
    "techStack": "TypeScript · React · SVG Interactive Floorplan · Tailwind CSS · Realtime WebSockets",
    "image": "/assets/aistudio/othership_dc1bacc6.jpg",
    "pills": [
      "+92% Space Utilization",
      "1-Click Desk Booking"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-4",
    "category": "saas",
    "title": "Caboodle Services CPG Sales Platform",
    "heading": "Caboodle Services CPG Sales &amp; Trade Hub",
    "medium": "Distributor Performance, Trade Spend &amp; Retail Code Intelligence",
    "client": "Caboodle Services",
    "year": "2025",
    "roi": "+28% Trade Spend ROI",
    "categoryLabel": "SaaS Platform · Natural Product CPG & Trade Management",
    "challenge": "Natural CPG food & beverage sales teams dealt with fragmented distributor spreadsheets (UNFI, KeHE), messy UPC/SKU retail code mapping, and opaque trade promotion ROI.",
    "solution": "Constructed a unified trade promotion management SaaS uniting distributor sales tracking, retail store performance heatmaps, and automated retailer SKU spec dictionaries.",
    "techStack": "React · TypeScript · D3.js · Data Tables · Financial Calculation Engine · Tailwind CSS",
    "image": "/assets/aistudio/caboodle_6b7b81b7.jpg",
    "pills": [
      "+28% Trade Spend ROI",
      "Automated SKU Mapping"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-5",
    "category": "saas",
    "title": "Exlo Testto Automation Platform",
    "heading": "Exlo Testto AI Process &amp; QA Studio",
    "medium": "Enterprise Process Automation &amp; Continuous Testing Suite",
    "client": "Exlo ITS",
    "year": "2025",
    "roi": "98.1% Automation Pass Rate",
    "categoryLabel": "SaaS Platform · AI Process Automation & QA",
    "challenge": "Enterprise software teams struggled with manual test regression bottlenecks, complex multi-system workflow breaks, and opaque Python test orchestration.",
    "solution": "Architected the Testto Cloud SaaS suite featuring codeless automated test execution, AI-driven process orchestration flow graphs, and real-time regression telemetry.",
    "techStack": "React · TypeScript · Python Orchestrator · WebGL Flow Graphs · Tailwind CSS · Docker & Cloud",
    "image": "/assets/aistudio/exlo_86240282.jpg",
    "pills": [
      "98.1% Pass Rate",
      "Codeless QA Flows"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-6",
    "category": "saas",
    "title": "Whiz Intelligent AI Advanced Insight Graph Technology",
    "heading": "Whiz Intelligent AI Advanced Insight Graph Technology",
    "medium": "Advanced Insight Graph &amp; Collaborative AI Intelligence Platform",
    "client": "Whiz AI",
    "year": "2025",
    "roi": "+3.2x Workflow Velocity",
    "categoryLabel": "SaaS Platform · AI Workspace & Knowledge Graph",
    "challenge": "Cross-functional enterprise teams struggled with disjointed generative AI tools, prompt chaos, and opaque knowledge silos across complex data graphs.",
    "solution": "Architected an advanced insight graph technology and intelligent AI workspace uniting interactive node graph exploration, prompt-to-workflow automation, and multi-model intelligence.",
    "techStack": "React · TypeScript · WebSockets · Tailwind CSS · AI Knowledge Graph · WebGL · Node.js",
    "image": "/assets/aistudio/Whiz_5c14ef85.jpg",
    "pills": [
      "+3.2x Velocity",
      "Insight Graph Canvas"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-7",
    "category": "saas",
    "title": "TalentX Enterprise Recruitment Suite",
    "heading": "TalentX Enterprise Recruitment Suite",
    "medium": "Next-Generation Talent Acquisition, Pipeline Tracking &amp; Interview Intelligence",
    "client": "TalentX",
    "year": "2026",
    "roi": "62% Faster Time-to-Hire",
    "categoryLabel": "SaaS Platform · Enterprise Recruitment & ATS",
    "challenge": "Recruiting teams and hiring managers were overwhelmed by candidate volume, opaque interview scoring, and delayed multi-stakeholder hiring decisions.",
    "solution": "Architected an intuitive enterprise ATS and talent pipeline platform featuring automated candidate scoring, visual stage progression boards, and unified interviewer feedback rubrics.",
    "techStack": "React · TypeScript · Tailwind CSS · Enterprise ATS Pipeline · Real-Time Collaboration · Node.js",
    "image": "/assets/aistudio/TalentX_53c9fde6.jpg",
    "pills": [
      "62% Faster Hiring",
      "Automated Scoring"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-8",
    "category": "dashboard",
    "title": "eBuddy Enterprise HRM &amp; Task Cockpit",
    "heading": "eBuddy Enterprise HRM &amp; Task Cockpit",
    "medium": "Milestone Reviews, Biometric Attendance, Task Velocity &amp; Team Performance Telemetry",
    "client": "SSL Wireless",
    "year": "2023",
    "roi": "350+ Office Workforce",
    "categoryLabel": "Dashboard · Enterprise HRM & Workforce Performance",
    "challenge": "Supervisors and operations leadership managing 350+ employees faced fragmented sprint milestone reporting, delayed task review handoffs, and disjointed biometric punch-in / leave approval workflows.",
    "solution": "Architected the comprehensive eBuddy Supervisor Cockpit uniting daily task statuses (WIP, Due, Review), sprint milestone tracking, real-time biometric attendance (Punch In/Out), and granular departmental leave telemetry.",
    "techStack": "React · TypeScript · Tailwind CSS · Biometric Auth API · Real-Time Task State Machines · Enterprise HRM",
    "image": "/assets/aistudio/02.1_Supervisor_4a6ac342.jpg",
    "pills": [
      "350+ Employees",
      "Biometric Punch-In",
      "Task Sprint Reviews"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-9",
    "category": "dashboard",
    "title": "AI Mail Autonomous Inbox &amp; Telemetry Cockpit",
    "heading": "AI Mail Autonomous Inbox &amp; Telemetry Cockpit",
    "medium": "Autonomous Email Triage, 79% AI Effectiveness &amp; Real-Time Response Velocity Dashboard",
    "client": "Catalog / SSL Wireless",
    "year": "2024",
    "roi": "79% AI Effectiveness",
    "categoryLabel": "Dashboard · AI Autonomous Triage & Response Telemetry",
    "challenge": "Enterprise knowledge workers and client service leads suffered from email inbox paralysis, high unanswered response backlogs, and lack of visibility into autonomous AI assistant drafting velocity.",
    "solution": "Engineered an executive email intelligence dashboard providing real-time response volume distribution (75% AI vs 15% Human), priority follow-up triage queues, sub-12m average response times, and weekly email workload analytics.",
    "techStack": "React · TypeScript · D3.js Charts · AI Triage Engine · WebSocket · Tailwind CSS",
    "image": "/assets/aistudio/ai-mail_875a0eab.jpg",
    "pills": [
      "79% AI Effectiveness",
      "12m 3s Response",
      "75% AI Volume"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-10",
    "category": "dashboard",
    "title": "BAT Peachtree Finance &amp; Operations Cockpit",
    "heading": "BAT Peachtree Finance &amp; Operations Cockpit",
    "medium": "Enterprise Finance Performance, Nationwide Field Distribution &amp; Regional Expense Telemetry",
    "client": "British American Tobacco (BAT)",
    "year": "2023",
    "roi": "৳73.8 Cr. Monthly Velocity",
    "categoryLabel": "Dashboard · Enterprise Finance & Field Operations",
    "challenge": "British American Tobacco (BAT) leadership required unified real-time visibility across nationwide field distribution, brand-tier sales margins, daily agent commissions, and multi-district logistics expense telemetry spanning 1,930+ retail outlets.",
    "solution": "Architected the BAT Peachtree executive finance and distribution performance cockpit, integrating real-time sales volume KPIs, brand category yield distributions (Premium, Aspirational, VFM), field force tracking, and regional expense telemetry.",
    "techStack": "React · TypeScript · D3.js · Data Visualization · High-Density Financial Analytics · Tailwind CSS · Enterprise ERP",
    "image": "/assets/aistudio/BAT_Peachtree_285bf916.jpg",
    "pills": [
      "৳73.8 Cr. Velocity",
      "1,930+ Outlets",
      "21.3% Monthly ROI"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-11",
    "category": "ecommerce",
    "title": "Apex4U Omnichannel Footwear &amp; Lifestyle Store",
    "heading": "Apex4U Omnichannel Footwear &amp; Lifestyle",
    "medium": "High-Conversion Digital Retail Storefront &amp; Loyalty Ecosystem",
    "client": "Apex Footwear Ltd.",
    "year": "2025",
    "roi": "+38% Mobile Conversion",
    "categoryLabel": "E-Commerce · Omnichannel Footwear & Fashion",
    "challenge": "Translating Bangladesh&#39;s leading footwear brand into a responsive, high-converting digital storefront with synchronized retail inventory and friction-free mobile checkout.",
    "solution": "Architected high-speed responsive storefront featuring instant faceted SKU filtering, interactive footwear previews, and streamlined checkout integrating SSLCOMMERZ &amp; MFS.",
    "techStack": "Next.js · TypeScript · Tailwind CSS · Headless Commerce · Algolia · SSLCOMMERZ",
    "image": "/assets/aistudio/apex4u_dfaf6ee2.jpg",
    "pills": [
      "+38% Conversion",
      "Instant Checkout"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-12",
    "category": "ecommerce",
    "title": "Transcom Digital Electronics &amp; Appliance Megastore",
    "heading": "Transcom Digital Electronics Megastore",
    "medium": "Enterprise Consumer Electronics, EMI Installments &amp; Retail Logistics",
    "client": "Transcom Digital",
    "year": "2026",
    "roi": "150k+ Monthly Orders",
    "categoryLabel": "E-Commerce · Consumer Electronics & Appliances",
    "challenge": "Fragmented electronics catalog across premium global brands (Samsung, Sony, Whirlpool, Philips) with complex bank EMI financing schemes and nationwide logistics.",
    "solution": "Engineered an enterprise e-commerce platform featuring automated 0% EMI calculators, official brand boutique storefronts, and real-time delivery slot dispatch tracking.",
    "techStack": "React · TypeScript · Tailwind CSS · Multi-Brand Catalog · EMI Gateway · Logistics APIs",
    "image": "/assets/aistudio/transcom_84a76cc4.jpg",
    "pills": [
      "150k+ Orders",
      "0% EMI Engine"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-13",
    "category": "app-design",
    "title": "FastPay Mobile Digital Wallet",
    "heading": "FastPay Mobile Digital Wallet &amp; Cards",
    "medium": "Cashless Mobile Financial Ecosystem, Virtual Mastercard &amp; QR Payments",
    "client": "FastPay (Iraq &amp; Kurdistan)",
    "year": "2019",
    "roi": "1.2M+ Active Wallets",
    "categoryLabel": "App Design · Fintech & Digital Wallet",
    "challenge": "Cash-dominant region required an accessible, multi-lingual digital wallet with seamless Mastercard issuance, P2P transfers, and QR merchant checkout.",
    "solution": "Designed an ergonomic mobile wallet interface with biometric security, instant IQD/USD currency conversion, and thumb-zone optimized QR pay.",
    "techStack": "Flutter · Kotlin · Swift · Biometric Auth · Mastercard API · Microservices",
    "image": "/assets/aistudio/fastpay-app_01058fda.jpg",
    "pills": [
      "1.2M+ Wallets",
      "Instant QR Pay"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-14",
    "category": "app-design",
    "title": "MyPeople Global Community App",
    "heading": "MyPeople Global Cultural Community",
    "medium": "Intercultural Social Network, Global Events, Flicks Video &amp; Group Discovery",
    "client": "MyPeople Earth",
    "year": "2025",
    "roi": "+185% Community Engagement",
    "categoryLabel": "App Design · Social Discovery & Community",
    "challenge": "Expats, cultural enthusiasts, and travelers lacked a dedicated social app for authentic intercultural events, community discussions, and shared heritage discovery.",
    "solution": "Architected an intuitive global feed and interactive discovery map pairing local cultural celebrations with interest-based micro-communities.",
    "techStack": "React Native · TypeScript · Mapbox SDK · Cloudinary · Firebase RTDB",
    "image": "/assets/aistudio/mypeople-earth_fe9d4ebe.jpg",
    "pills": [
      "+185% Engagement",
      "Global Map Discovery",
      "Flicks Video Stream"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-15",
    "category": "app-design",
    "title": "Employee Buddy (eBuddy) Workforce App",
    "heading": "Employee Buddy (eBuddy) Mobile App",
    "medium": "Workforce Productivity, Biometric Attendance, Team Collaboration &amp; Project Timelines",
    "client": "SSL Wireless Enterprise",
    "year": "2023",
    "roi": "99.2% Attendance Compliance",
    "categoryLabel": "App Design · Workforce & Project Management",
    "challenge": "Supervisors and operations teams managing enterprise workforces struggled with disjointed task status handoffs, manual punch-in clocking, and lack of real-time milestone Gantt timelines.",
    "solution": "Architected the comprehensive eBuddy mobile companion app uniting task statuses (To-Do, WIP, Due, Done, Reviewed), biometric mobile attendance, team collaboration, and real-time Gantt project timelines.",
    "techStack": "Android · Kotlin · Real-Time Task State Machines · BLE Beacons · REST API · SSL Core",
    "image": "/assets/aistudio/employeebuddy-app_8d956edf.jpg",
    "pills": [
      "99.2% Compliance",
      "Real-Time Timelines",
      "Biometric Punch-In"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-16",
    "category": "app-design",
    "title": "BASIC Bank Magpie Mobile Banking",
    "heading": "BASIC Bank Magpie Mobile Banking",
    "medium": "National Banking Portal, 2FA Fund Transfers &amp; Bill Hub",
    "client": "BASIC Bank PLC",
    "year": "2022",
    "roi": "Zero-Friction Banking",
    "categoryLabel": "App Design · Mobile Banking & Fintech",
    "challenge": "State-owned bank customers encountered cumbersome in-branch transactions, legacy paperwork, and slow fund transfer verification.",
    "solution": "Engineered the Magpie mobile banking experience: unified balance cockpits, two-factor OTP fund transfers to NPSB/BEFTN rails, and 1-tap utility bill payments.",
    "techStack": "Android · Java/Kotlin · Secure Banking SDK · SSL Encryption · ISO 8583",
    "image": "/assets/aistudio/basic-bank-app_2c547417.jpg",
    "pills": [
      "Zero-Friction Banking",
      "Instant OTP Transfer"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-17",
    "category": "app-design",
    "title": "Bondhu Chula Clean Energy App",
    "heading": "Bondhu Chula Clean Energy &amp; Climate App",
    "medium": "Nationwide Eco-Stove Management &amp; Carbon Credit Verification",
    "client": "Bangladesh Bondhu Foundation (BBF / GIZ)",
    "year": "2022",
    "roi": "5M+ Stoves Monitored",
    "categoryLabel": "App Design · Clean Tech & Sustainability",
    "challenge": "Rural households and green energy technicians needed an accessible mobile tool for stove registration, carbon credit calculation, and maintenance dispatching.",
    "solution": "Crafted an accessible mobile app with pictorial navigation, offline field data sync, carbon emission reduction charts, and on-demand technician bookings.",
    "techStack": "Android · SQLite Offline First · REST API · GIS Mapping · Multilingual Bangla/EN",
    "image": "/assets/aistudio/bandhuchula-app_a1ba3a06.jpg",
    "pills": [
      "5M+ Monitored",
      "Carbon Credit Verification",
      "Offline Sync"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-18",
    "category": "app-design",
    "title": "SSLCOMMERZ Merchant App",
    "heading": "SSLCOMMERZ Merchant Mobile App",
    "medium": "Mobile Merchant Telemetry, Dynamic Payment Links, Instant Refunds &amp; QR Hub",
    "client": "SSLCOMMERZ / SSL Wireless",
    "year": "2025",
    "roi": "Real-Time Merchant Telemetry",
    "categoryLabel": "App Design · Fintech & Merchant Mobile App",
    "challenge": "Merchants managing retail storefronts and e-commerce payments lacked a unified native mobile app for live transaction tracking, instant payment link generation, refund approvals, and downloadable QR collections.",
    "solution": "Designed the flagship SSLCOMMERZ Merchant native mobile app featuring instantaneous transaction tracking (৳90k+ daily monitoring), dynamic Payment Links, 1-tap refund processing, and unified merchant QR checkout.",
    "techStack": "React Native · iOS & Android · REST API · Webhooks · SSLCOMMERZ Merchant Core",
    "image": "/assets/aistudio/sslcommerz-merchant-app_65454ea9.jpg",
    "pills": [
      "Real-Time Telemetry",
      "Instant Payment Links",
      "1-Tap Refund Hub"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-19",
    "category": "fintech",
    "title": "SSLCOMMERZ Payment Gateway &amp; Checkout",
    "heading": "SSLCOMMERZ Multi-Channel Payment Gateway",
    "medium": "National Payment System Operator, Multi-Channel Checkout, Cards &amp; Bangla QR",
    "client": "SSLCOMMERZ / Bangladesh Bank",
    "year": "2025",
    "roi": "18,000+ Active Merchants",
    "categoryLabel": "Fintech · Payment Gateway & Aggregator",
    "challenge": "E-commerce enterprises in South Asia dealt with fragmented banking integrations, manual settlement reconciliation, and high checkout drop-offs across cards, MFS, and internet banking.",
    "solution": "Architected the flagship SSLCOMMERZ multi-channel checkout engine with integrated Bangla QR, 30+ card &amp; MFS rails, automated T+1 settlement cycles, and PCI-DSS certified security.",
    "techStack": "React · TypeScript · Node.js · PCI-DSS Level 1 · REST API · Webhooks",
    "image": "/assets/aistudio/sslcommerz_78617072.jpg",
    "pills": [
      "18k+ Merchants",
      "Automated T+1 Payouts",
      "PCI-DSS Validated"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-20",
    "category": "fintech",
    "title": "Join SSLCOMMERZ Merchant Onboarding",
    "heading": "Join SSLCOMMERZ Merchant Onboarding",
    "medium": "Digital KYC Verification, Automated NID Uploads &amp; 7-Day Merchant Trial Activation",
    "client": "SSLCOMMERZ Business / SSL Wireless",
    "year": "2025",
    "roi": "15-Min Digital Onboarding",
    "categoryLabel": "Fintech · Merchant Onboarding & Digital KYC",
    "challenge": "New e-commerce merchants and MSMEs endured weeks of paper application friction, manual NID verifications, and slow merchant account activation.",
    "solution": "Architected the Join SSLCOMMERZ self-service onboarding studio featuring progressive 4-step digital KYC, automated NID &amp; photo verification, banking tier selection, and immediate 7-day trial sandbox activation.",
    "techStack": "React · TypeScript · Next.js · OCR Document Validation · Automated KYC · Tailwind CSS",
    "image": "/assets/aistudio/join-sslcommerz_68ce117b.jpg",
    "pills": [
      "15-Min Onboarding",
      "Instant NID &amp; Photo KYC",
      "7-Day Instant Trial"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-21",
    "category": "fintech",
    "title": "BASIC Bank Mobile Banking App",
    "heading": "BASIC Bank Mobile Banking App",
    "medium": "Digital Account Dashboard, Instant RTGS/NPSB Transfers, E-Wallet &amp; Bill Pay",
    "client": "BASIC Bank PLC",
    "year": "2022",
    "roi": "Zero-Friction Banking",
    "categoryLabel": "Fintech · Mobile Banking & Fund Transfers",
    "challenge": "State-owned bank customers encountered cumbersome in-branch queues, legacy paperwork, and slow multi-account fund transfer verification.",
    "solution": "Engineered the modern BASIC Bank mobile banking app: multi-account cockpit, instant RTGS, NPSB &amp; BEFTN transfers, E-Wallet integration, and 1-tap utility bill payments.",
    "techStack": "React Native · Android/iOS · Java Spring Boot · Oracle Core Banking · 2FA HSM Security",
    "image": "/assets/aistudio/basic-bank-app_2c547417.jpg",
    "pills": [
      "Zero-Friction Banking",
      "Instant RTGS &amp; NPSB",
      "E-Wallet &amp; Card Hub"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-22",
    "category": "fintech",
    "title": "NRB Connect Real-Time Account Opening",
    "heading": "NRB Connect Real-Time Account Opening",
    "medium": "Fourth-Generation Digital Banking, Real-Time Online Account Opening, Offshore &amp; eKYC",
    "client": "NRB Bank PLC / SSL Wireless",
    "year": "2024",
    "roi": "100% Digital eKYC",
    "categoryLabel": "Fintech · Online Account Opening & eKYC",
    "challenge": "Non-Resident Bangladeshis (NRBs) and domestic individuals faced multi-week paper delays, in-person branch mandates, and fragmented requirements to open offshore banking and currency accounts.",
    "solution": "Architected NRB Connect: a real-time online account opening engine featuring progressive eKYC validation, offshore banking origination, EPZ enterprise onboarding, and instant request ID tracking.",
    "techStack": "React · TypeScript · eKYC Biometric Verification · CBS Core Banking · Microservices · Tailwind CSS",
    "image": "/assets/aistudio/nrb-connect_1ef15465.jpg",
    "pills": [
      "100% Paperless eKYC",
      "Offshore Banking",
      "Instant Request Tracking"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-23",
    "category": "fintech",
    "title": "FastPay Kurdistan Digital Wallet",
    "heading": "FastPay Mobile Digital Wallet &amp; Ecosystem",
    "medium": "Cashless Mobile Financial Ecosystem, Virtual Mastercard &amp; QR Payments",
    "client": "FastPay (Iraq &amp; Kurdistan)",
    "year": "2019",
    "roi": "1M+ Users · PA-DSS",
    "categoryLabel": "Fintech · Mobile Digital Wallet & Cards",
    "challenge": "Middle Eastern regional consumers needed a reliable, certified cashless payment infrastructure supporting cross-border Mastercards and local merchant acceptance.",
    "solution": "Designed the comprehensive FastPay financial ecosystem: instant deposits &amp; withdrawals, 200+ merchant integrations, localized Kurdish/Arabic/English interfaces, and contactless QR checkout.",
    "techStack": "Flutter · Kotlin · Swift · Mastercard Network · ISO 8583 · Microservices",
    "image": "/assets/aistudio/fastpay-app_01058fda.jpg",
    "pills": [
      "1M+ Active Users",
      "PCI PA-DSS Validated",
      "200+ Merchants"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-24",
    "category": "fintech",
    "title": "The Premier Bank Corporate Banking",
    "heading": "The Premier Bank Corporate Banking Suite",
    "medium": "Enterprise Cash Management, Transfer Statistics, Multi-Bank Approvals &amp; Treasury",
    "client": "The Premier Bank PLC",
    "year": "2025",
    "roi": "৳98.5 Cr. Transfer Volume",
    "categoryLabel": "Fintech · Enterprise Corporate Banking",
    "challenge": "Large-scale corporate conglomerates required centralized cash management, syndicated project loan tracking, nationwide collection booth integration, and bulk corporate payroll.",
    "solution": "Architected the modern Corporate Banking terminal: multi-tier approval matrix, automated bulk disbursement, trade finance L/C tracking, and real-time treasury telemetry.",
    "techStack": "React · TypeScript · Tailwind CSS · High-Density Tables · Enterprise Core Banking API",
    "image": "/assets/aistudio/premier-bank_4c2807a0.jpg",
    "pills": [
      "৳98.5 Cr. Cashflow",
      "Multi-Tier Approvals",
      "NPSB &amp; RTGS Rails"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-25",
    "category": "healthcare",
    "title": "Algocyte - Oxford Immune Algorithmics (OIA)",
    "heading": "Algocyte - Oxford Immune Algorithmics (OIA)",
    "medium": "Precision Hematology Intelligence &amp; Real-Time Immune Health Cockpit",
    "client": "Oxford Immune Algorithmics (OIA)",
    "year": "2022",
    "roi": "Sub-Second Anomaly Triage",
    "categoryLabel": "Health Care · Precision AI & Immune Telemetry",
    "challenge": "Complex cellular hematology and biomarker telemetry data was difficult for clinical oncologists to interpret rapidly during time-critical patient evaluations.",
    "solution": "Engineered high-density, real-time hematology telemetry visualization with predictive immune-system anomaly alerts and longitudinal patient biomarker graphs.",
    "techStack": "React · TypeScript · WebGL Canvas · D3.js · HIPAA Telemetry · Python Analytics",
    "image": "/assets/aistudio/algocyte_86ef6956.jpg",
    "pills": [
      "HIPAA Compliant",
      "Predictive Alerts"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  },
  {
    "id": "proj-26",
    "category": "healthcare",
    "title": "Gain Health Large-Scale Food Fortification",
    "heading": "Gain Health — Large-Scale Food Fortification",
    "medium": "Large-Scale Food Fortification, Goals by improving access to fortified foods to 1.2 billion people by 2025.",
    "client": "Gain Health",
    "year": "2026",
    "roi": "1.2B People Access Goal",
    "categoryLabel": "Health Care · Large-Scale Food Fortification & Nutrition",
    "challenge": "Global food fortification initiatives faced fragmented supply chains, opaque compliance reporting, and dispersed field tracking across multiple developing regions.",
    "solution": "Designed the centralized food fortification intelligence portal, tracking production compliance, quality audits, and distribution velocity to improve access to fortified foods to 1.2 billion people by 2025.",
    "techStack": "React · TypeScript · Data Visualization · GIS Mapping · Supply Chain Analytics · REST API",
    "image": "/src/assets/images/othership_clean_ui_1792223295350.jpg",
    "pills": [
      "1.2B People Target",
      "Food Fortification"
    ],
    "links": {
      "caseStudy": "https://www.figma.com/@aam_uiux",
      "prototype": "",
      "live": "",
      "figma": "https://www.figma.com/@aam_uiux"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    "id": "testi-1",
    "name": "Shahzada Redwan",
    "role": "Director of Engineering, Field Nation",
    "linkedin": "https://www.linkedin.com/in/shazredwan/",
    "avatar": "/assets/endorsements/shahzada_redwan.jpg",
    "quote": "Abdullah played a key role in the UI/UX design of several fintech and tech applications and has an excellent understanding of user-centered design. His creativity, strong analytical skills, and in-depth knowledge of UX trends make him a valuable asset to any team."
  },
  {
    "id": "testi-2",
    "name": "Bahar Uddin",
    "role": "Chief Technology Officer (CTO), SSL Wireless",
    "linkedin": "https://www.linkedin.com/in/bahar-uddin/",
    "avatar": "/assets/endorsements/bahar_uddin.jpg",
    "quote": "Abdullah was a cornerstone of our product design function for more than 7 years at SSL Wireless. He spearheaded the design architecture of Bangladesh's premier payment gateway SSLCOMMERZ, complex enterprise HR platforms, and multi-tier banking apps with immaculate attention to user friction, accessibility, and high transaction volumes."
  },
  {
    "id": "testi-3",
    "name": "Taukir Hasan",
    "role": "Head of Engineering, Astha IT",
    "linkedin": "https://www.linkedin.com/in/taukirhasan/",
    "avatar": "/assets/endorsements/taukir_hasan.jpg",
    "quote": "Working with Abdullah on AI-driven enterprise applications like Whiz, Docomate, and TalentX has been a game-changer. He understands how to tame generative AI complexity into intuitive human interfaces and communicates seamlessly across product managers and engineers."
  }
];

export const FAQS: FaqItem[] = [
  {
    "id": "faq-1",
    "question": "What is your design approach for 0-to-1 products vs. scaling legacy enterprise platforms?",
    "answer": "For 0-to-1 initiatives, I focus on rapid discovery, user interviews, low-fidelity clickable wireframing, and lean usability tests to validate core product-market hypotheses before writing code. For enterprise systems, I emphasize scalable design tokens, WCAG 2.1 AA accessibility, deep information architecture audits, and reducing cognitive load across data-heavy operational workflows."
  },
  {
    "id": "faq-2",
    "question": "How do you bridge the gap between design and engineering teams?",
    "answer": "With a strong background in frontend fundamentals (HTML, modern CSS, Tailwind, React component hierarchies), I design with implementation constraints in mind. I deliver structured Figma components with explicit state matrices (idle, hover, loading, error, empty, edge-cases) and clear token variables, ensuring zero design-to-code drift."
  },
  {
    "id": "faq-3",
    "question": "What is your experience in AI-native and generative interface design?",
    "answer": "I specialize in designing cognitive ergonomics for probabilistic AI workflows—including real-time latency feedback, streaming UI states, human-in-the-loop review queues, prompt parameter controls, and explainable AI insights across enterprise SaaS platforms."
  },
  {
    "id": "faq-4",
    "question": "What are your preferred engagement models and availability?",
    "answer": "I am open to full-time remote Lead UI/UX roles, as well as high-impact advisory or design sprint consulting (contract/retainer) for seed to growth-stage startups and enterprise ventures globally."
  },
  {
    "id": "faq-5",
    "question": "Can you provide references or walkthroughs of confidential enterprise work?",
    "answer": "Yes. Due to NDAs with tier-1 banks and enterprise platforms, some proprietary dashboards and metrics are anonymized in public portfolios. I am happy to share deep-dive architectural walkthroughs during a private 20-minute video call."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    "id": "exp-1",
    "role": "Lead UI UX Designer (Team Lead)",
    "company": "Astha IT",
    "location": "Dhaka, BD · Full Time",
    "dates": "April 2025 – Present",
    "tenureBadge": "Lead / Team Lead",
    "isCurrent": true,
    "highlights": [
      "Key role in AI-driven and data-driven product decisions to convert complex AI workflows: Whiz (ML demand forecasting and retail promotional planning), Docomate.ai (LLM document intelligence), TalentX (agentic recruiting automation), and PromptVault (enterprise prompt governance with Citrin Cooperman).",
      "Designed Collablly SRM platform, reducing supply chain friction and driving 30% boost in on-time supplier delivery velocity.",
      "Contributed to Payra Port operational dashboard systems and workflow automation interfaces."
    ],
    "tags": [
      "AI-Driven UX",
      "Enterprise Platforms",
      "Payra Port Automation",
      "Workflow Systems",
      "Team Lead"
    ]
  },
  {
    "id": "exp-2",
    "role": "Lead UI/UX Designer & Manager",
    "company": "SSL Wireless",
    "location": "Dhaka, BD · Full Time",
    "dates": "Jan 2017 – April 2025",
    "tenureBadge": "8+ Years Tenure",
    "growthNotice": "8+ Years Growth · Promoted 2× from UX Engineer to Management",
    "subroles": [
      {
        "title": "UX Analyst Manager (Assistant Team Lead)",
        "dates": "Jan 2022 – April 2025",
        "highlights": [
          "Managed and mentored a team of 5 UI/UX designers, standardizing research sprints, usability testing, and accessibility frameworks.",
          "Directed UX strategy for SSLCOMMERZ, Bangladesh's largest payment gateway (18k+ merchants), reducing checkout drop rate from 62.4% to 3.14% via friction reduction.",
          "Collaborated across PMs, engineering leads, and banking partners to align UX roadmaps with enterprise revenue targets."
        ]
      },
      {
        "title": "Senior UX Engineer",
        "dates": "Jan 2021 – Dec 2021",
        "highlights": [
          "Led UX architecture for fintech and B2B SaaS products with data-backed heuristic audits.",
          "Designed \"eBuddy\" enterprise HRM suite supporting 350+ corporate employees with sub-second daily task tracking.",
          "Created modular design token system in Figma, accelerating cross-team frontend shipping speed by 30%."
        ]
      },
      {
        "title": "UX Engineer",
        "dates": "Jan 2017 – Dec 2020",
        "highlights": [
          "Designed FastPay mobile wallet (Kurdistan's #1 digital wallet), scaling past 500k+ active users and boosting onboarding completion by 63%.",
          "Conducted usability and WCAG AA accessibility audits across core banking and telecom portals.",
          "Redesigned enterprise iSMS gateway, increasing user engagement by 30%."
        ]
      }
    ],
    "tags": [
      "SSLCOMMERZ",
      "Payment Gateway",
      "Fintech & SaaS",
      "UX Strategy",
      "eBuddy HRM",
      "Design Systems",
      "FastPay MFS",
      "Mentorship"
    ]
  },
  {
    "id": "exp-3",
    "role": "UX Engineer (Business Engagement)",
    "company": "Next Generation Communication",
    "location": "Erbil, Iraq · 5 Months On-Site",
    "dates": "May 2019 – Sep 2019",
    "tenureBadge": "Fintech Engagement",
    "highlights": [
      "Designed core user journeys and mobile flows for FastPay, Iraq's flagship digital wallet platform.",
      "Collaborated directly on-site with regional financial stakeholders and engineering teams to streamline high-frequency transaction UX."
    ],
    "tags": [
      "FastPay Mobile Wallet",
      "Fintech UX",
      "High-Frequency Transactions",
      "Erbil, Iraq"
    ]
  },
  {
    "id": "exp-4",
    "role": "UI/UX Designer (Contract)",
    "company": "Oxford Immune Algorithmics (OIA)",
    "location": "United Kingdom · Remote Part-Time",
    "dates": "Jan 2021 – Mar 2022",
    "tenureBadge": "HealthTech AI",
    "highlights": [
      "Redesigned precision healthcare app Algocyte, directly contributing to securing the company's second investment round.",
      "Conducted rigorous usability, GDPR consent, and WCAG AA accessibility compliance audits for patient immune telemetry."
    ],
    "tags": [
      "Algocyte Healthcare",
      "HealthTech AI",
      "UX Audit",
      "GDPR & WCAG",
      "Remote UK"
    ]
  },
  {
    "id": "exp-5",
    "role": "Software Designer and Developer",
    "company": "MCC Ltd.",
    "location": "Dhaka, BD · Full Time",
    "dates": "Jan 2015 – Dec 2016",
    "tenureBadge": "Software & UX",
    "highlights": [
      "Designed Ghurbo travel booking platform, improving end-to-end trip booking efficiency.",
      "Built SaaS-based HRM tools utilized daily by 140+ office personnel."
    ],
    "tags": [
      "Ghurbo Travel",
      "SaaS HRM",
      "Software Design",
      "Dhaka, BD"
    ]
  },
  {
    "id": "exp-6",
    "role": "Web Developer and Designer",
    "company": "RMS IT",
    "location": "Dhaka, BD · Full Time",
    "dates": "Oct 2014 – Dec 2015",
    "tenureBadge": "Web & Theme Dev",
    "highlights": [
      "Designed top-selling ThemeForest templates and responsive web experiences.",
      "Engineered clean semantic frontend architectures with cross-device performance."
    ],
    "tags": [
      "ThemeForest",
      "WordPress Themes",
      "Responsive Design",
      "UI Engineering"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    "id": "skill-1",
    "title": "01 · AI & Cognitive Interface Design",
    "description": "Architecting cognitive scaffolding for probabilistic models, taming hallucination, and engineering intuitive latency recovery.",
    "skills": [
      "AI-Assisted Design",
      "Generative AI Tools",
      "AI-Powered UI/UX Workflows",
      "AI-Driven Research & Ideation",
      "Rapid Prototyping",
      "Design Automation",
      "AI Output Evaluation",
      "Human-Centered AI Design"
    ]
  },
  {
    "id": "skill-2",
    "title": "02 · UI/UX Design Systems & Execution",
    "description": "Zero-drift design-to-code execution across modern design systems, token architectures, and responsive micro-interactions.",
    "skills": [
      "Figma Variables & Tokens Studio",
      "Design Tokens (W3C Spec)",
      "Interactive Design Systems",
      "Accessibility (WCAG AA)",
      "Component Architecture",
      "Micro-Interactions & Motion",
      "Dev Handoff Automation",
      "Tailwind Design Tokens",
      "State Machines & Logic Flows"
    ]
  },
  {
    "id": "skill-3",
    "title": "03 · Strategy, ROI & Quantitative UX",
    "description": "Connecting interface architecture directly to ARR growth, user retention curves, and developer velocity.",
    "skills": [
      "Cognitive Friction Auditing",
      "Retention & ARR Optimization",
      "High-Density Telemetry",
      "Developer Handoff Automation",
      "Design Guild Governance",
      "WCAG 2.1 AA Accessibility",
      "Performance Auditing (Core Web Vitals)"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    "id": "cert-1",
    "title": "AI Fluency for creative work",
    "institute": "Claude Academy",
    "year": "2026"
  },
  {
    "id": "cert-2",
    "title": "AI Fluency for builders",
    "institute": "Claude Academy",
    "year": "2026"
  },
  {
    "id": "cert-3",
    "title": "UX Design Leadership",
    "institute": "Uxcel",
    "year": "2025"
  },
  {
    "id": "cert-4",
    "title": "AI in UX/UI Design",
    "institute": "Uxcel",
    "year": "2025"
  },
  {
    "id": "cert-5",
    "title": "Product led Certification",
    "institute": "Uxcel",
    "year": "2025"
  },
  {
    "id": "cert-6",
    "title": "Agile Workshop",
    "institute": "Astha IT",
    "year": "2025"
  },
  {
    "id": "cert-7",
    "title": "Information Architecture",
    "institute": "Uxcel",
    "year": "2024"
  },
  {
    "id": "cert-8",
    "title": "Human Computer Interaction",
    "institute": "IxDF",
    "year": "2023"
  },
  {
    "id": "cert-9",
    "title": "User Experience Beginner’s Guide",
    "institute": "Uxcel",
    "year": "2023"
  },
  {
    "id": "cert-10",
    "title": "Web Design for Usability",
    "institute": "IxDF",
    "year": "2023"
  }
];

export const AWARDS: AwardItem[] = [
  {
    "id": "award-1",
    "title": "“Standout Performer”",
    "organization": "Astha IT",
    "year": "2026",
    "description": "Awarded with the title of “Standout Performer” at Astha IT in 2026, in recognition of exceptional skills, outstanding clients success rate and team collaboration."
  },
  {
    "id": "award-2",
    "title": "“Mentoring Hero”",
    "organization": "SSL Wireless",
    "year": "2022",
    "description": "Awarded “Mentoring Hero” at SSL Wireless in 2022, for exceptional mentoring and supportive leadership to fellow designers."
  },
  {
    "id": "award-3",
    "title": "“Glowing Star Performer”",
    "organization": "SSL Wireless",
    "year": "2019",
    "description": "Recognized employee of the year for outstanding performance and innovation across mission-critical products."
  },
  {
    "id": "award-4",
    "title": "“Google Developer Group Speaker”",
    "organization": "Google Developer Group",
    "year": "Speaker & Facilitator",
    "description": "Conducted hands-on design thinking and advanced UI/UX architecture workshops for the tech community."
  }
];

export const PARTNERS = [
  {
    "name": "Astha IT",
    "tag": "Enterprise AI & Cloud"
  },
  {
    "name": "SSLCOMMERZ",
    "tag": "No.1 Payment Gateway BD"
  },
  {
    "name": "British American Tobacco",
    "tag": "Enterprise Supply Chain"
  },
  {
    "name": "Apex Footwear",
    "tag": "Omnichannel E-Commerce"
  },
  {
    "name": "Transcom Digital",
    "tag": "Consumer Megastore"
  },
  {
    "name": "BASIC Bank",
    "tag": "Digital Banking"
  },
  {
    "name": "FastPay",
    "tag": "Digital Wallet (1M+ Wallets)"
  },
  {
    "name": "NRB Bank",
    "tag": "Online Account Opening & eKYC"
  },
  {
    "name": "Oxford Immune Algorithmics",
    "tag": "HealthTech AI UK"
  },
  {
    "name": "Gain Health",
    "tag": "Global Nutrition NGO"
  }
];
