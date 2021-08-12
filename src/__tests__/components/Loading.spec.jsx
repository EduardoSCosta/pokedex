import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../../components/Loading';
import ThemeProvider from '../../contexts/Theme';

describe('ThemeBtn', () => {
  it('should be able to show the loading spinner', () => {
    const { debug } = render(<ThemeProvider>
                                <Loading/>
                              </ThemeProvider>);

    debug();
  });
});