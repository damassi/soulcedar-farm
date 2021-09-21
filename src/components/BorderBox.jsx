// import React from "react"
import { Box } from "rebass";
import styled from "styled-components";

export const BorderBox = styled(Box).attrs({ p: 3 })`
  border-radius: 3px;
  border: 1px solid ${(p) => p.theme.colors[p.borderColor || "black10"]};
  height: fit-content;
`;
