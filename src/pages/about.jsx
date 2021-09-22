import React from "react";
import Head from "next/head";
import { Flex, Box, Image } from "rebass";
import { Sans } from "../components/Typography";
import { Spacer } from "../components/Spacer";
import Link from "next/link";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";
import { getPageContent } from "../utils/getPageContent";
import { withLineBreaks } from "../utils/withLineBreaks";

const About = ({ about }) => {
  const content = getPageContent(about, ["about"]);
  const aboutText = withLineBreaks(content.about);

  return (
    <>
      <Head>
        <title>About | SoulCedar Farm | Quilcene, WA</title>
      </Head>
      <Flex flexDirection={["column", "row"]}>
        <Box width={["100%", "60%"]} pr={[0, 5]}>
          <Image src="/soulcedar/image3.jpeg" alt="" />
        </Box>
        <Box width={["100%", "40%"]} my={[3, 0]}>
          <Sans size={["5", "6"]}>{aboutText}</Sans>

          <Spacer my={4} />

          <Sans size="4">
            <p style={{ textDecoration: "underline" }}>
              <Link href="/contact-us">Get in touch!</Link>
            </p>
          </Sans>
        </Box>
      </Flex>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query About {
        about {
          section
          content
        }
      }
    `,
  });

  return {
    props: {
      about: data.about,
    },
  };
}
