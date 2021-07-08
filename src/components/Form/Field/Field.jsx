import { useState } from "react";

import {
  StyledField,
  IconContainer,
  ButtonRevealPassword,
} from "./Field.styles";

import { Icon, Input } from "components";
import {
  faQuestionCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

export const Field = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState(props.type || "text");

  const handleClick = () => {
    setTypeInput(typeInput === "password" ? "text" : "password");
    setShowPassword(!showPassword);
  };

  return (
    <StyledField marginBottom={props.marginBottom || "1rem"}>
      <IconContainer>
        <Icon icon={props.icon || faQuestionCircle} />
      </IconContainer>
      <Input
        type={typeInput}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        marginBottom="0"
        onChange={props.onChange}
      />
      <ButtonRevealPassword
        role="button"
        aria-label="button"
        type={props.type || "text"}
        onClick={handleClick}
      >
        <Icon icon={showPassword ? faEyeSlash : faEye} />
      </ButtonRevealPassword>
    </StyledField>
  );
};
