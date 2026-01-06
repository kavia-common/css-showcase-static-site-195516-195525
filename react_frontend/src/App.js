import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { HeaderNav } from "./components/Layout";
import LandingSection from "./pages/LandingSection";
import OnboardingSection from "./pages/OnboardingSection";
import ShowcaseSection from "./pages/ShowcaseSection";

function getReducedMotionPreference() {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// PUBLIC_INTERFACE
function App() {
  /**
   * Single-page CSS showcase app:
   * - Sticky nav with active highlighting
   * - Smooth scroll to sections
   * - Local-only state and validation (no backend)
   */
  const sectionIds = useMemo(() => ["landing", "onboarding", "showcase"], []);
  const sectionRefs = useRef({});

  const [activeSectionId, setActiveSectionId] = useState("landing");

  useEffect(() => {
    const prefersReducedMotion = getReducedMotionPreference();

    const elements = sectionIds
      .map((id) => sectionRefs.current[id])
      .filter(Boolean);

    if (elements.length === 0) return;

    // Observe which section is most visible to highlight in nav.
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the visible entry with highest intersection ratio.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSectionId(visible.target.id);
      },
      {
        root: null,
        // Trigger a bit before/after center for stable highlighting.
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65]
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Ensure smooth scrolling is applied (CSS handles it, but honor reduced motion).
    if (prefersReducedMotion) {
      document.documentElement.classList.add("reduceMotion");
    } else {
      document.documentElement.classList.remove("reduceMotion");
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  // PUBLIC_INTERFACE
  const scrollToSection = (id) => {
    /** Smooth-scroll to a section by id while accounting for sticky header offset. */
    const el = sectionRefs.current[id];
    if (!el) return;

    // Use native scrolling behavior; no getElementById (ref-based).
    el.scrollIntoView({ behavior: getReducedMotionPreference() ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="appRoot">
      <HeaderNav activeSectionId={activeSectionId} onNavigate={scrollToSection} />

      {/* A spacer helps avoid content jump under sticky header on load */}
      <div className="headerSpacer" aria-hidden="true" />

      <main className="main">
        <div ref={(node) => (sectionRefs.current.landing = node)}>
          <LandingSection onPrimaryCta={() => scrollToSection("onboarding")} />
        </div>

        <div ref={(node) => (sectionRefs.current.onboarding = node)}>
          <OnboardingSection />
        </div>

        <div ref={(node) => (sectionRefs.current.showcase = node)}>
          <ShowcaseSection />
        </div>

        <footer className="footer">
          <div className="container footerInner">
            <div className="muted">
              Static CSS Showcase • No backend • Built with React and plain CSS.
            </div>
            <button type="button" className="btn btnGhost btnSmall" onClick={() => scrollToSection("landing")}>
              Back to top
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
