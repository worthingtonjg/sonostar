# Dome Calculator Copy Plan

## Goal
Recreate the Sonostar "Standard Dome Calculator" from:
`https://www.sonostarhub.com/pages/standard-dome-calculator`

The local version should match the original calculator's behavior closely enough that the same radius/diameter input produces the same strut-length and dome summary outputs for supported frequencies.

## Current State
- The repository root is currently empty.
- There is no existing app structure to extend.
- I inspected the public page text and confirmed:
  - It is the "Standard Dome Calculator" for `1/2"` hubs.
  - It supports frequencies `2V` through `6V`.
  - It accepts either radius or diameter.
  - It computes strut lengths plus internal height, circumference, and floor area.
  - It notes that `2.28 inches` has already been deducted from calculated PVC strut lengths to account for connector width.
- I have not yet recovered the source calculator logic or data table from the live site.

## Constraints
- The live page must be treated as the reference for behavior.
- Since the workspace is blank, I should build a small self-contained implementation unless you want a specific stack.
- To match the original accurately, I likely need one of these:
  1. The original page's raw HTML/JS
  2. The calculator's embedded data table or formulas
  3. A validated equivalent formula set that reproduces the same outputs

## Proposed Approach

### Phase 1: Reverse-engineer the original
- Fetch the raw HTML for the Sonostar calculator page.
- Identify whether the calculator is:
  - inline HTML + JavaScript,
  - loaded from an embedded script,
  - rendered from a third-party widget,
  - or represented as a static image backed by hidden form logic.
- Extract:
  - supported frequencies,
  - strut-type labels per frequency,
  - rounding rules,
  - radius/diameter conversion rules,
  - connector-width deduction handling,
  - summary formulas for height, circumference, and floor area.

### Phase 2: Build a local replica
- Create a minimal local app, likely:
  - `index.html`
  - `styles.css`
  - `app.js`
- Recreate the calculator UI with:
  - frequency selector,
  - radius/diameter selector,
  - numeric input,
  - calculate action,
  - results table,
  - summary metrics.
- Reproduce the original page copy where appropriate, while keeping implementation maintainable.

### Phase 3: Validate output parity
- Compare local outputs against the live calculator for a small matrix of inputs:
  - `2V`, `3V`, `4V`, `5V`, `6V`
  - one radius-based test input
  - one diameter-based test input
- Confirm:
  - strut lengths match,
  - counts match,
  - summary values match or differ only by expected rounding.

### Phase 4: Polish delivery
- Add a short README note if needed describing how to open/run the calculator locally.
- Keep the implementation dependency-free unless a framework is explicitly requested.

## Deliverables
- A working local calculator page in this repo.
- Source code for the UI and calculations.
- A brief verification summary documenting how closely it matches the live Sonostar calculator.

## Open Questions / Decisions
- Do you want an exact visual copy, or is functional equivalence enough?
- Do you want a plain static site, or should I scaffold a specific framework?
- If the live implementation cannot be extracted directly, I will reproduce it from verified formulas and matching output samples.

## Recommended Next Step
After you review this plan, I should proceed with Phase 1 first: fetch and inspect the live page source so the implementation is based on the original calculator logic rather than approximation.
