import React from "react";
import styled from "styled-components";
import { setGlobal, useGlobal } from "reactn";
import { Box } from "rebass";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Desktop, Mobile } from "./Responsive";
import { Spacer } from "./Spacer";

setGlobal({
  mobileNavOpen: false,
});

export const Layout = ({ children }) => {
  const [state] = useGlobal();

  const expandNavAnimation = {
    position: "relative",
    opacity: state.mobileNavOpen ? "0.5" : "1",
    transformOrigin: "top left",
    transform: state.mobileNavOpen
      ? "translate3d(300px, 0, 0) rotate(0deg)"
      : "translate3d(0px, 0, 0) rotate(0deg)",
  };

  return (
    <Box p={[1, 2]} maxWidth={1200} margin="0 auto">
      <Desktop>
        <Logo />
        <Navigation />
        <Spacer py={2} />
        <Box p={2} flexBasis="auto" flexShrink={0} flexGrow={1}>
          {children}
        </Box>
        {/* <Footer /> */}
      </Desktop>

      <Mobile>
        <Navigation />
        <div style={expandNavAnimation}>
          <Logo />
          <Box pt={3}>{children}</Box>
        </div>
      </Mobile>
    </Box>
  );
};
