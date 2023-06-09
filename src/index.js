import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './Theme';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </ChakraProvider>
);