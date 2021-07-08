import React from "react";

import { StyledInput } from "./Input.styles";

export const Input = (props) => {
  return (
    <StyledInput
      type="text"
      marginBottom=".5rem"
      onChange={() => {}}
      {...props}
    />
  );
};
