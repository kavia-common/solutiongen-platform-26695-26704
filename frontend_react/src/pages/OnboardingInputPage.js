import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressStepper from "../components/ProgressStepper";
import PageHeader from "../components/PageHeader";
import TopBar from "../components/TopBar";
import UploadDropzone from "../components/UploadDropzone";
import OutputTypeSelector from "../components/OutputTypeSelector";
import "../styles/onboarding.css";

export default function OnboardingInputPage() {
  const navigate = useNavigate();

  const steps = useMemo(
    () => ["Input", "Gap Analysis", "Review", "Generation", "Output"],
    []
  );

  const outputOptions = useMemo(
    () => [
      {
        value: "document",
        label: "Document",
        description: "Technical docs, reports, summaries",
      },
      {
        value: "presentation",
        label: "Presentation",
        description: "Slide decks, pitch materials",
      },
      {
        value: "interactive_demo",
        label: "Interactive Demo",
        description: "Live prototype, walkthrough",
      },
    ],
    []
  );

  const [outputType, setOutputType] = useState("document");
  const [companyName, setCompanyName] = useState("");
  const [targetAudience, setTargetAudience] = useState("");

  function onNext() {
    // Keep this forward-compatible with future routing.
    // Navigate to the gap analysis step if/when that route exists.
    try {
      navigate("/gap-analysis");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Next (placeholder). State:", {
        outputType,
        companyName,
        targetAudience,
      });
    }
  }

  return (
    <div className="onb-page">
      <TopBar />

      <div className="onb-container">
        <ProgressStepper currentStep={1} steps={steps} />

        <PageHeader
          title="Upload Documents & Configure"
          subtitle="Start by uploading your project documents and selecting your desired output type."
        />

        {/* Upload card */}
        <section className="onb-section" aria-label="Upload Project Documents">
          <div className="onb-card">
            <div className="onb-cardHeader">
              <span className="onb-cardHeaderIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                  <path
                    d="M12 16V4m0 0l-4 4m4-4l4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 16.5v1A2.5 2.5 0 0 0 6.5 20h11A2.5 2.5 0 0 0 20 17.5v-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="onb-cardHeaderTitle">Upload Project Documents</div>
            </div>

            <div className="onb-cardBody">
              <UploadDropzone
                label="Upload Project Documents"
                supportedTypesText="Supports PDF, DOCX, TXT"
                onFilesSelected={() => {
                  // Placeholder for future wiring.
                }}
              />
            </div>
          </div>
        </section>

        {/* Output type card */}
        <section className="onb-section" aria-label="Choose Output Type">
          <div className="onb-card">
            <div className="onb-cardHeader">
              <span className="onb-cardHeaderIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="onb-cardHeaderTitle">Choose Output Type</div>
            </div>

            <div className="onb-cardBody">
              <OutputTypeSelector
                value={outputType}
                options={outputOptions}
                onChange={setOutputType}
              />
            </div>
          </div>
        </section>

        {/* Configuration card */}
        <section className="onb-section" aria-labelledby="configuration-title">
          <div className="onb-card">
            <div className="onb-cardHeader">
              <span className="onb-cardHeaderIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                  <path
                    d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <h2 id="configuration-title" className="onb-cardHeaderTitle">
                Configuration
              </h2>
            </div>

            <div className="onb-cardBody">
              <div className="onb-form">
                <label className="onb-field">
                  <span className="onb-label">Company Name</span>
                  <input
                    className="onb-input"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter your company name"
                    autoComplete="organization"
                  />
                </label>

                <label className="onb-field">
                  <span className="onb-label">Target Audience</span>
                  <input
                    className="onb-input"
                    type="text"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="Enter company target audience"
                  />
                </label>

                <p className="onb-muted onb-debugRow" aria-live="polite">
                  Selection (stub): <strong>{outputType}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA - placed below all sections (outside Configuration card) */}
        <div className="onb-actions onb-actionsStandalone">
          <button type="button" className="onb-primaryBtn" onClick={onNext}>
            Continue to Gap Analysis
            <svg
              className="onb-primaryBtnIcon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 8l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
