import { gql } from "graphql-request";

export default gql`
  query GetStoriesByTag($tags: [Tags!]) {
    stories(
      orderBy: publishedAt_DESC
      where: { tags_contains_some: $tags }
      first: 2
    ) {
      id
      title
      description
      slug
      publishedAt
      featuredImage {
        url
      }
    }
  }
`;
