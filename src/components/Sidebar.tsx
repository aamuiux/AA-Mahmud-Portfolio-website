import React from "react";
import { ViewType, CategoryId } from "../types";

interface SidebarProps {
  currentView: ViewType;
  currentCategory: CategoryId;
  theme: "dark" | "light";
  isMobileOpen: boolean;
  onSelectCategory: (cat: CategoryId) => void;
  onGoHome: () => void;
  onGoProfile: () => void;
  onToggleTheme: () => void;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  currentCategory,
  theme,
  isMobileOpen,
  onSelectCategory,
  onGoHome,
  onGoProfile,
  onToggleTheme,
  onCloseMobile,
}) => {
  const categories: Array<{ id: CategoryId; name: string; count: string }> = [
    { id: "saas", name: "SaaS Platforms", count: "7" },
    { id: "dashboard", name: "Dashboards", count: "3" },
    { id: "fintech", name: "Fintech & Banking", count: "6" },
    { id: "ecommerce", name: "E-Commerce", count: "2" },
    { id: "app-design", name: "App Design", count: "6" },
    { id: "healthcare", name: "Health Care", count: "2" },
  ];

  return (
    <aside
      className={`site-archetypes-sidebar ${isMobileOpen ? "is-mobile-open" : ""}`}
      id="site-archetypes-sidebar"
      data-lenis-prevent="true"
      aria-label="Showcase Archetypes Full Sidebar"
    >
      {/* Top Block: Brand & Monogram */}
      <div className="sidebar-top-block">
        <div className="sidebar-brand-row">
          <a
            href="#top"
            className="sidebar-brand"
            id="sidebar-brand-logo"
            aria-label="AA Mahmud Top"
            onClick={(e) => {
              e.preventDefault();
              onGoHome();
            }}
          >
            <span className="logo-diamond" aria-hidden="true"></span>
            <span className="sidebar-brand-name">AA Mahmud</span>
          </a>
          <button
            className="sidebar-close-btn"
            id="sidebar-mobile-close"
            aria-label="Close sidebar"
            onClick={onCloseMobile}
          >
            ✕
          </button>
        </div>

        <p className="sidebar-role-desc">Lead UI/UX Designer &amp; AI Strategist</p>
        <div className="sidebar-status-pill">
          <span className="badge-pulse" aria-hidden="true"></span>
          <span>Open to new roles &amp; projects · Remote-friendly</span>
        </div>
      </div>

      {/* Center Block: Showcase Archetypes & Filters */}
      <div className="sidebar-center-block">
        <nav className="sidebar-archetype-nav" role="tablist" aria-label="Filter works by archetype">
          {categories.map((cat) => {
            const isActive = currentView === "showcase" && currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`category-btn ${isActive ? "is-active" : ""}`}
                data-filter={cat.id}
                role="tab"
                aria-selected={isActive ? "true" : "false"}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }}
              >
                <span className="cat-indicator" aria-hidden="true"></span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{cat.count}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Block: Deliverables, Theme Toggle & Meta */}
      <div className="sidebar-bottom-block">
        <div
          className={`sidebar-profile-card ${currentView === "profile" ? "is-active" : ""}`}
          id="sidebar-profile-card"
          onClick={() => onGoProfile()}
          style={{ cursor: "pointer" }}
        >
          <div className="profile-card-header-row">
            <img
              src="/src/assets/images/aa-mahmud.jpg"
              alt="Abdullah Al Mahmud"
              className="profile-card-avatar"
              width={46}
              height={46}
              loading="lazy"
            />
            <div className="profile-card-info">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.35rem" }}>
                <h3 className="profile-card-name" style={{ margin: 0 }}>AA Mahmud</h3>
                <span className="profile-card-status-dot" aria-hidden="true" title="Available"></span>
              </div>
              <p className="profile-card-role">Lead UI/UX · 12+ Yrs</p>
            </div>
          </div>
          <button
            type="button"
            className="profile-view-link"
            id="sidebar-view-profile-btn"
            aria-label="View Full Profile of Abdullah Al Mahmud"
            onClick={(e) => {
              e.stopPropagation();
              onGoProfile();
            }}
          >
            <span>View Profile</span>
            <span className="profile-link-arrow" aria-hidden="true">→</span>
          </button>
        </div>

        <div className="sidebar-meta-footer">
          <button
            className="sidebar-theme-toggle"
            id="sidebar-theme-toggle"
            type="button"
            aria-label="Toggle theme mode"
            title="Toggle theme mode"
            onClick={onToggleTheme}
          >
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
  );
};
