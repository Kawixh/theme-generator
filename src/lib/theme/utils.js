import {
  hexFromArgb,
  rgbaFromArgb,
} from "@material/material-color-utilities";

export const modifyTheme = (theme) => {
  const modifiedTheme = {
    rgb: {
      source: convertToRGB(theme.source),
      primaryPalette: generateTonalPallete(theme.palettes.primary),
      secondaryPalette: generateTonalPallete(theme.palettes.secondary),
      tertiaryPalette: generateTonalPallete(theme.palettes.tertiary),
      neutralPalette: generateTonalPallete(theme.palettes.neutral),
      neutralVariantPalette: generateTonalPallete(theme.palettes.neutralVariant),
      errorPalette: generateTonalPallete(theme.palettes.error),
      schemes: {
        light: convertToRGB(theme.schemes.light),
        dark: convertToRGB(theme.schemes.dark),
      },
    },
    hex: {
      source: convertToHex(theme.source),
      primaryPalette: generateTonalPallete(theme.palettes.primary, "hex"),
      secondaryPalette: generateTonalPallete(theme.palettes.secondary, "hex"),
      tertiaryPalette: generateTonalPallete(theme.palettes.tertiary, "hex"),
      neutralPalette: generateTonalPallete(theme.palettes.neutral, "hex"),
      neutralVariantPalette: generateTonalPallete(theme.palettes.neutralVariant, "hex"),
      errorPalette: generateTonalPallete(theme.palettes.error, "hex"),
      schemes: {
        light: convertToHex(theme.schemes.light),
        dark: convertToHex(theme.schemes.dark),
      },
    },
  };

  console.log(modifiedTheme);

  return modifiedTheme;
};

const generateTonalPallete = (color, typeOfColor = "rgb") => {
  const hash = {};
  for (let i = 0; i <= 100; i += 10) {
    hash[i] = convertColor(color, typeOfColor, i);
  }

  return hash;
};

const convertColor = (color, typeOfColor, tone) => {
    switch (typeOfColor) {
      case "rgb":
        return convertToRGB(color.tone(tone));
      case "hex":
        return convertToHex(color.tone(tone));
      default:
        return color.tone(tone);
    }
};

export const convertToHex = (color) => {
  if (typeof color === "string" || typeof color === "number") {
    return hexFromArgb(color);
  } else if (typeof color === "object" && !Array.isArray(color)) {
    const convertedColor = {};
    for (const key in color) {
      convertedColor[key] = convertToHex(color[key]);
    }
    return convertedColor;
  }
};

export const convertToRGB = (color) => {
  if (typeof color === "string" || typeof color === "number") {
    return rgbaFromArgb(color);
  } else if (typeof color === "object" && !Array.isArray(color)) {
    const convertedColor = {};
    for (const key in color) {
      convertedColor[key] = convertToRGB(color[key]);
    }
    return convertedColor;
  }
}
