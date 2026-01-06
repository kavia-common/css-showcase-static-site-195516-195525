import React from "react";
import { Section } from "../components/Layout";

// PUBLIC_INTERFACE
export default function LandingSection({ onPrimaryCta }) {
  /** Landing hero section with product-style headline and CTA. */
  return (
    <Section id="landing">
      <div className="hero">
        <div className="heroContent">
          <div className="heroBadge">
            <span className="badge badgeAccent">Static</span>
            <span className="badge badgeSoft">React + CSS</span>
          </div>

          <h1 className="heroTitle">
            A clean <span className="textPrimary">light theme</span> showcase for{" "}
            <span className="textAccent">modern UI</span> building blocks.
          </h1>

          <p className="heroSubtitle">
            Explore form patterns, button styles, cards, badges, alerts, gradients, and layout grids —
            all implemented with simple, reusable CSS classes.
          </p>

          <div className="heroCtas">
            <button type="button" className="btn btnPrimary btnLarge" onClick={onPrimaryCta}>
              Start onboarding
            </button>
            <a className="btn btnGhost btnLarge" href="#showcase">
              View components
            </a>
          </div>

          <div className="heroStats" aria-label="Highlights">
            <div className="statCard">
              <div className="statValue">#3b82f6</div>
              <div className="statLabel">Primary</div>
            </div>
            <div className="statCard">
              <div className="statValue">#06b6d4</div>
              <div className="statLabel">Accent</div>
            </div>
            <div className="statCard">
              <div className="statValue">Responsive</div>
              <div className="statLabel">Mobile-first</div>
            </div>
          </div>
        </div>

        <div className="heroPanel" aria-hidden="true">
          <div className="panelCard">
            <div className="panelHeader">
              <div className="panelDot dotRed" />
              <div className="panelDot dotYellow" />
              <div className="panelDot dotGreen" />
              <div className="panelTitle">Preview</div>
            </div>

            <div className="panelBody">
              <div className="demoRow">
                <div className="skeleton skeletonTitle" />
              </div>
              <div className="demoRow">
                <div className="skeleton skeletonLine" />
                <div className="skeleton skeletonLine short" />
              </div>

              <div className="demoRow">
                <div className="pill pillPrimary">Button</div>
                <div className="pill pillAccent">Badge</div>
                <div className="pill pillNeutral">Input</div>
              </div>

              <div className="gradientCard">
                <div className="gradientCardInner">
                  <div className="gradientTitle">Gradient surface</div>
                  <div className="gradientText">Primary → subtle gray</div>
                </div>
              </div>

              <div className="demoRow">
                <div className="miniGrid">
                  <div className="miniTile" />
                  <div className="miniTile" />
                  <div className="miniTile" />
                  <div className="miniTile" />
                  <div className="miniTile" />
                  <div className="miniTile" />
                </div>
              </div>
            </div>
          </div>

          <div className="panelGlow" />
        </div>
      </div>
    </Section>
  );
}
