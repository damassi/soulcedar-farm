import React from "react";
import Head from "next/head";
import { Box } from "rebass";
import { Center } from "../components/Center";
import { Spacer } from "../components/Spacer";
import { Sans } from "../components/Typography";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";
import { getPageContent } from "../utils/getPageContent";
import { withLineBreaks } from "../utils/withLineBreaks";
import { queryPage } from "../utils/queryPage";

const WhereToFindUs = ({ whereToFindUs }) => {
  const content = getPageContent(whereToFindUs, ["location", "message"]);

  return (
    <>
      <Head>
        <title>Where to Find Us | SoulCedar Farm | Quilcene, WA</title>
      </Head>
      <Box style={{ position: "relative" }}>
        <Center flexDirection="column" justifyContent="center" width="100%">
          <Box>
            <Sans size={6} weight="regular" textAlign="center">
              {content.location}
            </Sans>

            <Spacer my={4} />

            <Sans size={5} weight="light" textAlign="center">
              {withLineBreaks(content.message)}
            </Sans>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default WhereToFindUs;

export async function getStaticProps() {
  const data = await queryPage("whereToFindUs");
  return data;
}
