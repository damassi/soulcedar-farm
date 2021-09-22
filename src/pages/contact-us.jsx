import React from "react";
import Head from "next/head";
import { Box } from "rebass";
import { Center } from "../components/Center";
import { Spacer } from "../components/Spacer";
import { Sans } from "../components/Typography";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";
import { getPageContent } from "../utils/getPageContent";

const ContactUs = ({ contact }) => {
  const content = getPageContent(contact, ["max", "sage", "contact"]);

  return (
    <>
      <Head>
        <title>Contact Us | SoulCedar Farm | Quilcene, WA</title>
      </Head>
      <Box style={{ position: "relative" }}>
        <Center flexDirection="column" justifyContent="center" width="100%">
          <Box>
            <Sans size={5} weight="light" textAlign="center">
              <span dangerouslySetInnerHTML={{ __html: content.max }} />
              <br />
              <span dangerouslySetInnerHTML={{ __html: content.sage }} />
            </Sans>

            <Spacer my={4} />

            <Sans size={5} weight="light" textAlign="center">
              <span dangerouslySetInnerHTML={{ __html: content.contact }} />
            </Sans>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default ContactUs;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Contact {
        contact {
          section
          content
        }
      }
    `,
  });

  return {
    props: {
      contact: data.contact,
    },
  };
}
