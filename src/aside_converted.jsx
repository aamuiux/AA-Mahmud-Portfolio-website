<aside className="site-archetypes-sidebar" id="site-archetypes-sidebar" data-lenis-prevent="true" aria-label="Showcase Archetypes Full Sidebar">
    
    {/* Top Block: Brand & Monogram */}
    <div className="sidebar-top-block">
      <div className="sidebar-brand-row">
        <a href="#top" className="sidebar-brand" id="sidebar-brand-logo" aria-label="AA Mahmud Top">
          <span className="logo-diamond" aria-hidden="true"></span>
          <span className="sidebar-brand-name">AA Mahmud</span>
        </a>
        <button className="sidebar-close-btn" id="sidebar-mobile-close" aria-label="Close sidebar">✕</button>
      </div>
      
      <p className="sidebar-role-desc">Lead UI/UX Designer &amp; AI Strategist</p>

      <div className="sidebar-status-pill">
        <span className="badge-pulse" aria-hidden="true"></span>
        <span>Open to new roles &amp; projects · Remote-friendly</span>
      </div>
    </div>

    {/* Center Block: Showcase Archetypes & Filters */}
    <div className="sidebar-center-block">
      {/* Archetype Filter Navigation Tabs (1: SaaS, 2: Dashboards, 3: Fintech & Banking, 4: E-Commerce, 5: App Design, 6: Health Care) */}
      <nav className="sidebar-archetype-nav" role="tablist" aria-label="Filter works by archetype">
        <button className="category-btn" data-filter="saas" role="tab" aria-selected="false">
          <span className="cat-indicator" aria-hidden="true"></span>
          <span className="cat-name">SaaS Platforms</span>
          <span className="cat-count">7</span>
        </button>
        <button className="category-btn" data-filter="dashboard" role="tab" aria-selected="false">
          <span className="cat-indicator" aria-hidden="true"></span>
          <span className="cat-name">Dashboards</span>
          <span className="cat-count">3</span>
        </button>
        <button className="category-btn" data-filter="fintech" role="tab" aria-selected="false">
          <span className="cat-indicator" aria-hidden="true"></span>
          <span className="cat-name">Fintech &amp; Banking</span>
          <span className="cat-count">6</span>
        </button>
        <button className="category-btn" data-filter="ecommerce" role="tab" aria-selected="false">
          <span className="cat-indicator" aria-hidden="true"></span>
          <span className="cat-name">E-Commerce</span>
          <span className="cat-count">2</span>
        </button>
        <button className="category-btn" data-filter="app-design" role="tab" aria-selected="false">
          <span className="cat-indicator" aria-hidden="true"></span>
          <span className="cat-name">App Design</span>
          <span className="cat-count">6</span>
        </button>
        <button className="category-btn" data-filter="healthcare" role="tab" aria-selected="false">
          <span className="cat-indicator" aria-hidden="true"></span>
          <span className="cat-name">Health Care</span>
          <span className="cat-count">2</span>
        </button>
      </nav>
    </div>

    {/* Bottom Block: Deliverables, Theme Toggle & Meta */}
    <div className="sidebar-bottom-block">
      <div className="sidebar-profile-card" id="sidebar-profile-card">
        <div className="profile-card-header-row">
          <img src="/src/assets/images/aa-mahmud.jpg" alt="Abdullah Al Mahmud" className="profile-card-avatar" width="46" height="46" loading="lazy" />
          <div className="profile-card-info">
            <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"0.35rem"}}>
              <h3 className="profile-card-name" style={{"margin":"0"}}>AA Mahmud</h3>
              <span className="profile-card-status-dot" aria-hidden="true" title="Available"></span>
            </div>
            <p className="profile-card-role">Lead UI/UX · 12+ Yrs</p>
          </div>
        </div>
        <button type="button" className="profile-view-link" id="sidebar-view-profile-btn" aria-label="View Full Profile of Abdullah Al Mahmud">
          <span>View Profile</span>
          <span className="profile-link-arrow" aria-hidden="true">→</span>
        </button>
      </div>

      <div className="sidebar-meta-footer">
        <button className="sidebar-theme-toggle" id="sidebar-theme-toggle" type="button" aria-label="Toggle theme mode" title="Toggle theme mode">
          <span className="theme-toggle-icon-wrap" aria-hidden="true">
            <svg className="theme-icon sun-icon" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="theme-icon moon-icon" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </span>
          <span className="sidebar-theme-text">
            <span className="mode-dark">Dark Mode</span>
            <span className="mode-light">Light Mode</span>
          </span>
        </button>

        <div className="sidebar-location-wrap">
          <span className="sidebar-location-dot" aria-hidden="true"></span>
          <span className="sidebar-location-text">Dhaka · Global</span>
        </div>
      </div>
    </div>

  </aside>