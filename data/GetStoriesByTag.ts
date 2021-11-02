import { gql } from "graphql-request";

export default gql`
  query GetStoriesByTag($tags: [Tags!]) {
    stories(where: { tags_contains_some: $tags }, first: 2) {
      id
      title
      description
      createdAt
      featuredImage {
        url
      }
    }
  }
`;
