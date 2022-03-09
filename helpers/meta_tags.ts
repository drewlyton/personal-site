function metaTags(name: string, content: string): Array<any> {
  return [
    {
      hid: `${name}`,
      name: `${name}`,
      property: `og:${name}`,
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
