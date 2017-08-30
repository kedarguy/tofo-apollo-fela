import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'react-fela';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj6z1zj6j12n40134a1khkvw4'
})

const client = new ApolloClient({
    networkInterface
})

const renderer = createRenderer();
ReactDOM.render(
    <ApolloProvider client={client}>
        <FelaProvider renderer={renderer}>
            <App />
        </FelaProvider>
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
