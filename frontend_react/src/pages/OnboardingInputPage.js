import React, { useMemo, useState } from "react";
import ProgressStepper from "../components/ProgressStepper";
import PageHeader from "../components/PageHeader";
import UploadDropzone from "../components/UploadDropzone";
import OutputTypeSelector from "../components/OutputTypeSelector";
import "../styles/onboarding.css";

export default function OnboardingInputPage() {
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

  return (
    <div className="onb-page">
      <div className="onb-container">
        <ProgressStepper currentStep={1} steps={steps} />

        <PageHeader
          title="Upload Documents & Configure"
          subtitle="Start by uploading your project documents and selecting output types"
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

        <div className="onb-section">
          <p className="onb-muted">
            Selection (stub): <strong>{outputType}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
