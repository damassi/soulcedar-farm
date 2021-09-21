import React from "react";
import { Box } from "rebass";
import { Center } from "../components/Center";
import { Spacer } from "../components/Spacer";
import { Sans } from "../components/Typography";

const ContactUs = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Center flexDirection="column" justifyContent="center" width="100%">
        <Box>
          <Sans size={5} weight="light" textAlign="center">
            Max Evans, co-owner, <a href="tel:360-660-7101">(360)660-7101</a>
            <br />
            Sage Coy, co-owner, <a href="tel:612-801-0086">(612)801-0086</a>
          </Sans>

          <Spacer my={4} />

          <Sans size={5} weight="light" textAlign="center">
            <b>Email</b> <br />
            <a href="mailto:sage@soulcedarfarm.com">sage@soulcedarfarm.com</a>
            <br />
            <br />
            <b>Instagram</b>
            <br />{" "}
            <a
              href="https://instagram.com/soulcedarfarm"
              target="_blank"
              rel="noopener noreferrer"
            >
              @soulcedarfarm
            </a>
          </Sans>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactUs;
