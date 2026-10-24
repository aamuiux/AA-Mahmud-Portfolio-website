# Implementation Plan: Action Button UX Streamlining & Dark Mode Visibility

Apply UX laws (Hick's Law & Miller's Law) to reduce cognitive load and visual clutter from 4 competing buttons down to 2 clear primary choices, with secondary actions elegantly tucked into an overflow menu (`More ▾`). Ensure all links and text are prominently legible with WCAG AAA contrast in both light and dark modes.

## UX Architecture Analysis
- **Problem**: 4 buttons (`Case Study ↗`, `View in Figma ↗`, `View Prototype ↗`, `Live Site ↗`) displayed simultaneously create choice paralysis (Hick's Law: decision time increases logarithmically with the number and complexity of choices). Visually, 4 pills consume too much horizontal real estate and fight for user attention with the project title and metrics.
- **Solution**:
  1. **Primary Intent (Top 2 actions)**:
     - `Case Study ↗` (Reads the problem, metrics, and architecture breakdown)
     - `Prototype ↗` (Interactive tactile demonstration in emerald accent)
  2. **Secondary Intent (Overflow Menu `•••` / `Links ▾`)**:
     - Accessible dropdown containing `View in Figma ↗` and `Live Site ↗` (or direct links).
     - Clean dropdown card with outline border, subtle backdrop blur, and dark-mode compliant hover states.
  3. **Live Site Visibility Fix**:
     - Distinct outline pill with crisp `--ink` color in both themes, subtle border glow on hover, and clear typography.

## Proposed Changes

### 1. Styles (`index.html` CSS)
- Style `.showcase-actions-group` to hold:
  - `.quick-brief-btn` (Case Study)
  - `.showcase-action-link.action-proto` (Prototype)
  - `.showcase-overflow-wrap`:
    - `.showcase-overflow-btn` (Clean outline button with `•••` or `Links ▾`)
    - `.showcase-overflow-dropdown`: Floating popover with keyboard accessibility (`Esc`, click outside), smooth fade/scale animation, and high contrast links for `View in Figma` and `Live Site`.
- Add explicit dark mode rules (`[data-theme="dark"]`) for outline links ensuring text is bright `#f7f7f5` with emerald/amber hover glow.

### 2. Markup Refactoring across Showcase Feed
- Refactor the 15 project cards (including the 5 new SaaS platforms: Collablly, Docomate AI, Othership, Caboodle Services, Exelo):
  - Primary button 1: `Case Study ↗`
  - Primary button 2: `Prototype ↗`
  - Overflow button: `Links ▾` (or `More ▾`) containing:
    - `View in Figma ↗`
    - `Live Site ↗` (for products with live external links)

### 3. JavaScript Dropdown Controller
- Add lightweight dropdown toggle behavior:
  - Toggle `.is-open` on click.
  - Close when clicking outside or pressing `Escape`.
  - Close other open menus when a new one is opened.

## Verification Plan

### Automated Build Verification
- Run `compile_applet` to verify clean build without syntax errors.

### Visual & Interactive Verification
- Test in both Light Mode and Dark Mode:
  - Verify card header feels airy, uncluttered, and structured with only 2 primary buttons + 1 overflow menu.
  - Verify `Live Site` and `View in Figma` text inside the overflow menu are crisp and readable in dark mode.
  - Test keyboard navigation and click-away dismissal for dropdown menus.

## SaaS Platform Showcase Visual Update
- Replaced all 7 SaaS Platform cards with real user-provided visual assets:
  - `collablly_2baa5c21.jpg` -> Collablly Supply Chain & Supplier Portal
  - `docomate_3bee0e29.jpg` -> Docomate AI Intelligent Document Processing
  - `othership_dc1bacc6.jpg` -> Othership Hybrid Workplace & Desk Booking
  - `caboodle_6b7b81b7.jpg` -> Caboodle Services CPG Sales Platform
  - `exlo_86240282.jpg` -> Exelo Testto / Exlo Automation Platform
  - `Whiz_5c14ef85.jpg` -> Whiz Intelligent AI Advanced Insight Graph Technology
  - `TalentX_53c9fde6.jpg` -> TalentX Enterprise Recruitment & HR Suite
- Preserved 16:10 / 16:11 aspect ratios with top alignment for uncropped UI headers and navigation.

## Fintech & Banking Showcase Visual Update
- Upgraded all 6 Fintech & Banking cards with user-provided visual assets:
  - `sslcommerz_78617072.jpg` -> SSLCOMMERZ Multi-Channel Payment Gateway & Checkout Engine
  - `join-sslcommerz_68ce117b.jpg` -> Join SSLCOMMERZ Merchant Onboarding Portal (Digital KYC & 7-Day Trial)
  - `basic-bank-app_2c547417.jpg` -> BASIC Bank Mobile Banking App (Account Dashboard, RTGS/NPSB Transfers)
  - `nrb-connect_1ef15465.jpg` -> **NRB Connect Real-Time Online Account Opening & eKYC** (New Item)
  - `fastpay-app_01058fda.jpg` -> FastPay Mobile Digital Wallet & Ecosystem (1M+ Users, PA-DSS)
  - `premier-bank_4c2807a0.jpg` -> The Premier Bank Corporate Banking Suite (Transfer Statistics & Treasury)
- Updated category counter and archetype metadata to reflect 6 verified platforms.
- Also synchronized the App Design cards for FastPay and BASIC Bank with the authentic mobile assets.

## Dashboard Showcase Visual Update
- Replaced the AI Mail dashboard card image with the newly attached high-fidelity asset:
  - `ai-mail_875a0eab.jpg` -> AI Mail Autonomous Inbox & Telemetry Cockpit (79% AI Effectiveness, Response Volume & Triage Queues).

## Mobile App Design Showcase Visual Update
- Replaced App Design cards with authentic user-provided designs:
  - `mypeople-earth_fe9d4ebe.jpg` -> MyPeople Global Cultural Community & Social App (Flicks video, intercultural feed, profile)
  - `employeebuddy-app_8d956edf.jpg` -> Employee Buddy (eBuddy) Mobile App (Workforce productivity, biometric attendance, task state machine & Gantt timeline)
  - `bandhuchula-app_a1ba3a06.jpg` -> Bondhu Chula Clean Energy App (ECOEYE dashboard, offline stove registry, GIS tracking)
  - `sslcommerz-merchant-app_65454ea9.jpg` -> **SSLCOMMERZ Merchant Mobile App** (Replaced Bangla QR Interoperable as requested; live transaction telemetry, dynamic payment links, refunds, and QR collections)
- All 6 mobile apps (FastPay, MyPeople, eBuddy, BASIC Bank Magpie, Bondhu Chula, SSLCOMMERZ Merchant) now render authentic screenshots with top-aligned framing.

## E-Commerce Showcase Visual Update
- Replaced E-Commerce cards with authentic user-provided designs:
  - `apex4u_dfaf6ee2.jpg` -> Apex4U Omnichannel Footwear & Lifestyle Store (Men's Formal Shoes catalog, faceted filters, Venturini product cards)
  - `transcom_84a76cc4.jpg` -> Transcom Digital Consumer Electronics & Appliance Megastore (Brand boutique storefront, 0% EMI financing, daily deals & categories)
- Both cards formatted with 16:11 aspect ratios and top alignment for clear display of promotional banners, category chips, and product grids.

## Health Care Showcase Visual Update
- Updated Health Care showcase:
  - Title & Heading: Renamed to **"Algocyte - Oxford Immune Algorithmics (OIA)"**
  - Image: Replaced with authentic clinical telemetry screenshot `algocyte_86ef6956.jpg` (`/public/assets/aistudio/algocyte_86ef6956.jpg`)
  - Calibrated 16:11 ratio box with top alignment to display Stefan Salvatore's patient dashboard, 2.87 test score gauge, multi-analyte biomarker levels (COVS, HCT, HGB, LYMPH, MCH, MCV, MONO, PLT, RBC, NEUT, WBC, EOS, GLOB), and longitudinal test score graphs.
  - Updated card metadata (`data-title`, `data-client`), case study modal bindings, and accessibility labels.

## About The Lead Designer Authentic Image Showcase
- Replaced 3 placeholder graphics in Home page's "About The Lead Designer" section with real workplace and team culture photography:
  1. `IMG_2761_2_36d5dc44.jpg`: Cross-functional design team review sprint in office (team gathered around laptop and conference display in "WORLD'S OKAYEST UX DESIGNER" hoodies).
  2. `2149173772_1_cb1c845e.jpg`: Lead designer at iMac workstation crafting interface architectures, token systems, and Othership wireframes.
  3. `telegram-cloud-photo-size-5-6059994135496080000-y_1_cce7123c.jpg`: Collaborative design squad celebration, dinner, and positive team culture.
- Responsive styling: Enhanced `.about-photos-grid` to be visible across all viewports (responsive single column stack on mobile, 3-column grid on tablet and desktop), wrapped in dashed border cards adhering to the design system.

## Category Showcase Pages: Professional Profiles & Networks Footer
- Added "Professional Profiles & Networks" footer block with a divider and gray background (`var(--surface-grey)`) into `#showcase-view`, visible across all category pages right above the site footer:
  - Displays the 3 social & contact cards: LinkedIn, GitHub, and Direct Email (`aam.uiux@gmail.com`) with clean dashed borders, hover lift effects, and adaptive styling for both light and dark themes.
  - Positioned above the global footer ("Abdullah Al Mahmud | Lead UI/UX Designer") with a dashed divider.

## Profile View Updates
- Updated Profile Header CTA: Changed "Initiate Strategic Briefing" to **"Book a 20-min call"** wired with Calendly integration (`https://calendly.com/aamsaikat-ux/20min`).
- Updated Career Record: Added **RMS IT.** (Oct 2014 – Dec 2015, Dhaka, BD · Full Time) as Web Developer and Designer:
  - Designed 'Themeforest' WordPress themes and templates, increasing sales and reducing support.
  - Developed responsive and device-friendly web design.
  - Styled with circular dot bullets (`•`) and capability tags.

