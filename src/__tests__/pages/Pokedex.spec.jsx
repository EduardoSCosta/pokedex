import React from 'react';
import { render } from '@testing-library/react';
import Pokedex from '../../pages/Pokedex';
import ThemeProvider from '../../contexts/Theme';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  }
})

describe('Pokedex Page', () => {
  it('should be able to list pokemons', () => {
    const { debug } = render(<ThemeProvider>
                                <Pokedex/>
                              </ThemeProvider>);

    debug();
  });
});