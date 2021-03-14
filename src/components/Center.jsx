import React from "react"
import { Flex } from "rebass"

export const Center = ({ children, ...rest }) => {
  return (
    <Flex width="100%" justifyContent="center" {...rest}>
      {children}
    </Flex>
  )
}
