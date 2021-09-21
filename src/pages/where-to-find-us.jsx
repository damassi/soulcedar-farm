import React from "react";
import Head from "next/head";
import { Box } from "rebass";
import { Center } from "../components/Center";
import { Spacer } from "../components/Spacer";
import { Sans } from "../components/Typography";

const WhereToFindUs = () => {
  return (
    <>
      <Head>
        <title>Where to Find Us | SoulCedar Farm | Quilcene, WA</title>
      </Head>
      <Box style={{ position: "relative" }}>
        <Center
          flexDirection="column"
          justifyContent="center"
          width="100%"
          // style={{ position: "absolute" }}
        >
          <Box>
            <Sans size={6} weight="regular" textAlign="center">
              Location and Mailing address:
            </Sans>

            <Sans size={5} weight="light" textAlign="center">
              20 Hollybrook Height Ln <br />
              Quilcene, WA 98376
            </Sans>

            <Spacer my={4} />

            <Sans size={5} weight="light" textAlign="center">
              Find us at the Port Townsend Farmers Market this season, from May
              1st - December 18th!
            </Sans>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default WhereToFindUs;
