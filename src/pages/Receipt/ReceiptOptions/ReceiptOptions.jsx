import React from "react";
import { faPlus, faReceipt, faFilter } from "@fortawesome/free-solid-svg-icons";

import {
  StyledReceiptOptions,
  StyledButton,
  StyledText,
} from "./ReceiptOptions.styles";

import { Icon } from "components";

export const ReceiptOptions = () => {
  return (
    <StyledReceiptOptions>
      <StyledButton role="button" aria-label="button" onClick={() => {}}>
        <Icon icon={faPlus} />
        <StyledText>Agregar recibo</StyledText>
      </StyledButton>
      <StyledButton role="button" aria-label="button" onClick={() => {}}>
        <Icon icon={faReceipt} />
        <StyledText>Nuevo recibo</StyledText>
      </StyledButton>
      <StyledButton role="button" aria-label="button" onClick={() => {}}>
        <Icon icon={faFilter} />
        <StyledText>Filtrar</StyledText>
      </StyledButton>
    </StyledReceiptOptions>
  );
};
