/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import store from 'src/store';
import RootNavigation from './src/navigation/RootNavigation';

export const link = createHttpLink({
  uri: 'https://node-graphql-mongo-typescrip.herokuapp.com/graphql',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </ApolloProvider>
    </>
  );
};

export default App;
