export const breakpoints = {
  xl: 1200,
  lg: 1024,
  md: 900,
  sm: 768,
  xs: 767,
}

export const theme = {
  breakpoints: [breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl],

  colors: {
    black100: "#000",
    black80: "#333",
    black60: "#666",
    black30: "#C2C2C2",
    black10: "#E5E5E5",
    black5: "#F8F8F8",
    white: "#fff",

    // Soul Cedar
    green: "#6f9648",
    yellow: "#ebe262",

    purpleLight: "#deb6da",
    purpleDark: "#ce6fc4",

    teal: "#6faece",
  },

  typography: {
    fonts: {
      sans: {
        fontFamily: "Gothic A1",
        weights: {
          light: 300,
          regular: 400,
          semibold: 600,
          bold: 700,
          black: 900,
        },
      },
      serif: {
        fontFamily: "Playfair Display",
        weights: {
          regular: 400,
          bold: 700,
          black: 900,
        },
      },
    },
    sizes: {
      "0": {
        fontSize: 8,
        lineHeight: 8,
      },
      "1": {
        fontSize: 10,
        lineHeight: 14,
      },
      "2": {
        fontSize: 12,
        lineHeight: 16,
      },
      "3": {
        fontSize: 14,
        lineHeight: 24,
      },
      "4": {
        fontSize: 16,
        lineHeight: 26,
      },
      "5": {
        fontSize: 18,
        lineHeight: 30,
      },
      "6": {
        fontSize: 22,
        lineHeight: 35,
      },
      "7": {
        fontSize: 30,
        lineHeight: 35,
      },
      "8": {
        fontSize: 40,
        lineHeight: 45,
      },
    },
  },

  /**
   * See https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space
   * for all of the different proops this maps to.
   *
   * Each of the below values maps to pixels, and is base 10 for conciseness.
   */
  space: {
    "1": 10,
    "2": 20,
    "3": 30,
    "4": 40,
    "5": 50,
    "6": 60,
    "8": 80,
    "10": 100,
  },
}

// Helpers
export const color = colorKey => theme.colors[colorKey]
export const space = spaceKey => theme.space[spaceKey] + "px"
export const font = fontKey => theme.typography.fonts[fontKey].fontFamily
