import React from "react";
import Head from "next/head";
import { Box, Flex, Image } from "rebass";
import { Spacer } from "../components/Spacer";
import { Divider } from "../components/Divider";
import { Center } from "../components/Center";
import { Sans } from "../components/Typography";
import { Serif } from "../components/Typography";
import { queryPage } from "../utils/queryPage";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";
import { getPageContent } from "../utils/getPageContent";
import StickyBox from "react-sticky-box";

const Shop = ({ shop }) => {
  const content = getPageContent(shop.pageData, [
    "title",
    "description",
    "suggestedUsesTitle",
    "suggestedUsesContent",
  ]);

  return (
    <>
      <Head>
        <title>Shop | SoulCedar Farm | Quilcene, WA</title>
      </Head>
      <Center mb={4}>
        <Box textAlign="center" width="80%">
          <Sans size={[6, 7]} weight="light" textAlign="center">
            {content.title}
          </Sans>
          <br />
          <Sans textAlign="center">{content.description}</Sans>
        </Box>
      </Center>

      <Spacer py={2} />

      <Flex flexDirection={["column", "row"]}>
        <Box width={["100%", "70%"]} pr={[0, 5]}>
          <Box>
            {shop.products.map((product, index) => {
              if (product.hide) {
                return null;
              }

              return (
                <Box p={2} mr={2} mb={2} key={index} width="100%">
                  <Flex
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={["column", "row"]}
                  >
                    <Box width={["100%", "80%"]} pr={[0, 4]}>
                      <Serif size={["4", "5"]} weight="bold" color="purpleDark">
                        {product.title}
                      </Serif>
                      <Sans mt={1}>
                        <i>{product.keywords}</i>
                      </Sans>
                      <Box mt={1}>{product.description}</Box>
                      <Flex mt={1} justifyContent="space-between" py={2}>
                        <Sans pr={1}>
                          ${Number(product.price).toFixed(2)}, {product.meta}
                        </Sans>
                      </Flex>

                      <button
                        className="snipcart-add-item"
                        data-item-description={product.description}
                        data-item-id={product.productId}
                        data-item-image={product.attachments[0].url}
                        data-item-name={product.title}
                        data-item-price={product.price}
                        data-item-url="/shop"
                        style={{
                          border: 0,
                          padding: 10,
                          textDecoration: "underline",
                          marginTop: 5,
                          cursor: "pointer",
                        }}
                      >
                        Add to cart
                      </button>
                    </Box>
                    <Box
                      width={["100%", "20%"]}
                      maxWidth={200}
                      minWidth={200}
                      mt={[4, 0]}
                    >
                      <Image
                        src={product.attachments[0].url}
                        width={200}
                        alt={product.title}
                      />
                    </Box>
                  </Flex>

                  {index !== shop.products.length - 1 && (
                    <Divider mt={4} mb={3} />
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box width={["100%", "30%"]}>
          <StickyBox offsetTop={20} offsetBottom={20}>
            <Spacer my={3} />
            <Box>
              <Box>
                <Sans size={["4", "6"]}>{content.suggestedUsesTitle}</Sans>
              </Box>
              <Box>
                <ul
                  dangerouslySetInnerHTML={{
                    __html: content.suggestedUsesContent,
                  }}
                />
              </Box>
            </Box>
          </StickyBox>
        </Box>
      </Flex>

      <Spacer my={4} />
    </>
  );
};

export default Shop;

export async function getStaticProps() {
  const pageData = await queryPage("shop");

  const { data: productData } = await client.query({
    query: gql`
      query Page {
        products {
          productId
          title
          keywords
          price
          meta
          description
          hide
          attachments
        }
      }
    `,
  });

  return {
    props: {
      shop: {
        pageData: pageData.props.shop,
        products: productData.products,
      },
    },
  };
}
