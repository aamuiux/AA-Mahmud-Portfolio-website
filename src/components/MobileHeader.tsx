import React from "react";
import { ViewType, CategoryId, CATEGORIES_META } from "../types";

interface MobileHeaderProps {
  currentView: ViewType;
  currentCategory: CategoryId;
  onGoHome: () => void;
  onToggleMobileSidebar: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  currentView,
  currentCategory,
  onGoHome,
  onToggleMobileSidebar,
}) => {
  return (
    <header className="mobile-sticky-header" id="mobile-sticky-header" aria-label="Mobile Navigation Header">
      <div className="mobile-header-inner">
        <a
          href="#top"
          className="mobile-header-brand"
          id="mobile-header-brand"
          aria-label="AA Mahmud — Return to Home"
          onClick={(e) => {
            e.preventDefault();
            onGoHome();
          }}
        >
          <span className="mobile-brand-name">AA Mahmud</span>
          <span className="mobile-brand-subtitle">
            {currentView === "showcase"
              ? CATEGORIES_META[currentCategory]?.title || "Portfolio Showcase"
              : currentView === "profile"
              ? "Career Profile & CV"
              : "Lead UI/UX Designer & AI Strategist"}
          </span>
        </a>

        <button
          className="mobile-burger-btn"
          id="mobile-burger-btn"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="site-archetypes-sidebar"
          onClick={onToggleMobileSidebar}
        >
          <span className="burger-bar burger-bar-top" aria-hidden="true"></span>
          <span className="burger-bar burger-bar-mid" aria-hidden="true"></span>
          <span className="burger-bar burger-bar-bot" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};
