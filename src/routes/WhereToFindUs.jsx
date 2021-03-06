import React from "react"
import { Box } from "rebass"
import { Center } from "../components/Center"
import { Spacer } from "../components/Spacer"
import { Sans } from "../components/Typography"

export const WhereToFindUs = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Center
        flexDirection="column"
        justifyContent="center"
        width="100%"
        style={{ position: "absolute" }}
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
  )
}
