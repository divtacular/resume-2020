import {Container} from 'next/app';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import '../scss/app.scss'
import Config from "../config";

const client = new ApolloClient({
    uri: Config.gqlUrl,
    cache: new InMemoryCache()
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
    return (
        <>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}
