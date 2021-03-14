import React from "react"
import { Flex, Text, Box } from "rebass"
import styled from "styled-components"
import { space, font } from "../theme"
import { Spacer } from "./Spacer"
import { Button } from "./Button"

export const SubscribeForm = () => {
  return (
    <Flex flexDirection="column">
      <Text>Stay informed about news from Unseen Worlds</Text>
      <Spacer mb={1} />
      <Input type="text" placeholder="Email address" />

      <Box mt={1}>
        <Button>Subscribe</Button>
      </Box>
    </Flex>
  )
}

const Input = styled.input`
  font-family: ${font("sans")};
  height: ${space(2)};
  width: 100%;
`
