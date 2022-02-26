function metaTags(name: string, content: string): Array<any> {
  return [
    {
      hid: `og:${name}`,
      name: `og:${name}`,
      content
    },
    {
      hid: `twitter:${name}`,
      name: `twitter:${name}`,
      content
    }
  ];
}

export default metaTags;
