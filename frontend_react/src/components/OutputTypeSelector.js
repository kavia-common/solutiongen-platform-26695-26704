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
    <section className="onb-section" aria-labelledby={`${groupId}-label`}>
      <h2 id={`${groupId}-label`} className="onb-sectionTitle">
        Choose Output Type
      </h2>

      <div className="outputGrid" role="radiogroup" aria-label="Output type">
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
    </section>
  );
}
