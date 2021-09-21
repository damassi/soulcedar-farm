import React from "react";
import { Box, Flex, Image } from "rebass";
import Link from "next/link";
import { Mobile, Desktop } from "./Responsive";

export const Logo = (props) => {
  return (
    <Flex justifyContent="center" style={props.style}>
      <Mobile>
        <Link href="/" passHref>
          <Box mt={1}>
            <Image src="/soulcedar/logo.svg" width={150} alt="logo" />
          </Box>
        </Link>
      </Mobile>
      <Desktop style={{ cursor: "pointer" }}>
        <Link href="/" passHref>
          <Box>
            <Image
              src="/soulcedar/logo.svg"
              width="auto"
              height={190}
              alt="logo"
            />
          </Box>
        </Link>
      </Desktop>
    </Flex>
  );
};
