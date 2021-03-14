import { Link } from "@reach/router"
import React from "react"
import { Box, Flex } from "rebass"
import styled from "styled-components"
import { Sans } from "./Typography"

export const Footer = () => {
  return (
    <Container>
      <hr />
      <Flex justifyContent="center" width="100%">
        <Sans>
          ©2021 SoulCedar Farm | <Link to="/contact-us">Contact Us</Link>
        </Sans>
      </Flex>
    </Container>
  )
}

const Container = styled(Box)`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
`
