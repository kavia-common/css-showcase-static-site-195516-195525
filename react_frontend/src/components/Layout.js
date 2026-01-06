import React from "react";

/**
 * Small layout primitives used across the one-page site.
 */

// PUBLIC_INTERFACE
export function Container({ children }) {
  /** Constrains content width and provides horizontal padding. */
  return <div className="container">{children}</div>;
}

// PUBLIC_INTERFACE
export function Section({ id, title, subtitle, children }) {
  /**
   * Renders a page section with consistent spacing and optional heading.
   * @param {string} id - DOM id for anchor/smooth scroll.
   */
  return (
    <section id={id} className="section" aria-labelledby={title ? `${id}-title` : undefined}>
      <Container>
        {(title || subtitle) && (
          <header className="sectionHeader">
            {title && (
              <h2 id={`${id}-title`} className="sectionTitle">
                {title}
              </h2>
            )}
            {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

// PUBLIC_INTERFACE
export function HeaderNav({ activeSectionId, onNavigate }) {
  /**
   * Sticky header navigation with active section highlighting.
   * @param {string} activeSectionId - Current active section id.
   * @param {(sectionId: string) => void} onNavigate - Called when a nav link is activated.
   */
  const navItems = [
    { id: "landing", label: "Landing" },
    { id: "onboarding", label: "Onboarding" },
    { id: "showcase", label: "Showcase" }
  ];

  return (
    <header className="siteHeader">
      <Container>
        <div className="siteHeaderInner">
          <div className="brand">
            <div className="brandMark" aria-hidden="true" />
            <div className="brandText">
              <div className="brandTitle">CSS Showcase</div>
              <div className="brandTagline">Modern light theme • Vanilla CSS</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = item.id === activeSectionId;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`navLink ${isActive ? "isActive" : ""}`}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
