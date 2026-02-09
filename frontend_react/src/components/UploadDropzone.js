import React, { useId, useMemo, useRef, useState } from "react";

/**
 * Upload dropzone UI. Handles drag hover state and opens file picker on click.
 * Keeps file handling as stubbed placeholder callbacks (no backend integration).
 */
export default function UploadDropzone({
  label,
  supportedTypesText,
  onFilesSelected,
}) {
  const inputId = useId();
  const inputRef = useRef(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const accept = useMemo(
    () =>
      [
        ".pdf",
        ".doc",
        ".docx",
        ".txt",
        ".md",
        ".ppt",
        ".pptx",
        "application/pdf",
        "text/plain",
        "text/markdown",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ].join(","),
    []
  );

  function openPicker() {
    inputRef.current?.click();
  }

  function handleFiles(files) {
    const list = Array.from(files || []);
    // Placeholder hook: future integration can validate types and upload.
    onFilesSelected?.(list);
    // For now, keep it visible in dev tools only.
    // eslint-disable-next-line no-console
    console.log("Selected files (stub):", list);
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer?.files?.length) {
      handleFiles(e.dataTransfer.files);
    }
  }

  function onDragOver(e) {
    e.preventDefault();
    setIsDragActive(true);
  }

  function onDragLeave() {
    setIsDragActive(false);
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPicker();
    }
  }

  return (
    <section className="onb-section" aria-labelledby={`${inputId}-label`}>
      <h2 id={`${inputId}-label`} className="onb-sectionTitle">
        {label}
      </h2>

      <div
        className={`dropzone ${isDragActive ? "dropzone--active" : ""}`}
        role="button"
        tabIndex={0}
        onClick={openPicker}
        onKeyDown={onKeyDown}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        aria-describedby={`${inputId}-hint`}
      >
        <div>
          <svg
            className="dropzoneIcon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 16V4m0 0l-4 4m4-4l4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16.5v1A2.5 2.5 0 0 0 6.5 20h11A2.5 2.5 0 0 0 20 17.5v-1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          <div className="dropzonePrimary">Drop files here or click to browse</div>
          <div id={`${inputId}-hint`} className="dropzoneSecondary">
            {supportedTypesText}
          </div>
        </div>

        <input
          id={inputId}
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          style={{ display: "none" }}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    </section>
  );
}
