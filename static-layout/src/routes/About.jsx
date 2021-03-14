import React from "react"
import { Flex, Box, Image } from "rebass"
import { Sans } from "../components/Typography"
import { Spacer } from "../components/Spacer"
import { Link } from "@reach/router"

export const About = () => {
  return (
    <>
      <Flex flexDirection={["column", "row"]}>
        <Box width={["100%", "60%"]} pr={[0, 5]}>
          <Image src={require("../assets/soulcedar/image3.jpeg")} />
        </Box>
        <Box width={["100%", "40%"]} my={[2, 0]}>
          <Sans size={["5", "6"]}>
            SoulCedar Farm is a small scale, holistic farm located in Quilcene, 
            Washington. Sage Coy and Max Evans, couple and co-owners, believe in
            the importance of nourishing food and of reciprocal relationships
            between people, plants and land. These fundamentals fuel the body,
            mind and spirit, with access to wholesome food as the root of
            healthy human growth.
            <br />
            <br />
            SoulCedar Farm strives to bolster local food systems and contribute
            to food security through creative, shelf stable canned goods. Sage
            and Max grow as much produce for their canned products as possible,
            and hope to minimize food waste by connecting with other small
            Olympic Peninsula farms for the rest. Nature is not fragmented; it
            is comprised of its intertwined inhabitants, depending on one
            another to nurture the whole. Cooperation in the local Peninsula
            farming network works in the same way, supporting all and creating a
            balanced community ecosystem.
          </Sans>

          <Spacer my={4} />

          <Sans size="4">
            <p>
              <Link to="/contact-us">Get in touch!</Link>
            </p>
          </Sans>
        </Box>
      </Flex>
    </>
  )
}
