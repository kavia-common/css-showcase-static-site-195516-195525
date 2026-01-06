import React, { useMemo, useState } from "react";
import { Section } from "../components/Layout";

function validateEmail(value) {
  if (!value.trim()) return "Email is required.";
  // Simple, pragmatic validation for demo purposes.
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  return isValid ? "" : "Enter a valid email address.";
}

function validateRequired(label, value) {
  return value.trim() ? "" : `${label} is required.`;
}

// PUBLIC_INTERFACE
export default function OnboardingSection() {
  /** Multi-field onboarding form with local state and validation visuals. */
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    role: "designer",
    teamSize: "1-5",
    updates: true
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false
  });

  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    return {
      fullName: validateRequired("Full name", fields.fullName),
      email: validateEmail(fields.email)
    };
  }, [fields.email, fields.fullName]);

  const isFormValid = !errors.fullName && !errors.email;

  function setField(name, value) {
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function markTouched(name) {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTouched({ fullName: true, email: true });

    // Static app: no backend; just show validation + success panel.
  }

  const showSuccess = submitted && isFormValid;

  return (
    <Section
      id="onboarding"
      title="Onboarding"
      subtitle="A simple, validated form with controlled inputs and clear feedback states."
    >
      <div className="twoCol">
        <div className="card">
          <div className="cardHeader">
            <h3 className="cardTitle">Tell us about you</h3>
            <p className="cardSubtitle">No backend — this is a local-state demo.</p>
          </div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="formRow">
              <label className="label" htmlFor="fullName">
                Full name
              </label>
              <input
                id="fullName"
                className={`input ${touched.fullName && errors.fullName ? "isError" : ""} ${
                  touched.fullName && !errors.fullName ? "isValid" : ""
                }`}
                value={fields.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                onBlur={() => markTouched("fullName")}
                placeholder="e.g., Alex Morgan"
                autoComplete="name"
              />
              {touched.fullName && errors.fullName && (
                <div className="fieldHelp errorText" role="alert">
                  {errors.fullName}
                </div>
              )}
              {touched.fullName && !errors.fullName && (
                <div className="fieldHelp successText">Looks good.</div>
              )}
            </div>

            <div className="formRow">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className={`input ${touched.email && errors.email ? "isError" : ""} ${
                  touched.email && !errors.email ? "isValid" : ""
                }`}
                value={fields.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => markTouched("email")}
                placeholder="you@company.com"
                autoComplete="email"
                inputMode="email"
              />
              {touched.email && errors.email && (
                <div className="fieldHelp errorText" role="alert">
                  {errors.email}
                </div>
              )}
              {touched.email && !errors.email && (
                <div className="fieldHelp successText">Great — we can reach you.</div>
              )}
            </div>

            <div className="formGrid">
              <div className="formRow">
                <label className="label" htmlFor="role">
                  Role
                </label>
                <select
                  id="role"
                  className="input"
                  value={fields.role}
                  onChange={(e) => setField("role", e.target.value)}
                >
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="product">Product</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="formRow">
                <label className="label" htmlFor="teamSize">
                  Team size
                </label>
                <select
                  id="teamSize"
                  className="input"
                  value={fields.teamSize}
                  onChange={(e) => setField("teamSize", e.target.value)}
                >
                  <option value="1-5">1–5</option>
                  <option value="6-25">6–25</option>
                  <option value="26-100">26–100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
            </div>

            <div className="formRow checkboxRow">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={fields.updates}
                  onChange={(e) => setField("updates", e.target.checked)}
                />
                <span>Send me occasional updates</span>
              </label>
            </div>

            <div className="formActions">
              <button type="submit" className="btn btnPrimary">
                Submit
              </button>
              <button
                type="button"
                className="btn btnSecondary"
                onClick={() => {
                  setFields({
                    fullName: "",
                    email: "",
                    role: "designer",
                    teamSize: "1-5",
                    updates: true
                  });
                  setTouched({ fullName: false, email: false });
                  setSubmitted(false);
                }}
              >
                Reset
              </button>
            </div>

            {!showSuccess && submitted && !isFormValid && (
              <div className="alert alertError" role="alert">
                <div className="alertTitle">Fix the highlighted fields</div>
                <div className="alertText">Once valid, you’ll see a success confirmation panel.</div>
              </div>
            )}

            {showSuccess && (
              <div className="alert alertSuccess" role="status">
                <div className="alertTitle">Onboarding complete</div>
                <div className="alertText">
                  Welcome, <strong>{fields.fullName.trim()}</strong>. Your preferences are saved locally
                  for this demo session.
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="card cardSoft">
          <div className="cardHeader">
            <h3 className="cardTitle">Validation states</h3>
            <p className="cardSubtitle">These styles are reused in the component showcase.</p>
          </div>

          <div className="stack">
            <div className="miniField">
              <div className="miniLabel">Default</div>
              <input className="input" placeholder="Neutral input" readOnly value="" />
            </div>

            <div className="miniField">
              <div className="miniLabel">Valid</div>
              <input className="input isValid" placeholder="Valid state" readOnly value="Looks good" />
              <div className="fieldHelp successText">Success helper text</div>
            </div>

            <div className="miniField">
              <div className="miniLabel">Error</div>
              <input className="input isError" placeholder="Error state" readOnly value="Wrong value" />
              <div className="fieldHelp errorText">Error helper text</div>
            </div>

            <div className="miniField">
              <div className="miniLabel">Alert</div>
              <div className="alert alertInfo">
                <div className="alertTitle">Info alert</div>
                <div className="alertText">Use alerts to explain important UI states.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
