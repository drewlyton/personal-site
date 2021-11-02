export default interface Story {
  title: string;
  description: string;
  content: string;
  featuredImage: {
    url: string;
  };
  author: {
    name: string;
    bio: string;
    picture: {
      url: string;
    };
  };
}
