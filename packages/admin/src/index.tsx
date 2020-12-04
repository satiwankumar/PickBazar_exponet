import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { ApolloProvider } from '@apollo/react-hooks';
import { theme } from './theme';
import Routes from './routes';
// import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import  {createUploadLink } from 'apollo-upload-client'
import * as serviceWorker from './serviceWorker';
import './theme/global.css';

const httpLink = createUploadLink({   uri: process.env.REACT_APP_API_URL});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('AdminToken');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      
      authorization: token ? `Bearer ${token}` : '',
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

function App() {
  const engine = new Styletron();

  return (
    <ApolloProvider client={client as any}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <HashRouter>
            <Routes />
          </HashRouter>
        </BaseProvider>
      </StyletronProvider>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
