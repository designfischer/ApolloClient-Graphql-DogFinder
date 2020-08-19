import React from 'react';
import ReactDOM from 'react-dom';

import DogFinder from './pages/DogFinder'

import { ApolloProvider } from '@apollo/client'
import { dogClient } from './graphql/client/client'

ReactDOM.render(  
  <ApolloProvider client={dogClient}>    
    <DogFinder />
  </ApolloProvider>,
  document.getElementById('root')
);
