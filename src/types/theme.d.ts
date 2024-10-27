import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  // interface PaletteColor {
  //   // lightHover?: string;
  //   // lightActive?: string;
  //   mainHover?: string;
  //   mainActive?: string;
  //   darkHover?: string;
  //   darkActive?: string;
  //   darker?: string;
  // }
  // interface SimplePaletteColorOptions {
  //   darker?: string;
  //   lightHover?: string;
  //   lightActive?: string;
  //   mainHover?: string;
  //   mainActive?: string;
  //   darkHover?: string;
  //   darkActive?: string;
  //   darker?: string;
  // }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    "2xl": true;
  }

  interface TypographyVariants {
    Roobert: React.CSSProperties;
    // h2_large: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    Roobert?: React.CSSProperties;
    // h2_large: React.CSSProperties;
    body3: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    Roobert: true;
    // h2_large: true;
    body3: true;
  }
}
