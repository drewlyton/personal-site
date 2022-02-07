import { gql } from "graphql-request";

export default gql`
  {
    stories(where: { highlighted: true }) {
      id
      title
      slug
      description
      featuredImage {
        url
      }
      createdAt
      highlighted
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
