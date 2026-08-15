# Prabu Ata Esawina Portfolio — Production Ready Changelog

## Final visual/layout audit fixes — 2026-08-15

### Fixed
- Moved the hero marquee inside the main `.container` so its borders and content align with the portfolio content boundary.
- Restored a full-viewport hero composition with `min-height: 100svh`.
- Replaced the invalid hero `clamp(100px, 5vh, 80px)` declaration with intentional responsive top/bottom spacing. The larger top spacing gives the main name/logogram composition more breathing room below the header.
- Added an explicit stacking layer for hero content so the logogram remains decorative behind the main content.
- Removed the `aspect-ratio: 16 / 10` override from general case-study gallery images to avoid unnecessary cropping/layout forcing compared with the reference implementation.
- Added a dedicated `.photography-showcase` component with `height: auto` so the photography/videography image preserves its native 1600×932 aspect ratio and cannot be vertically distorted by the showcase component.
- Removed inline styling from the photography/videography image and moved presentation rules into CSS.

### Preserved
- Existing production assets.
- Existing typography and WCAG-safe dark-background text token.
- Existing hero logogram horizontal alignment to the content container.
- Existing responsive navigation, lightbox, reveal, tabs, and reduced-motion behavior.

## Accessibility note
The primary light text, body text, lime accent, and dark-background muted text tokens remain within WCAG AA contrast requirements. The production dark-background muted token is `--c-gray-600-onblack`.
