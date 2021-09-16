import React from "react";
import { Box, Flex, Image } from "rebass";
import { Link } from "@reach/router";
import { Mobile, Desktop } from "./Responsive";
import logo from "../assets/soulcedar/logo.svg";

export const Logo = (props) => {
  return (
    <Flex justifyContent="center" style={props.style}>
      <button className="snipcart-checkout">Click here to checkout</button>
      <span className="snipcart-items-count"></span>
      <span className="snipcart-total-price"></span>

      <Link to="/">
        <Mobile>
          <Box mt={1}>
            <Image src={logo} width={150} />
          </Box>
        </Mobile>
        <Desktop>
          <Box>
            <Image src={logo} width="auto" height={190} />
          </Box>
        </Desktop>
      </Link>
    </Flex>
  );
};
