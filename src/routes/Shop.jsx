import React from "react";
import { Box, Flex } from "rebass";
import { Spacer } from "../components/Spacer";
import { Center } from "../components/Center";
import { BorderBox } from "../components/BorderBox";
import { Sans } from "../components/Typography";
import { Serif } from "../components/Typography";
import { data } from "../data";

export const Shop = () => {
  return (
    <>
      <Center mb={4}>
        <Box textAlign="center" width="80%">
          <Sans size={[6, 7]} weight="light" textAlign="center">
            SoulCedar Shrubs
          </Sans>
          <br />
          <Sans textAlign="center">
            SoulCedar Farm Shrubs are made using a a base of apple cider vinegar
            and honey to prioritize wholesome, local, seasonal ingredients and
            calm stomachs. Intriguing flavor combinations of herbs, fruits and
            roots create these balanced elixirs, delicious in a variety of
            beverages or as a unique culinary ingredient. These versatile
            sipping vinegars are a rewarding alcohol alternative and versatile
            refreshment for any occasion!
          </Sans>
        </Box>
      </Center>

      <Flex flexDirection={["column", "row"]}>
        <Box width={["100%", "70%"]} pr={[0, 5]}>
          <Flex flexWrap="wrap" pl={2}>
            {data.products.map((product, index) => {
              return (
                <BorderBox mr={2} mb={2} key={index} width="100%">
                  <Box>
                    <Serif size={["4", "5"]} weight="bold" color="purpleDark">
                      {product.title}
                    </Serif>
                    <Sans mt={1}>
                      <i>{product.keywords}</i>
                    </Sans>
                    <Box mt={1}>{product.description}</Box>
                    <Flex mt={1} justifyContent="space-between">
                      <Sans pr={1}>{product.price}</Sans>
                      {/* <Sans size="3" weight="bold" mt="3px">
                        Add to Cart
                      </Sans> */}
                    </Flex>
                  </Box>
                  <Box />
                </BorderBox>
              );
            })}
          </Flex>
        </Box>
        <Box width={["100%", "30%"]}>
          <Spacer my={3} />
          <Box>
            <Box>
              <Sans size={["4", "5"]}>Suggested Uses</Sans>
            </Box>
            <Box>
              <ul>
                <li>
                  Add 1 T - 1.5 oz shrub to sparkling water for a refreshing
                  spritzer
                </li>
                <li>
                  Combine equal parts shrub and water for a revitalizing tonic
                </li>
                <li>
                  Play with seasonal flavors and add to muddled herbs and
                  botanicals to spice up your favorite cocktail or mock-tail
                </li>
                <li>Add a dash to an old fashioned ice cream soda</li>
                <li>Sip it straight! Enjoy as an aperitif or digestif</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Spacer my={4} />
    </>
  );
};
