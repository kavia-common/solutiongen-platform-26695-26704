import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressStepper from "../components/ProgressStepper";
import PageHeader from "../components/PageHeader";
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
      <div className="onb-container">
        <ProgressStepper currentStep={1} steps={steps} />

        <PageHeader
          title="Upload Documents & Configure"
          subtitle="Start by uploading your project documents and selecting your desired output type."
        />

        <UploadDropzone
          label="Upload Project Documents"
          supportedTypesText="PDF, Word, Text, Markdown, PowerPoint"
          onFilesSelected={() => {
            // Placeholder for future wiring.
          }}
        />

        <OutputTypeSelector
          value={outputType}
          options={outputOptions}
          onChange={setOutputType}
        />

        <section className="onb-section" aria-labelledby="configuration-title">
          <h2 id="configuration-title" className="onb-sectionTitle">
            Configuration
          </h2>

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

            <div className="onb-actions">
              <button type="button" className="onb-primaryBtn" onClick={onNext}>
                Continue to Gap Analysis
                <svg
                  className="onb-primaryBtnIcon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <p className="onb-muted onb-debugRow" aria-live="polite">
              Selection (stub): <strong>{outputType}</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
