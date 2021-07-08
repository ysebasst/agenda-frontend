import React from "react";

import { StyledButton } from "./Button.styles";

export const Button = (props) => {
  return (
    <StyledButton
      type="button"
      secondary="false"
      onClick={() => {}}
      {...props}
    />
  );
};
