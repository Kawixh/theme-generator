import { themeFromImage } from "@material/material-color-utilities";

export const generateDynamicTheme = async (imgSource) => {
  const img = new Image();
  img.src = imgSource;
  img.crossOrigin = "Anonymous";
  const theme = await themeFromImage(img);
  return theme;
};
