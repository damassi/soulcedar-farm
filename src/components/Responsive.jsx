import React from "react";
import { Box } from "rebass";
import { Media } from "../media";

export const Mobile = ({ children, ...rest }) => {
  return (
    <Media at="xs">
      {(mediaClassNames, renderChildren) => {
        return (
          <Box className={mediaClassNames} {...rest}>
            {renderChildren ? children : null}
          </Box>
        );
      }}
    </Media>
  );
};

export const Desktop = ({ children, ...rest }) => {
  return (
    <Media greaterThan="xs">
      {(mediaClassNames, renderChildren) => {
        return (
          <Box className={mediaClassNames} {...rest}>
            {renderChildren ? children : null}
          </Box>
        );
      }}
    </Media>
  );
};
