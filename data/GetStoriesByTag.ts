import { gql } from "graphql-request";

export default gql`
  query GetStoriesByTag($tags: [Tags!]) {
    stories(where: { tags_contains_some: $tags }, last: 2) {
      id
      title
      description
      slug
      createdAt
      featuredImage {
        url
      }
    }
  }
`;
