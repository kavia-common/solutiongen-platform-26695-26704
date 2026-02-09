import React, { useId } from "react";

/**
 * Output type selector presented as 3 selectable tiles.
 * Uses radiogroup semantics and supports keyboard selection.
 */
export default function OutputTypeSelector({ value, options, onChange }) {
  const groupId = useId();

  function select(nextValue) {
    onChange?.(nextValue);
  }

  function onKeyDown(e, nextValue) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(nextValue);
    }
  }

  return (
    <div
      className="outputGrid"
      role="radiogroup"
      aria-label="Output type"
      aria-labelledby={`${groupId}-label`}
    >
      {/* Hidden label to keep semantics without altering visual layout */}
      <span
        id={`${groupId}-label`}
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Choose Output Type
      </span>

      {options.map((opt) => {
        const selected = value === opt.value;

        return (
          <div
            key={opt.value}
            className={`outputTile ${selected ? "outputTile--selected" : ""}`}
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => select(opt.value)}
            onKeyDown={(e) => onKeyDown(e, opt.value)}
          >
            <span className="outputTileIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none">
                <path
                  d="M8 7h8M8 11h8M8 15h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            {selected ? (
              <svg
                className="outputTileCheck"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}

            <div className="outputTileTitle">{opt.label}</div>
            <div className="outputTileDesc">{opt.description}</div>
          </div>
        );
      })}
    </div>
  );
}
