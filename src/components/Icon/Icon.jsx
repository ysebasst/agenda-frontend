import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const Icon = (props) => {
  return <FontAwesomeIcon icon={faQuestionCircle} {...props}></FontAwesomeIcon>;
};
