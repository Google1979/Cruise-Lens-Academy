import { cn } from "@/lib/utils";

/**
 * Font optimization utilities for consistent cross-platform rendering
 */
export const fontOptimization = {
  // Base font classes that ensure consistent rendering
  base: "font-sans",
  
  // Anti-aliasing classes for better text rendering
  smooth: "antialiased font-feature-settings-[kern] font-variant-ligatures-[common-ligatures]",
  
  // Heading optimization - better for titles and headers
  heading: "font-sans antialiased tracking-tight font-feature-settings-[kern,liga,calt]",
  
  // Body text optimization - better for paragraphs and content
  body: "font-sans antialiased leading-relaxed font-feature-settings-[kern,liga]",
  
  // Monospace optimization - better for code
  mono: "font-mono antialiased font-feature-settings-[kern]",
  
  // Mobile-specific optimizations
  mobile: "text-size-adjust-100 -webkit-text-size-adjust-100",
  
  // High DPI display optimizations
  retina: "subpixel-antialiased",
};

/**
 * Cross-platform font weight mapping to ensure consistency
 */
export const fontWeights = {
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
} as const;

/**
 * Helper function to combine font optimization classes
 */
export function optimizeFont(...classes: string[]) {
  return cn(
    fontOptimization.base,
    fontOptimization.smooth,
    fontOptimization.mobile,
    ...classes
  );
}

/**
 * Optimized text component classes
 */
export const textClasses = {
  h1: optimizeFont(fontOptimization.heading, "text-4xl md:text-6xl font-normal"),
  h2: optimizeFont(fontOptimization.heading, "text-3xl md:text-5xl font-normal"),
  h3: optimizeFont(fontOptimization.heading, "text-2xl md:text-4xl font-normal"),
  h4: optimizeFont(fontOptimization.heading, "text-xl md:text-3xl font-normal"),
  h5: optimizeFont(fontOptimization.heading, "text-lg md:text-2xl font-normal"),
  h6: optimizeFont(fontOptimization.heading, "text-base md:text-xl font-normal"),
  body: optimizeFont(fontOptimization.body, "text-base"),
  bodyLarge: optimizeFont(fontOptimization.body, "text-lg"),
  bodySmall: optimizeFont(fontOptimization.body, "text-sm"),
  caption: optimizeFont(fontOptimization.body, "text-xs"),
  code: optimizeFont(fontOptimization.mono, "text-sm"),
} as const;
