import React from 'react';
import { Header } from './components/Header';
import { RouterWeb } from './RouterWeb';

export const App = () => {
  return (
    <div data-testid="test-id-app">
      <Header />
      <RouterWeb />
    </div>
  );
};
