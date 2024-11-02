/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectAngleDown from "@/common/icons/custom/SelectAngleDown";
import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

export const defaultTheme = customizeTheme();

export const lightTheme = responsiveFontSizes(
  customizeTheme({
    palette: {
      primary: {
        main: "#0A3347",
      },
      secondary: {
        main: "#E2B682",
        contrastText: "#fff",
      },
      success: {
        main: "#E2B682",
      },
      error: {
        main: "#d32f2f",
      },
    },
    // shadows: [] as any,
  })
);
export const darkTheme = responsiveFontSizes(
  customizeTheme({ palette: { mode: "dark" } })
);

export function customizeTheme(theme?: ThemeOptions) {
  return createTheme({
    ...theme,
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: [
        "'Inter'",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
      ].join(),
      // fontSize: 12,
      // fontWeightRegular: 500,
      // fontWeightBold: 600,
      Roobert: {
        fontFamily: [
          "'Roobert TWHINT'",
          "sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
        ].join(","),
      },
      button: {
        textTransform: "none",
      },
      h1: {
        fontSize: "32px",
        lineHeight: 1.5,
      },
      h2: {
        fontSize: "24px",
        lineHeight: 1.5,
      },
      body3: {
        fontSize: "12px",
      },
    },
    components: {
      MuiIcon: {
        defaultProps: {
          baseClassName: "material-symbols-outlined",
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: "contained",
        },
        styleOverrides: {
          root: ({}) => ({
            height: "42px",
            minWidth: "120px",
          }),
        },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              borderRadius: 8,
              ":hover": {
                background: "#007EC5",
                color: "#FFFFFF",
              },
              ":active": {
                background: "#0070AF",
                color: "#FFFFFF ",
              },
            },
          },
        ],
      },
      // MuiTypography: {
      //   defaultProps: {
      //     variantMapping: {
      //       h2_large: "h2",
      //     },
      //   },
      // },

      MuiInput: {
        defaultProps: {},
      },
      MuiInputLabel: {
        defaultProps: {
          shrink: true,
        },
        styleOverrides: {
          root: ({}) => ({
            // position: "static",
            // transform: "none",
            fontWeight: "600",
            textTransform: "capitalize",
            fontSize: "20px",
            color: "#8C8E9A",
            fontFamily: "Roobert TWHINT",
          }),
        },
      },
      MuiOutlinedInput: {
        defaultProps: { notched: false },
        styleOverrides: {
          root: ({}) => ({
            height: "49px",
            marginTop: "8px",
            "& .MuiOutlinedInput-notchedOutline": {
              "border-color": "rgba(0,0,0,0.1)",
            },
          }),
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "filled",
        },
        variants: [],
      },
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: true,
        },
        styleOverrides: {
          root: ({}) => ({
            borderRadius: "6px",
          }),
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.disabled && { background: "#EDEEEF !important" }),
          }),
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: SelectAngleDown,
        },
        styleOverrides: {
          root: {
            "& .MuiSelect-iconOpen": {
              transform: "rotate(-90deg)",
            },
          },
        },
      },
    },
  });
}

// NonForwardedProps.set('Button', ['rounded']);
