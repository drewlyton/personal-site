import { gql } from "graphql-request";

export default gql`
  query GetStory($slug: String) {
    story(where: { slug: $slug }) {
      id
      title
      publishedAt
      content {
        html
      }
      featuredImage {
        url
      }
      author {
        id
        bio
        name
        picture {
          id
          url
        }
      }
      videoUrl
      portfolioUrl
    }
  }
`;
