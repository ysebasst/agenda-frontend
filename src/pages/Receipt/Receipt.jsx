import React from "react";

import { StyledReceipt, StyledReceiptWrapper } from "./Receipt.styles";

import { ReceiptOptions } from "./ReceiptOptions";
import { ReceiptItem } from "./ReceiptItem";

export const Receipt = () => {
  return (
    <StyledReceipt>
      <StyledReceiptWrapper>
        <ReceiptOptions />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
        <ReceiptItem />
      </StyledReceiptWrapper>
    </StyledReceipt>
  );
};
