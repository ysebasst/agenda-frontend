import { fonts } from "config";

export const rem = (px) => {
  return `${px / fonts.FONT_SIZE_DEFAULT}rem`;
};
