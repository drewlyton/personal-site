import { Plugin } from "@nuxt/types";
import { GraphQLClient } from "graphql-request";

const graphcmsClient = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckvh09pdp3k4t01xn08841lrh/master"
);

declare module "@nuxt/types" {
  interface Context {
    $graphcms: GraphQLClient;
  }
}

const graphcms: Plugin = (context) => {
  context.$graphcms = graphcmsClient;
};

export default graphcms;
