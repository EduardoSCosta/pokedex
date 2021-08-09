import React from 'react';
import { render } from '@testing-library/react';
import ThemeBtn from '../../components/ThemeBtn';
import ThemeProvider from '../../contexts/Theme';

describe('ThemeBtn', () => {
  it('should be able to list pokemons', () => {
    const { debug } = render(    
                    <ThemeProvider>
                      <ThemeBtn/>
                    </ThemeProvider>);

    debug();
  });
});