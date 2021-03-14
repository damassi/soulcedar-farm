import React from "react"
import { Box, Flex, Image } from "rebass"
import { Spacer } from "../components/Spacer"
import { Sans } from "../components/Typography"
import { Center } from "../components/Center"
import { Divider } from "../components/Divider"
import { Desktop } from "../components/Responsive"

export const Home = () => {
  return (
    <Box>
      <Box height={400} style={{ overflow: "hidden" }}>
        <Center>
          <Image
            src={require("../assets/soulcedar/image5.jpeg")}
            height={300}
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Center>
      </Box>

      <Spacer my={4} />

      <Center my={4}>
        <Box width={["100%", "70%"]}>
          <Sans size={[6, 7]} weight="light" textAlign="center">
            Rejuvenating soil and soul through accessible nourishment,
            inter-farm cooperation and reciprocal human - land relationships.
            <br />
          </Sans>
        </Box>
      </Center>

      <Divider my={4} />

      <Flex flexDirection={["column", "row"]}>
        <Box px={[1, 4]} width={["100%", "50%"]}>
          <Center mb={4}>
            <Sans size={7} weight="regular" textAlign="center">
              Farming Practices
            </Sans>
          </Center>

          <Center>
            <Sans size={5} weight="light" textAlign="center">
              Sage and Max raise small livestock to control pests, enhance soil
              health and build compost. While SoulCedar Farm does not hold an
              organic certification, no chemicals or pesticides are used for in
              any manner, all potting soil and purchased compost is organic, and
              product ingredients are sourced from farms and companies who share
              these values.
            </Sans>
          </Center>
        </Box>

        <Box mt={[5, 0]} px={[1, 4]} width={["100%", "50%"]}>
          <Center mb={4}>
            <Sans size={7} weight="regular" textAlign="center">
              Values
            </Sans>
          </Center>

          <Center>
            <Sans size={5} weight="light" textAlign="center">
              SoulCedar Farm is committed to operating with the earth in mind.
              Healthy farming has the ability to feed not only human beings, but
              all those who participate in the growth cycle; strong soil fosters
              flowers, flowers perpetuate pollinators, pollinators enable
              fruiting, fruiting feeds, feeding fertilizes. The cycle begets
              itself. Sustainable agriculture is not possible if farming
              practices neglect any of these essential elements.
              <br />
            </Sans>
          </Center>
        </Box>
      </Flex>

      <Center my={4}>
        <Flex
          justifyContent="center"
          height={700}
          width={700}
          style={{ overflow: "hidden" }}
        >
          <Image
            src={require("../assets/soulcedar/image4.jpeg")}
            height={300}
            width="70%"
            style={{ objectFit: "cover" }}
          />
        </Flex>
      </Center>

      <Divider my={4} />

      <Center my={4}>
        <Box width={["100%", "70%"]}>
          <Sans size={[6, 7]} weight="light" textAlign="center">
            In the modern world, access to nourishing food is not as pervasive
            as it should be. Just as a seed germinates only when provided with
            the necessary growth conditions, people require proper nutrition to
            flourish.
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
              In order to nurture a balanced food ecosystem, SoulCedar Farm will
              <Desktop>:</Desktop>
            </Sans>

            <Desktop>
              <Flex pl={4} pt={6} justifyContent="center" alignItems="center">
                <Image
                  src={require("../assets/soulcedar/logo-bw.jpg")}
                  width={200}
                  height={200}
                  // height="100%"
                  style={{ objectFit: "contain" }}
                />
              </Flex>
            </Desktop>
          </Box>

          <Box>
            <Sans size={5} weight="light">
              <ul>
                <li>
                  Always consider the whole cycle of growth, from seed to
                  decomposition, to participate in it’s health
                </li>
                <li>Never use pesticides or chemicals</li>
                <li>Never package with plastic</li>
                <li>Seed Save</li>
                <li>
                  Source seeds from local companies who grow using organic
                  methods (certified or non)
                </li>
                <li>
                  Enrich the soil through thoughtful planting and crop rotation
                </li>
                <li>
                  Provide at least one low price, shelf stable canned product at
                  all times to promote food security and accessibility
                </li>
                <li>
                  Support local, sustainable farmers and reduce waste by
                  purchasing their excess produce to preserve bountiful harvests
                </li>
                <li>
                  Collaborate rather than compete with fellow growers and
                  producers to further our collective visions
                </li>
              </ul>
              <br />
            </Sans>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
