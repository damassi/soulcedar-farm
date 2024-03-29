/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Flex, Image } from "rebass";
import Link from "next/link";
import styled from "styled-components";
import { useGlobal } from "reactn";
import { color } from "../theme";
import { Serif } from "./Typography";
import NavToggle from "./NavToggle.svg";
import { Mobile, Desktop } from "./Responsive";
import { useRouter } from "next/router";

const LinkItem = (props) => {
  const router = useRouter();

  return (
    <Box mr={4}>
      <Serif color="black60" size={["6", "6"]}>
        <Link href={props.href}>
          <a className={router.pathname === props.href ? "active" : ""}>
            {props.children}
          </a>
        </Link>
      </Serif>
    </Box>
  );
};

const NavItems = () => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      width="100%"
      justifyContent="center"
    >
      <LinkItem href="/">Home</LinkItem>
      <LinkItem href="/shop">Shop</LinkItem>
      <LinkItem href="/about">About</LinkItem>
      {/* <LinkItem href="/gallery">Gallery</LinkItem> */}
      <LinkItem href="/where-to-find-us">Where to Find Us</LinkItem>
      <LinkItem href="/contact-us">Contact</LinkItem>

      <Flex height={15} position="relative" mt="12px" alignItems="center">
        <CheckoutButton className="snipcart-checkout" background="hidden">
          <Image
            src="/soulcedar/shopping-cart.svg"
            width={15}
            height={15}
            alt="checkout button"
          />
        </CheckoutButton>
      </Flex>
    </Flex>
  );
};

const CheckoutButton = styled.button`
  appearance: none;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  background-color: transparent;
  color: inherit;
  font: inherit;
  text-align: inherit;
`;

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
  );
};

const DesktopNavigation = () => {
  return (
    <Container mb={4} alignItems="center" flexDirection="row">
      <NavItems />
    </Container>
  );
};

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useGlobal("mobileNavOpen");

  const animateStyles = {
    position: "relative",
    left: isOpen ? 0 : -200,
  };

  const size = isOpen
    ? { width: "100%", height: "100%" }
    : { width: 60, height: 60 };

  return (
    <MobileContainer
      onClick={() => toggleOpen(!isOpen)}
      width={size.width}
      height={size.height}
    >
      <NavToggle
        style={{
          position: "absolute",
          opacity: 0.3,
          width: 50,
          height: 50,
        }}
      />
      <div style={animateStyles}>
        <Container my={5} alignItems="flex-start" width="100%">
          <NavItems />
        </Container>
      </div>
    </MobileContainer>
  );
};

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
`;

const MobileContainer = styled(Box)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  z-index: 1;
`;
