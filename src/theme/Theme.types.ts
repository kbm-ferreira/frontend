import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    screen: {
      tablet: string;
      desktop: string;
      desktopLarge: string;
    };

    color: {
      transparent: string;
      white: string;
      black: {
        0: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      primary: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      secondary: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
    };

    font: (
      fontSize: number,
      lineHeight?: number,
      fontWeigth?: number,
      textTransform?: string
    ) => string;

    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    spacing: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
