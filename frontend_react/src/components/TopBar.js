import React from "react";

/**
 * Top bar page heading that matches the screenshot design:
 * yellow circular icon, "Demo on Demand" brand title, and "powered by AI" tagline.
 */
export default function TopBar() {
  return (
    <div className="topBar" role="banner" aria-label="Demo on Demand header">
      <div className="brand" aria-label="Demo on Demand header">
        <span className="brandIcon" aria-hidden="true">
          {/* Simple stylized glyph approximation (near-black) */}
          <svg
            width="9"
            height="9"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M6 3h3.5a3.5 3.5 0 0 1 0 7H6V3Z"
              fill="currentColor"
            />
            <path
              d="M6 3H5a1 1 0 0 0-1 1v8.2a.8.8 0 0 0 1.4.5L7 11h2.5"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </span>

        <span className="brandText">
          <span className="brandTitle">Demo on Demand</span>
          <span className="brandTagline">
            Documents, Decks and Demos - Powered by AI
          </span>
        </span>
      </div>
    </div>
  );
}
