import React from "react"
import { Button as ButtonBase } from "rebass"
import styled from "styled-components"
import { Sans } from "./Typography"

export const Button = ({ children, variant, ...rest }) => {
  const getButton = () => {
    switch (variant) {
      case "secondary": {
        return {
          bg: "purpleLight",
          py: 1,
        }
      }
      // Primary
      default: {
        return {
          bg: "teal",
          py: "3px",
        }
      }
    }
  }

  const buttonProps = getButton()

  return (
    <ButtonWrapper {...buttonProps} {...rest}>
      <Sans size="2" weight="light">
        {children}
      </Sans>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled(ButtonBase)`
  color: white;
  white-space: nowrap;
  border-radius: 3px;
  justify-content: center;
  display: flex;
`

export const BuyButton = styled(Button).attrs({
  mb: 1,
  mr: ["5px", 0],
})`
  width: 100px;
`
