export default () => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      landingPage: false,
      depthLimit: 7,
      amountLimit: 100,
      playgroundAlways: true,
      introspection: true,
      apolloServer: {
        tracing: false,
      },
    },
  },
  seo: {
    enabled: true,
  },
});
