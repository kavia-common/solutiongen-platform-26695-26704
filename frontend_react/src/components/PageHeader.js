import React from "react";

/**
 * Simple page header (title + subtitle) for onboarding pages.
 */
export default function PageHeader({ title, subtitle }) {
  return (
    <header className="onb-header">
      <h1 className="onb-title">{title}</h1>
      <p className="onb-subtitle">{subtitle}</p>
    </header>
  );
}
