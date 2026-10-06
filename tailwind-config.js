// Maps tokens from theme.css to Tailwind classes, e.g. bg-surface, text-muted, text-section, gap-10.
// Load AFTER the Tailwind CDN script.
tailwind.config = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg: "var(--color-bg)",
      fg: "var(--color-fg)",
      muted: "var(--color-fg-muted)",
      surface: "var(--color-surface)",
      line: "var(--color-border)",
    },
    spacing: {
      0: "0px",
      2: "var(--space-2)",
      3: "var(--space-3)",
      4: "var(--space-4)",
      6: "var(--space-6)",
      8: "var(--space-8)",
      10: "var(--space-10)",
      12: "var(--space-12)",
      16: "var(--space-16)",
      20: "var(--space-20)",
      24: "var(--space-24)",
      30: "var(--space-30)",
      45: "var(--space-45)",
    },
    fontFamily: { sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', "system-ui", "sans-serif"] },
    borderRadius: { none: "0", card: "var(--radius-card)" },
    // Text styles `Landing/*` from Figma: [size, { lineHeight, letterSpacing, fontWeight }]
    fontSize: {
      name: ["45.6px", { lineHeight: "60px", letterSpacing: "-1.44px", fontWeight: "600" }],
      subtitle: ["34.7px", { lineHeight: "47.5px", letterSpacing: "-1.14px", fontWeight: "400" }],
      lead: ["24px", { lineHeight: "39.6px", letterSpacing: "-0.24px", fontWeight: "400" }],
      statement: ["48px", { lineHeight: "57.6px", letterSpacing: "-1.92px", fontWeight: "500" }],
      section: ["32px", { lineHeight: "40px", letterSpacing: "-0.96px", fontWeight: "500" }],
      item: ["24px", { lineHeight: "28.8px", letterSpacing: "-0.48px", fontWeight: "500" }],
      body: ["16px", { lineHeight: "26.4px", letterSpacing: "-0.16px", fontWeight: "400" }],
      caption: ["18px", { lineHeight: "22.5px", letterSpacing: "0", fontWeight: "500" }],
    },
    extend: {
      maxWidth: { page: "var(--width-page)" },
      gridTemplateColumns: { page: "var(--width-label) minmax(0, var(--width-content))" },
    },
  },
};
