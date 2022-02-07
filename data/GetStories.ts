import { gql } from "graphql-request";

export default gql`
  {
    stories(orderBy: createdAt_DESC) {
      id
      title
      slug
      description
      featuredImage {
        url
      }
      highlighted
      createdAt
      author {
        id
        name
        picture {
          url
        }
      }
    }
  }
`;
