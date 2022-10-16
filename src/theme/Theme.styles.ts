import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  screen: {
    tablet: "640px",
    desktop: "1024px",
    desktopLarge: "1280px",
  },

  color: {
    transparent: "transparent",
    white: "#ffffff",
    black: {
      0: "#000000",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#171923",
    },
    primary: {
      100: "#E1FFB1",
      200: "#C7F2A4",
      300: "#B6E388",
      400: "#FCFFB2",
    },
    secondary: {
      100: "#EDE4E0",
      200: "#C8DBBE",
      300: "#9F8772",
      400: "#665A48",
    },
  },

  borderRadius: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
  },

  font: (
    fontSize: number,
    lineHeight?: number,
    fontWeigth?: number,
    textTransform?: string
  ) =>
    `font-size: ${fontSize}px; line-height: ${lineHeight}px; font-weight: ${fontWeigth}; text-transform: ${textTransform};`,
};
