import React from "react";

import { StyledItem, StyledTitle, StyledText } from "./ReceiptItem.styles";

export const ReceiptItem = () => {
  return (
    <StyledItem>
      <StyledTitle>Recibo</StyledTitle>
      <StyledText>
        Valor: <span>$ 23000</span>
      </StyledText>
      <StyledText>
        Pago oportuno: <span>23 Enero 2021</span>
      </StyledText>
      <StyledText>
        Pago realizado: <span>19 Enero 2021</span>
      </StyledText>
    </StyledItem>
  );
};
