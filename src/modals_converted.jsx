<button id="back-to-top" className="back-to-top-btn" type="button" aria-label="Back to top" title="Back to top">
    <svg className="back-to-top-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
    <span className="back-to-top-label">Top</span>
  </button>

  {/* Modal Menu Overlay */}
  <div className="menu-overlay" id="menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation Menu" aria-hidden="true">
    <div className="menu-panel">
      <div className="menu-content">
        {/* Top Bar */}
        <div className="menu-top-bar">
          <span className="menu-top-label">Menu</span>
          <div style={{"display":"flex","alignItems":"center","gap":"1.5rem"}}>
            <button className="theme-toggle-btn" id="modal-theme-toggle" type="button" aria-label="Toggle theme mode" title="Toggle theme">
              <span className="theme-toggle-icon-wrap" aria-hidden="true">
                <svg className="theme-icon sun-icon" viewBox="0 0 24 24" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="M4.93 4.93l1.41 1.41"></path>
                  <path d="M17.66 17.66l1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="M6.34 17.66l-1.41 1.41"></path>
                  <path d="M19.07 4.93l-1.41 1.41"></path>
                </svg>
                <svg className="theme-icon moon-icon" viewBox="0 0 24 24" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </span>
              <span className="theme-toggle-text">
                <span className="theme-mode-text mode-dark">Dark</span>
                <span className="theme-mode-text mode-light">Light</span>
              </span>
            </button>
            <button className="menu-close-btn" id="menu-close-btn" aria-label="Close navigation menu">Close ✕</button>
          </div>
        </div>

        {/* Bottom Block */}
        <div className="menu-bottom-block">
          <div>
            <a href="mailto:aam.uiux@gmail.com" className="menu-bottom-email">aam.uiux@gmail.com</a>
            <p className="menu-bottom-location">Dhaka · Global Remote</p>
          </div>
          <div className="menu-bottom-socials">
            <a href="https://www.linkedin.com/in/aamuiux/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a href="https://github.com/aamuiux/" target="_blank" rel="noreferrer noopener">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Interactive Case Study Modal */}
  <div className="brief-modal-backdrop" id="brief-modal" role="dialog" aria-modal="true" aria-labelledby="modal-brief-title" aria-hidden="true">
    <div className="brief-modal-card">
      <button className="brief-modal-close" id="brief-modal-close" aria-label="Close project context">Close ✕</button>
      <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"0.5rem","marginBottom":"0.5rem","flexWrap":"wrap"}}>
        <span className="modal-cat-tag" id="modal-brief-cat">SaaS · Platform</span>
        <span style={{"fontSize":"0.6875rem","textTransform":"uppercase","letterSpacing":"0.14em","color":"#34d399","fontWeight":"500"}}>Project Context &amp; Architecture</span>
      </div>
      <h3 className="modal-proj-title" id="modal-brief-title">Project Name</h3>
      
      <div className="modal-grid">
        <div>
          <span className="modal-block-label">Client &amp; Sector</span>
          <p className="modal-block-text" id="modal-brief-client">Enterprise Partner</p>
        </div>
        <div>
          <span className="modal-block-label">Year &amp; Lifecycle</span>
          <p className="modal-block-text" id="modal-brief-year">2025</p>
        </div>
        <div style={{"gridColumn":"1 / -1"}}>
          <span className="modal-block-label">Measured ROI &amp; Velocity</span>
          <div className="modal-metric-badge" id="modal-brief-roi">+140% Retention</div>
        </div>
        <div style={{"gridColumn":"1 / -1"}}>
          <span className="modal-block-label">Core Problem &amp; Cognitive Friction</span>
          <p className="modal-block-text" id="modal-brief-challenge">Problem statement...</p>
        </div>
        <div style={{"gridColumn":"1 / -1"}}>
          <span className="modal-block-label">UI/UX Architecture &amp; System Solution</span>
          <p className="modal-block-text" id="modal-brief-solution">Engineered solution...</p>
        </div>
        <div style={{"gridColumn":"1 / -1"}}>
          <span className="modal-block-label">Production Technology Stack</span>
          <p className="modal-block-text" id="modal-brief-tech" style={{"fontSize":"0.8125rem","color":"var(--on-dark-muted)"}}>React · TypeScript · WebGL</p>
        </div>
      </div>
    </div>
  </div>

  {/* Interactive 20-min Call Booking Modal (Calendly Embedded Scheduler) */}
  <div className="brief-modal-backdrop" id="booking-modal" role="dialog" aria-modal="true" aria-labelledby="modal-booking-title" aria-hidden="true">
    <div className="brief-modal-card booking-modal-card">
      <button className="brief-modal-close" id="booking-modal-close" aria-label="Close scheduling modal">Close ✕</button>
      
      <div className="booking-modal-header">
        <span className="booking-kicker">
          <span className="badge-pulse" aria-hidden="true"></span>
          <span>Direct Calendly Scheduling</span>
        </span>
        <h3 className="booking-title" id="modal-booking-title">Book a 20-min Intro Call</h3>
        <p className="booking-desc">Pick a date &amp; time that works best across US, European, or APAC timezones. Let's discuss your product roadmap, design system, or team leadership needs.</p>
        
        <div className="booking-pill-row">
          <span className="booking-meta-pill">⏱ 20 Minutes</span>
          <span className="booking-meta-pill">📍 Google Meet / Zoom</span>
          <span className="booking-meta-pill">👤 1-on-1 with AA Mahmud</span>
        </div>
      </div>

      {/* Embedded Calendly Iframe */}
      <div className="booking-embed-container">
        <iframe
          id="booking-calendly-iframe"
          className="booking-embed-frame"
          src="https://calendly.com/aamsaikat-ux/20min?embed_domain=localhost&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
          title="Schedule 20-Min Intro Call with AA Mahmud"
          loading="lazy">
        </iframe>
      </div>

      <div className="booking-fallback-bar">
        <span>Prefer direct link? Open outside modal:</span>
        <div style={{"display":"flex","gap":"0.75rem","alignItems":"center"}}>
          <a href="https://calendly.com/aamsaikat-ux/20min" target="_blank" rel="noopener noreferrer" className="cta-btn solid-dark" style={{"padding":"0.5rem 1rem","fontSize":"0.75rem"}}>
            Open on Calendly.com ↗
          </a>
          <a href="mailto:aam.uiux@gmail.com?subject=20-Min%20Intro%20Call%20Request" className="cta-btn ghost-dark" style={{"padding":"0.5rem 1rem","fontSize":"0.75rem"}}>
            Email Directly
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Script: Lenis & Motion Engine */}
  