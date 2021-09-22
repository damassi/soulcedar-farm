import { gql } from "@apollo/client";
import { client } from "../apolloClient";

export async function queryPage(pageKey) {
  const { data } = await client.query({
    query: gql`
      query Page {
        ${pageKey} {
          section
          content
        }
      }
    `,
  });

  return {
    props: {
      [pageKey]: data[pageKey],
    },
  };
}
