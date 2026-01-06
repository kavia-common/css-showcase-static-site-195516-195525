import React from "react";
import { Section } from "../components/Layout";

function DemoCard({ title, description, children }) {
  return (
    <div className="demoCard">
      <div className="demoCardHeader">
        <h3 className="demoCardTitle">{title}</h3>
        {description && <p className="demoCardSubtitle">{description}</p>}
      </div>
      <div className="demoCardBody">{children}</div>
    </div>
  );
}

// PUBLIC_INTERFACE
export default function ShowcaseSection() {
  /** A grid-based showcase of reusable UI primitives and CSS patterns. */
  return (
    <Section
      id="showcase"
      title="Showcase"
      subtitle="Reusable CSS building blocks: buttons, inputs, cards, badges, alerts, gradients, and grids."
    >
      <div className="showcaseGrid">
        <DemoCard title="Buttons" description="Primary, secondary, ghost, and disabled states.">
          <div className="demoRowWrap">
            <button type="button" className="btn btnPrimary">
              Primary
            </button>
            <button type="button" className="btn btnSecondary">
              Secondary
            </button>
            <button type="button" className="btn btnGhost">
              Ghost
            </button>
            <button type="button" className="btn btnPrimary" disabled>
              Disabled
            </button>
          </div>
          <div className="demoRowWrap">
            <button type="button" className="btn btnPrimary btnSmall">
              Small
            </button>
            <button type="button" className="btn btnPrimary">
              Default
            </button>
            <button type="button" className="btn btnPrimary btnLarge">
              Large
            </button>
          </div>
        </DemoCard>

        <DemoCard title="Inputs" description="Focus ring, placeholder styling, and validation variants.">
          <div className="stack">
            <label className="label">
              Default
              <input className="input" placeholder="Type something..." />
            </label>
            <label className="label">
              Valid
              <input className="input isValid" defaultValue="Valid value" />
            </label>
            <label className="label">
              Error
              <input className="input isError" defaultValue="Bad value" />
            </label>
          </div>
        </DemoCard>

        <DemoCard title="Badges" description="Accent, primary, neutral, and outlined styles.">
          <div className="demoRowWrap">
            <span className="badge badgePrimary">Primary</span>
            <span className="badge badgeAccent">Accent</span>
            <span className="badge badgeSoft">Soft</span>
            <span className="badge badgeOutline">Outline</span>
          </div>
          <div className="demoRowWrap">
            <span className="badge badgeNeutral">Neutral</span>
            <span className="badge badgeSuccess">Success</span>
            <span className="badge badgeError">Error</span>
          </div>
        </DemoCard>

        <DemoCard title="Alerts" description="Info, success, and error patterns with titles and text.">
          <div className="stack">
            <div className="alert alertInfo">
              <div className="alertTitle">Info alert</div>
              <div className="alertText">Use this to provide contextual guidance.</div>
            </div>
            <div className="alert alertSuccess">
              <div className="alertTitle">Success alert</div>
              <div className="alertText">Helpful when an action completes correctly.</div>
            </div>
            <div className="alert alertError">
              <div className="alertTitle">Error alert</div>
              <div className="alertText">Clear, direct messaging about what to fix.</div>
            </div>
          </div>
        </DemoCard>

        <DemoCard title="Cards" description="Surface, border, shadow, and content hierarchy.">
          <div className="cardsRow">
            <div className="card miniCard">
              <div className="cardHeader">
                <div className="cardTitle">Surface card</div>
                <div className="cardSubtitle">Default elevation</div>
              </div>
              <div className="cardBody">
                <p className="muted">
                  Use cards to group content and create visual hierarchy on a light background.
                </p>
              </div>
              <div className="cardFooter">
                <button type="button" className="btn btnPrimary btnSmall">
                  Action
                </button>
              </div>
            </div>

            <div className="card miniCard cardOutline">
              <div className="cardHeader">
                <div className="cardTitle">Outlined card</div>
                <div className="cardSubtitle">Subtle border</div>
              </div>
              <div className="cardBody">
                <p className="muted">A calmer variant for dense grids and settings screens.</p>
              </div>
              <div className="cardFooter">
                <button type="button" className="btn btnGhost btnSmall">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </DemoCard>

        <DemoCard title="Gradients" description="Primary-to-neutral gradient surface + subtle border.">
          <div className="gradientShowcase">
            <div className="gradientSurface">
              <div className="gradientSurfaceInner">
                <div className="gradientTitle">Gradient surface</div>
                <div className="gradientMeta">
                  <span className="badge badgeOutline">from #3b82f6 / 10%</span>
                  <span className="badge badgeOutline">to #f9fafb</span>
                </div>
                <p className="muted">
                  Great for hero panels, highlighted callouts, and backgrounds that need a hint of brand.
                </p>
              </div>
            </div>
          </div>
        </DemoCard>

        <DemoCard title="Layout grid" description="Responsive grid tiles (1 → 2 → 3 columns).">
          <div className="layoutGrid">
            <div className="tile">
              <div className="tileTitle">Tile A</div>
              <div className="tileText">Use CSS grid for predictable layouts.</div>
            </div>
            <div className="tile">
              <div className="tileTitle">Tile B</div>
              <div className="tileText">Automatically adapts to screen width.</div>
            </div>
            <div className="tile">
              <div className="tileTitle">Tile C</div>
              <div className="tileText">Keep spacing consistent with tokens.</div>
            </div>
            <div className="tile">
              <div className="tileTitle">Tile D</div>
              <div className="tileText">Cards + tiles look great together.</div>
            </div>
            <div className="tile">
              <div className="tileTitle">Tile E</div>
              <div className="tileText">Light background, subtle shadows.</div>
            </div>
            <div className="tile">
              <div className="tileTitle">Tile F</div>
              <div className="tileText">Always accessible contrast.</div>
            </div>
          </div>
        </DemoCard>
      </div>
    </Section>
  );
}
