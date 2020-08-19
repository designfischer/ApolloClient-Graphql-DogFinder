import { ApolloClient, InMemoryCache } from '@apollo/client'

export const dogClient = new ApolloClient({
    uri: 'https://71z1g.sse.codesandbox.io',
    cache: new InMemoryCache()
})