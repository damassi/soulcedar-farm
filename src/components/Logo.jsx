import React from "react"
import { Box, Flex, Image } from "rebass"
import { Link } from "@reach/router"
import { Mobile, Desktop } from "./Responsive"

export const Logo = props => {
  return (
    <Flex justifyContent="center" style={props.style}>
      <Link to="/">
        <Mobile>
          <Box mt={1}>
            <Image
              src={require("../assets/soulcedar/logo-color.jpg")}
              width={150}
            />
          </Box>
        </Mobile>
        <Desktop>
          <Box>
            <Image
              src={require("../assets/soulcedar/logo-color.jpg")}
              width="auto"
              height={190}
            />
          </Box>
        </Desktop>
      </Link>
    </Flex>
  )
}
