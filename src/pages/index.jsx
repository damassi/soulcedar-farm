import Head from "next/head";
import React from "react";
import { Box, Flex } from "rebass";
import { Image } from "rebass";
import { Sans } from "../components/Typography";
import { Center } from "../components/Center";
import { Divider } from "../components/Divider";
import { Desktop } from "../components/Responsive";
import { getPageContent } from "../utils/getPageContent";
import { queryPage } from "../utils/queryPage";

export const Home = ({ home }) => {
  const content = getPageContent(home, [
    "topTagLine",
    "leftColumnHeader",
    "leftColumnContent",
    "rightColumnHeader",
    "rightColumnContent",
    "middleTagLine",
    "bottomLeftHeader",
    "bottomLeftContent",
  ]);

  return (
    <>
      <Head>
        <title>SoulCedar Farm | Quilcene, WA</title>
      </Head>
      <Box>
        <Box height={350} style={{ overflow: "hidden" }}>
          <Center>
            <Image
              src="/soulcedar/image5.jpeg"
              height={300}
              width="100%"
              // layout="fill"
              // className="topImage"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Center>
        </Box>

        <Center>
          <Box width={["100%", "70%"]}>
            <Sans size={[6, 7]} weight="light" textAlign="center">
              {content.topTagLine}
              <br />
            </Sans>
          </Box>
        </Center>

        <Divider my={4} />

        <Flex flexDirection={["column", "row"]}>
          <Box px={[1, 4]} width={["100%", "50%"]}>
            <Center mb={4}>
              <Sans size={7} weight="regular" textAlign="center">
                {content.leftColumnHeader}
              </Sans>
            </Center>

            <Center>
              <Sans size={5} weight="light" textAlign="center">
                {content.leftColumnContent}
              </Sans>
            </Center>
          </Box>

          <Box mt={[5, 0]} px={[1, 4]} width={["100%", "50%"]}>
            <Center mb={4}>
              <Sans size={7} weight="regular" textAlign="center">
                {content.rightColumnHeader}
              </Sans>
            </Center>

            <Center>
              <Sans size={5} weight="light" textAlign="center">
                {content.rightColumnContent}
                <br />
              </Sans>
            </Center>
          </Box>
        </Flex>

        <Center mt={5}>
          <Flex
            justifyContent="center"
            width={700}
            style={{ overflow: "hidden" }}
          >
            <Image
              src="/soulcedar/image4.jpeg"
              height={300}
              width="70%"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Flex>
        </Center>

        <Divider py="20px" />

        <Center my={4}>
          <Box width={["100%", "70%"]}>
            <Sans size={[6, 7]} weight="light" textAlign="center">
              {content.middleTagLine}
              <br />
            </Sans>
          </Box>
        </Center>

        <Divider my={4} />

        <Box px={[1, 4]}>
          <Flex flexDirection={["column", "row"]}>
            <Box pt={[0, 2]} pr={4}>
              <Sans
                size={[6, 7]}
                weight="regular"
                textAlign={["center", "right"]}
              >
                {content.bottomLeftHeader}
                <Desktop display="inline">:</Desktop>
              </Sans>

              <Desktop>
                <Flex pl={4} justifyContent="center" alignItems="center">
                  <Image
                    src="/soulcedar/logo.svg"
                    width={300}
                    height={300}
                    alt=""
                  />
                </Flex>
              </Desktop>
            </Box>

            <Box>
              <Sans size={5} weight="light">
                <ul
                  dangerouslySetInnerHTML={{
                    __html: content.bottomLeftContent,
                  }}
                ></ul>
                <br />
              </Sans>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await queryPage("home");
  return data;
}
