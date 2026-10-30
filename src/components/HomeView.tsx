import React, { useState } from "react";
import { CategoryId } from "../types";

interface HomeViewProps {
  isActive: boolean;
  onSelectCategory: (cat: CategoryId) => void;
  onGoProfile: () => void;
  onOpenBooking: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  isActive,
  onSelectCategory,
  onGoProfile,
  onOpenBooking,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const handleCopyEmail = () => {
    const email = "aam.uiux@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }).catch(() => {
        window.location.href = "mailto:" + email;
      });
    } else {
      window.location.href = "mailto:" + email;
    }
  };

  return (
    <div
      id="home-view"
      className={`site-view-panel ${isActive ? "is-active" : "is-hidden"}`}
      style={{ display: isActive ? undefined : "none" }}
    >
      

    {/* Hero Section (Right Side Image in Background) */}
    <section className="hero-section container" aria-label="Introduction">
      {/* Background Media: Portrait Positioned to the Right Side */}
      <div className="hero-bg-media motion-fade" data-motion="fade" data-delay="150" aria-hidden="true">
        <img
          src="/src/assets/images/aa-mahmud.jpg"
          alt="AA Mahmud — Lead UI/UX Designer &amp; Product Leader"
          className="hero-bg-img"
          width="1368"
          height="2048"
          fetchpriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="hero-bg-gradient-overlay" aria-hidden="true"></div>
      </div>

      {/* Foreground Hero Content */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Lead UI/UX Designer · 12+ Years Product Leadership</span>
          </div>

          <div className="hero-sub-eyebrow motion-fade" data-motion="fade" data-delay="150">
            <span className="hero-focus-pill">Design Systems · ROI · AI-Strategist</span>
          </div>

          <h1 className="hero-title" data-motion="line" data-stagger="140">
            <span className="line-mask"><span className="line-inner">Design that lifts</span></span>
            <span className="line-mask"><span className="line-inner">onboarding, retention</span></span>
            <span className="line-mask"><span className="line-inner"><span className="accent">and</span> revenue.</span></span>
          </h1>

          <p className="hero-lead" data-motion="word" data-delay="500" data-stagger="18">If you're balancing user expectations, business priorities, and technical constraints, I can help you find clarity and connect the dots, make confident design decisions, and lead teams toward solutions that make a real difference and create value with usable solution.</p>

          <div className="hero-cta-row motion-fade-up" data-motion="fade-up" data-delay="800">
            <a href="#works" className="cta-btn solid-light">
              See my work <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="https://calendly.com/aamsaikat-ux/20min" target="_blank" rel="noopener noreferrer" className="cta-btn ghost-light book-call-trigger" id="hero-book-call-btn" title="Book a 20-min call on Calendly">
              Book a 20-min call <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-facts-row" id="hero-facts-row">
            <div className="fact-item">
              <dt>Role Level</dt>
              <dd>Lead UI/UX Designer</dd>
            </div>
            <div className="fact-item">
              <dt>Experience</dt>
              <dd>12+ Years Product Leadership</dd>
            </div>
            <div className="fact-item">
              <dt>Focus Areas</dt>
              <dd>Enterprise SaaS · Design Systems · AI UX</dd>
            </div>
          </div>

          <div className="hero-scroll-cue motion-fade" data-motion="fade" data-delay="1400" aria-hidden="true">
            <span className="cue-text">Scroll to explore</span>
            <span className="cue-line"></span>
          </div>
        </div>
      </div>
    </section>

    {/* Statement Section */}
    <section className="statement-section rule-dashed" aria-label="Philosophy Statement">
      <div className="statement-inner">
        <div className="eyebrow motion-fade" data-motion="fade" style={{"marginBottom":"3rem"}}>
          <span className="eyebrow-line" aria-hidden="true"></span>
          <span className="eyebrow-text">Design Philosophy</span>
        </div>

        <p className="statement-text" data-motion="word" data-stagger="30">For me, design and problem solving is more than work—it’s a calling. I wake up excited about turning ideas into experiences that make people’s lives better. Passion isn’t just what drives me; it’s what keeps me curious, motivated, and eager to grow.</p>

        <span className="statement-signature motion-fade-up" data-motion="fade-up" data-delay="400">— AA Mahmud · Lead UI/UX Designer</span>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="section-pad rule-dashed" aria-label="About AA Mahmud">
      <div className="container">
        <div className="about-top-grid">
          {/* Left: Heading & 2 CTA Buttons */}
          <div className="about-heading-col">
            <div className="eyebrow motion-fade" data-motion="fade" style={{"marginBottom":"2rem"}}>
              <span className="eyebrow-line" aria-hidden="true"></span>
              <span className="eyebrow-text">About The Lead Designer</span>
            </div>
            <h2 className="about-heading" data-motion="line" data-stagger="90">
              <span className="line-mask"><span className="line-inner">12+ years designing products</span></span>
              <span className="line-mask"><span className="line-inner">that people actually finish using.</span></span>
            </h2>

            {/* 2 CTA Buttons directly under heading */}
            <div className="about-heading-actions motion-fade-up" data-motion="fade-up" data-delay="150">
              <a href="#contact" className="cta-btn solid-light" id="about-cta-contact">
                <span>Initiate Strategic Briefing</span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <button type="button" className="cta-btn ghost-light" id="about-cta-profile">
                <span>Explore Career Record</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </button>
            </div>
          </div>

          {/* Right: Two Paragraphs */}
          <div className="about-prose-col" style={{"alignSelf":"center"}}>
            <p className="about-p" data-motion="word" data-stagger="10">For over 12 years, I have led end-to-end product design across enterprise SaaS platforms, AI-native creation suites, fintech analytics, and mobile applications. My experience ranges from partnering with founders to validate zero-to-one concepts to collaborating with engineering directors to scale multi-brand design systems across 20+ distributed squads.</p>
            <p className="about-p" data-motion="word" data-stagger="10">As a seasoned design leader, I champion cross-functional alignment between Product Managers, Staff Engineers, and Executive Leadership. I establish mature design ops, mentor product designers, and deliver exhaustive Figma component guidelines and token systems that eliminate ambiguity and cut development rework in half.</p>
          </div>
        </div>

        {/* Photo Grid (3 authentic workplace & team culture plates, 3 / 2) */}
        <div className="about-photos-grid">
          <div className="about-photo-cell ratio-box ratio-3-2 motion-plate" data-motion="plate" data-stagger-index="0" data-stagger="100">
            <img src="/public/assets/aistudio/IMG_2761_2_36d5dc44.jpg" alt="AA Mahmud leading cross-functional UX design review and product critique with design team in office" style={{"objectPosition":"center 30%"}} loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="about-photo-cell ratio-box ratio-3-2 motion-plate" data-motion="plate" data-stagger-index="1" data-stagger="100">
            <img src="/public/assets/aistudio/2149173772_1_cb1c845e.jpg" alt="AA Mahmud crafting digital product interface architecture and Figma design systems at iMac workstation" style={{"objectPosition":"center 35%"}} loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="about-photo-cell ratio-box ratio-3-2 motion-plate" data-motion="plate" data-stagger-index="2" data-stagger="100">
            <img src="/public/assets/aistudio/telegram-cloud-photo-size-5-6059994135496080000-y_1_cce7123c.jpg" alt="Design squad culture, team celebration dinner and collaborative team milestone" style={{"objectPosition":"center 35%"}} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Facts Ledger */}
        <dl className="facts-ledger motion-fade-up" data-motion="fade-up">
          <div className="fact-item">
            <dt>Location</dt>
            <dd>Dhaka · Open to Global Remote</dd>
          </div>
          <div className="fact-item">
            <dt>Leadership Level</dt>
            <dd>Lead UX / Mentor</dd>
          </div>
          <div className="fact-item">
            <dt>Core Competency</dt>
            <dd>Fintech, SaaS, Design Systems &amp; AI UX</dd>
          </div>
          <div className="fact-item">
            <dt>Commercial Impact</dt>
            <dd>40+ Products · 500K+ users · 63% onboarding lift</dd>
          </div>
        </dl>
      </div>
    </section>

    {/* Principles Section (Grey) */}
    <section className="principles-section section-pad rule-dashed" aria-label="Core Principles">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Core Principles</span>
          </div>
          <h2 className="section-heading-title" data-motion="line" data-stagger="90">
            <span className="line-mask"><span className="line-inner">Three pillars of high-impact</span></span>
            <span className="line-mask"><span className="line-inner">product design.</span></span>
          </h2>
        </div>

        <div className="principles-grid">
          {/* Card 01 */}
          <article className="principle-card motion-fade-up" data-motion="fade-up" data-stagger-index="0" data-stagger="90">
            <span className="principle-num">01</span>
            <h3 className="principle-title">User-Validated Discovery &amp; ROI</h3>
            <p className="principle-desc">Every design decision starts with real user behavior and commercial targets. By combining stakeholder interviews, qualitative research, and heuristic audits, I identify high-friction bottlenecks and anchor design to measurable retention and conversion metrics.</p>
          </article>

          {/* Card 02 */}
          <article className="principle-card motion-fade-up" data-motion="fade-up" data-stagger-index="1" data-stagger="90">
            <span className="principle-num">02</span>
            <h3 className="principle-title">Scalable Design Systems &amp; Tokens</h3>
            <p className="principle-desc">Enterprise software requires unified governance. I build token-driven Figma libraries, accessible components (WCAG AA), and clear documentation that scale across 20+ squads — cutting front-end regression tickets and accelerating sprint velocity by 60%+.</p>
          </article>

          {/* Card 03 */}
          <article className="principle-card motion-fade-up" data-motion="fade-up" data-stagger-index="2" data-stagger="90">
            <span className="principle-num">03</span>
            <h3 className="principle-title">AI-Native UX &amp; High-Density Clarity</h3>
            <p className="principle-desc">Modern intelligent platforms demand thoughtful human-in-the-loop workflows. I replace ambiguous prompt boxes with granular steering dials, progressive disclosure, and real-time feedback states that make complex AI feel predictable and empowering.</p>
          </article>
        </div>
      </div>
    </section>



    {/* Testimonials Section */}
    <section className="section-pad rule-dashed" aria-label="Executive Endorsements">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Executive Endorsements</span>
          </div>
          <h2 className="section-heading-title" data-motion="line" data-stagger="90">
            <span className="line-mask"><span className="line-inner">What CTOs, Founders</span></span>
            <span className="line-mask"><span className="line-inner">and Leaders say.</span></span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {/* Testimonial 01: Shahzada Redwan */}
          <figure className="testimonial-figure motion-fade-up" data-motion="fade-up" data-stagger-index="0" data-stagger="110">
            <blockquote className="testimonial-quote">
              “Abdullah played a key role in the UI/UX design of several fintech and tech applications and has an excellent understanding of user-centered design. His creativity, strong analytical skills, and in-depth knowledge of UX trends make him a valuable asset to any team.”
            </blockquote>
            <figcaption className="testimonial-caption">
              <div className="testimonial-author-row">
                <a href="https://www.linkedin.com/in/shazredwan/" target="_blank" rel="noreferrer noopener" className="testimonial-avatar-link" aria-label="Visit Shahzada Redwan's LinkedIn Profile" title="Shahzada Redwan on LinkedIn">
                  <img src="/public/assets/endorsements/shahzada_redwan.jpg" alt="Shahzada Redwan — Director of Engineering, Field Nation" className="testimonial-avatar-img" width="48" height="48" loading="lazy" />
                </a>
                <div className="testimonial-author-info">
                  <a href="https://www.linkedin.com/in/shazredwan/" target="_blank" rel="noreferrer noopener" className="testimonial-author-name-link" title="Shahzada Redwan on LinkedIn">
                    <span className="testimonial-author">Shahzada Redwan</span>
                    <svg className="testimonial-linkedin-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <p className="testimonial-role">Director of Engineering, Field Nation</p>
                </div>
              </div>
            </figcaption>
          </figure>

          {/* Testimonial 02: Mohammad Bahar Uddin */}
          <figure className="testimonial-figure motion-fade-up" data-motion="fade-up" data-stagger-index="1" data-stagger="110">
            <blockquote className="testimonial-quote">
              “Abdullah's attention to detail and creative problem-solving skills are unparalleled. He has extensive experience in a variety of industries, including fintech, eCommerce, B2B, B2C, ERP, HRM, and CRM, which has made him a valuable member of our team.”
            </blockquote>
            <figcaption className="testimonial-caption">
              <div className="testimonial-author-row">
                <a href="https://www.linkedin.com/in/mohammad-bahar-uddin-52418686/" target="_blank" rel="noreferrer noopener" className="testimonial-avatar-link" aria-label="Visit Mohammad Bahar Uddin's LinkedIn Profile" title="Mohammad Bahar Uddin on LinkedIn">
                  <img src="/public/assets/endorsements/bahar_uddin.jpg" alt="Mohammad Bahar Uddin — SVP, Head of Technology at QuantFintech Ltd" className="testimonial-avatar-img" width="48" height="48" loading="lazy" />
                </a>
                <div className="testimonial-author-info">
                  <a href="https://www.linkedin.com/in/mohammad-bahar-uddin-52418686/" target="_blank" rel="noreferrer noopener" className="testimonial-author-name-link" title="Mohammad Bahar Uddin on LinkedIn">
                    <span className="testimonial-author">Mohammad Bahar Uddin</span>
                    <svg className="testimonial-linkedin-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <p className="testimonial-role">SVP, Head of Technology at QuantFintech Ltd</p>
                </div>
              </div>
            </figcaption>
          </figure>

          {/* Testimonial 03: Md. Taukir Hasan */}
          <figure className="testimonial-figure motion-fade-up" data-motion="fade-up" data-stagger-index="2" data-stagger="110">
            <blockquote className="testimonial-quote">
              “I particularly impressed with Abdullah's ability to strike a balance between design and business objectives. He is adept at coordinating the design since he recognizes how important design is to achieving business goals.”
            </blockquote>
            <figcaption className="testimonial-caption">
              <div className="testimonial-author-row">
                <a href="https://www.linkedin.com/in/taukirxhasan/" target="_blank" rel="noreferrer noopener" className="testimonial-avatar-link" aria-label="Visit Md. Taukir Hasan's LinkedIn Profile" title="Md. Taukir Hasan on LinkedIn">
                  <img src="/public/assets/endorsements/taukir_hasan.jpg" alt="Md. Taukir Hasan — Head of Product &amp; AI, SSL Wireless" className="testimonial-avatar-img" width="48" height="48" loading="lazy" />
                </a>
                <div className="testimonial-author-info">
                  <a href="https://www.linkedin.com/in/taukirxhasan/" target="_blank" rel="noreferrer noopener" className="testimonial-author-name-link" title="Md. Taukir Hasan on LinkedIn">
                    <span className="testimonial-author">Md. Taukir Hasan</span>
                    <svg className="testimonial-linkedin-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <p className="testimonial-role">Head of Product &amp; AI, SSL Wireless</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* Selected Engagements Section (Grey) */}
    <section className="principles-section section-pad rule-dashed" aria-label="Selected Engagements">
      <div className="container">
        <div className="section-heading" style={{"marginBottom":"4rem"}}>
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Selected Engagements</span>
          </div>
          <h2 className="section-heading-title" data-motion="line" data-stagger="90">
            <span className="line-mask"><span className="line-inner">Trusted by high-growth</span></span>
            <span className="line-mask"><span className="line-inner">ventures &amp; leaders.</span></span>
          </h2>
        </div>

        <ul className="exhibitions-grid">
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="0" data-stagger="80">
            <span className="exhibition-num">01</span>
            <div className="exhibition-content">
              <span className="exhibition-name">SSLCOMMERZ</span>
              <p className="exhibition-desc">Bangladesh #1 payment gateway &amp; fintech merchant ecosystem</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="1" data-stagger="80">
            <span className="exhibition-num">02</span>
            <div className="exhibition-content">
              <span className="exhibition-name">GloryDale</span>
              <p className="exhibition-desc">Integrated EPOS system software &amp; hospitality retail terminals</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="2" data-stagger="80">
            <span className="exhibition-num">03</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Algocyte</span>
              <p className="exhibition-desc">Oxford Immune Algorithmics · Precision AI health monitoring</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="0" data-stagger="80">
            <span className="exhibition-num">04</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Othership</span>
              <p className="exhibition-desc">Hybrid work station management &amp; distributed desk booking system</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="1" data-stagger="80">
            <span className="exhibition-num">05</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Collablly</span>
              <p className="exhibition-desc">SRM platform that gives operational workflows to improve efficiency and decision-making.</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="2" data-stagger="80">
            <span className="exhibition-num">06</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Caboodle</span>
              <p className="exhibition-desc">All-in-one resource pooling &amp; enterprise logistics platform</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="0" data-stagger="80">
            <span className="exhibition-num">07</span>
            <div className="exhibition-content">
              <span className="exhibition-name">DocomateAI</span>
              <p className="exhibition-desc">Intelligent legal and medical document automation with LLM agents</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="1" data-stagger="80">
            <span className="exhibition-num">08</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Gain Health</span>
              <p className="exhibition-desc">Large-Scale Food Fortification, Goals by improving access to fortified foods to 1.2 billion people by 2025.</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="2" data-stagger="80">
            <span className="exhibition-num">09</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Transcom Digital</span>
              <p className="exhibition-desc">Premier consumer electronics &amp; omnichannel retail e-commerce</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="0" data-stagger="80">
            <span className="exhibition-num">10</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Apex4U</span>
              <p className="exhibition-desc">Footwear &amp; lifestyle flagship mobile loyalty shopping app</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="1" data-stagger="80">
            <span className="exhibition-num">11</span>
            <div className="exhibition-content">
              <span className="exhibition-name">BASIC Bank</span>
              <p className="exhibition-desc">Commercial banking core, treasury analytics &amp; mobile transfers</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="2" data-stagger="80">
            <span className="exhibition-num">12</span>
            <div className="exhibition-content">
              <span className="exhibition-name">AI Mail</span>
              <p className="exhibition-desc">Autonomous generative email client with intelligent triage</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="0" data-stagger="80">
            <span className="exhibition-num">13</span>
            <div className="exhibition-content">
              <span className="exhibition-name">Exlo</span>
              <p className="exhibition-desc">Next-Gen AI ecosystem Devops and QA Studio for deep monitoring</p>
            </div>
          </li>
          <li className="exhibition-item motion-fade-up" data-motion="fade-up" data-col-index="1" data-stagger="80">
            <span className="exhibition-num">14</span>
            <div className="exhibition-content">
              <span className="exhibition-name">BAT Bangladesh</span>
              <p className="exhibition-desc">Peachtree enterprise finance performance &amp; field distribution cockpit</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    {/* FAQ Section (Accordion) */}
    <section className="section-pad rule-dashed" aria-label="Frequently Asked Questions">
      <div className="container faq-grid">
        {/* Left: Heading */}
        <div className="faq-left-col">
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Recruiter &amp; Client FAQ</span>
          </div>
          <h2 className="section-heading-title" data-motion="line" data-stagger="90">
            <span className="line-mask"><span className="line-inner">Common questions</span></span>
            <span className="line-mask"><span className="line-inner">&amp; working models.</span></span>
          </h2>
        </div>

        {/* Right: Accordion Rows */}
        <div className="faq-right-col">
          {/* Item 01 */}
          <div className="faq-item motion-fade" data-motion="fade" data-stagger-index="0" data-stagger="80">
            <h3>
              <button className="faq-btn" id="faq-btn-1" aria-expanded="false" aria-controls="faq-panel-1">
                <span className="faq-question">What is your design approach for 0-to-1 products vs. scaling legacy enterprise platforms?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
            </h3>
            <div className="faq-panel" id="faq-panel-1" role="region" aria-labelledby="faq-btn-1">
              <div className="faq-panel-content">
                <p className="faq-answer">For 0-to-1 initiatives, I focus on rapid discovery, user interviews, low-fidelity wireframes, and fast prototype validation to prove product-market fit before scaling. For legacy enterprise software, I perform detailed heuristic audits, identify high-friction bottlenecks, and implement modular design systems that modernize usability without alienating existing power users.</p>
              </div>
            </div>
          </div>

          {/* Item 02 */}
          <div className="faq-item motion-fade" data-motion="fade" data-stagger-index="1" data-stagger="80">
            <h3>
              <button className="faq-btn" id="faq-btn-2" aria-expanded="false" aria-controls="faq-panel-2">
                <span className="faq-question">How do you measure and prove the business impact (ROI) of UI/UX design?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
            </h3>
            <div className="faq-panel" id="faq-panel-2" role="region" aria-labelledby="faq-btn-2">
              <div className="faq-panel-content">
                <p className="faq-answer">Design must drive measurable business outcomes. I measure success through concrete product metrics: onboarding completion rates, task execution velocity, churn reduction, feature adoption, and Net Promoter Score (NPS). For design system projects, ROI is measured in accelerated engineering velocity and reduced bug remediation hours.</p>
              </div>
            </div>
          </div>

          {/* Item 03 */}
          <div className="faq-item motion-fade" data-motion="fade" data-stagger-index="2" data-stagger="80">
            <h3>
              <button className="faq-btn" id="faq-btn-3" aria-expanded="false" aria-controls="faq-panel-3">
                <span className="faq-question">How do you partner and collaborate with Product Managers and Engineering squads?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
            </h3>
            <div className="faq-panel" id="faq-panel-3" role="region" aria-labelledby="faq-btn-3">
              <div className="faq-panel-content">
                <p className="faq-answer">I treat cross-functional collaboration as fundamental. By engaging engineers during early discovery, documenting comprehensive component edge cases (empty states, errors, latency, focus states), and using structured Figma design tokens, we eliminate handoff friction and build shared product ownership.</p>
              </div>
            </div>
          </div>

          {/* Item 04 */}
          <div className="faq-item motion-fade" data-motion="fade" data-stagger-index="3" data-stagger="80">
            <h3>
              <button className="faq-btn" id="faq-btn-4" aria-expanded="false" aria-controls="faq-panel-4">
                <span className="faq-question">What engagement models do you support (Full-Time, Fractional, or Advisory)?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
            </h3>
            <div className="faq-panel" id="faq-panel-4" role="region" aria-labelledby="faq-btn-4">
              <div className="faq-panel-content">
                <p className="faq-answer">I am available for Lead UI/UX Designer full-time positions, Fractional Design Leadership (10–20 hours/week) for venture-backed startups, and targeted 4–8 week Design Sprints focused on product discovery, redesigns, or design systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pre-Footer CTA & Socials Section */}
    <section id="contact" className="pre-footer-cta-section rule-dashed" aria-label="Contact and Socials">
      <div className="cta-container">
        
        {/* Live Status Pill */}
        <div className="cta-status-badge motion-fade" data-motion="fade">
          <span className="cta-pulse-dot" aria-hidden="true"></span>
          <span>Open to Lead UI/UX Roles &amp; Strategic Advisory · 2026 Engagements</span>
        </div>

        <div className="cta-main-grid">
          {/* Left: Narrative & Value Proposition */}
          <div className="cta-intro-col">
            <h2 className="cta-headline motion-fade-up" data-motion="fade-up">
              Hiring a designer or fixing a product? Let’s talk.
            </h2>
            <p className="cta-description motion-fade-up" data-motion="fade-up" data-delay="100">
              Whether you are an executive recruiter seeking a Lead UX Designer to anchor your product organization, or a founder launching a flagship SaaS experience, let's review your product roadmap, team structure, and target impact.
            </p>
          </div>

          {/* Right: Interactive Actions Card */}
          <div className="cta-actions-card motion-fade-up" data-motion="fade-up" data-delay="200">
            <h3 className="cta-actions-card-title">Get in touch</h3>

            <div className="cta-actions-btn-group">
              <a href="https://calendly.com/aamsaikat-ux/20min" target="_blank" rel="noopener noreferrer" className="cta-btn solid-light book-call-trigger" id="contact-book-call-btn" style={{"flex":"1","justifyContent":"center"}} title="Book a 20-min call on Calendly">
                <span>Book a 20-min call</span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <button type="button" className="cta-copy-btn" id="cta-copy-email-btn" title="Copy email address to clipboard">
                <span id="cta-email-display-text">aam.uiux@gmail.com</span>
                <span className="cta-copy-badge" id="cta-copy-email-toast">Copy</span>
              </button>
            </div>

            <p className="cta-direct-note">
              <span style={{"color":"#34d399"}} aria-hidden="true">●</span>
              <span>Tell me about your role or product. I reply within one business day.</span>
            </p>
          </div>
        </div>

        {/* Social Networks Row */}
        <div className="cta-socials-header">
          <span className="cta-socials-label">Professional Profiles &amp; Networks</span>
          <span style={{"fontSize":"0.75rem","color":"var(--on-dark-faint)"}}>Connect directly</span>
        </div>

        <div className="cta-socials-grid">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/aamuiux/" target="_blank" rel="noreferrer noopener" className="cta-social-card" aria-label="Visit LinkedIn Profile">
            <div className="cta-social-card-left">
              <div className="cta-social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div className="cta-social-meta">
                <p className="cta-social-title">LinkedIn</p>
                <p className="cta-social-sub">Professional Recommendations</p>
              </div>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">↗</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/aamuiux/" target="_blank" rel="noreferrer noopener" className="cta-social-card" aria-label="Visit GitHub Profile">
            <div className="cta-social-card-left">
              <div className="cta-social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </div>
              <div className="cta-social-meta">
                <p className="cta-social-title">GitHub</p>
                <p className="cta-social-sub">Design Systems &amp; Code</p>
              </div>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">↗</span>
          </a>


          {/* Direct Inquiries Email */}
          <a href="mailto:aam.uiux@gmail.com" className="cta-social-card" aria-label="Direct Email Inquiry">
            <div className="cta-social-card-left">
              <div className="cta-social-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="cta-social-meta">
                <p className="cta-social-title">aam.uiux@gmail.com</p>
                <p className="cta-social-sub">Direct Inquiries · Fast Reply</p>
              </div>
            </div>
            <span className="cta-social-arrow" aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  
    </div>
  );
};
