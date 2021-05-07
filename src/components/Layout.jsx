import React from "react"
import styled from "styled-components"
import { setGlobal, useGlobal } from "reactn"
import { Box } from "rebass"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { useSpring, animated } from "react-spring"
import { Desktop, Mobile } from "./Responsive"
import { Footer } from "./Footer"

setGlobal({
  mobileNavOpen: false,
})

export const Layout = ({ children }) => {
  const [state] = useGlobal()

  const expandNavAnimation = useSpring({
    position: "relative",
    opacity: state.mobileNavOpen ? "0.5" : "1",
    transformOrigin: "top left",
    transform: state.mobileNavOpen
      ? "translate3d(300px, 0, 0) rotate(0deg)"
      : "translate3d(0px, 0, 0) rotate(0deg)",
  })

  return (
    <>
      <Container p={[1, 2]}>
        <Desktop>
          <Logo />
          <Navigation />
          <Content mt={2}>{children}</Content>
          <Footer />
        </Desktop>

        <Mobile>
          <Navigation />
          <animated.div style={expandNavAnimation}>
            <Logo />
            <Box mt={3}>{children}</Box>
          </animated.div>
        </Mobile>
      </Container>
    </>
  )
}

const Container = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled(Box)`
  flex-basis: auto;
  flex-shrink: 0;
  flex-grow: 1;
`
