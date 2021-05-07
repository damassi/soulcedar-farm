import React from "react"
import { Box, Flex } from "rebass"
import { Link } from "@reach/router"
import styled from "styled-components"
import { useGlobal } from "reactn"
import { color } from "../theme"
import { Serif } from "./Typography"
import { ReactComponent as NavToggle } from "../assets/NavToggle.svg"
import { Mobile, Desktop } from "./Responsive"
import { useSpring, animated } from "react-spring"

const LinkItem = props => {
  return (
    <Box mr={3}>
      <Serif color="black60" size={["6", "6"]}>
        <Link
          to={props.to}
          getProps={({ isCurrent }) =>
            isCurrent ? { className: "active" } : null
          }
          style={{
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {props.children}
        </Link>
      </Serif>
    </Box>
  )
}

const NavItems = () => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      width="100%"
      justifyContent="center"
    >
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/about">About</LinkItem>
      {/* <LinkItem to="/gallery">Gallery</LinkItem> */}
      <LinkItem to="/where-to-find-us">Where to Find Us</LinkItem>
      <LinkItem to="/contact-us">Contact</LinkItem>
    </Flex>
  )
}

export const Navigation = () => {
  return (
    <>
      <Mobile>
        <MobileNavigation />
      </Mobile>
      <Desktop>
        <DesktopNavigation />
      </Desktop>
    </>
  )
}

const DesktopNavigation = () => {
  return (
    <Container m={2} alignItems="center" flexDirection="row">
      <NavItems />
    </Container>
  )
}

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useGlobal("mobileNavOpen")

  const animateStyles = {
    position: "relative",
    left: isOpen ? 0 : -200,
  }
  const expandNavAnimation = useSpring({
    ...animateStyles,
    from: animateStyles,
  })

  return (
    <MobileContainer onClick={() => toggleOpen(!isOpen)}>
      <NavToggle
        style={{
          position: "absolute",
          opacity: 0.3,
        }}
      />
      <animated.div style={expandNavAnimation}>
        <Container my={5} alignItems="flex-start" width="100%">
          <NavItems />
        </Container>
      </animated.div>
    </MobileContainer>
  )
}

const Container = styled(Flex)`
  font-family: "Playfair Display", serif;

  a {
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }

  .active {
    color: ${color("teal")} !important;
  }
`

const MobileContainer = styled(Box)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  z-index: 1;
`
