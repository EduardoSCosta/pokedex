import React from 'react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import ThemeBtn from '../../components/ThemeBtn';
import ThemeProvider from '../../contexts/Theme';

describe('ThemeBtn', () => {
  it('should be able to switch theme', () => {
    render(<ThemeProvider>
            <ThemeBtn/>
          </ThemeProvider>);

    expect(screen.getByRole('button'));
  });
});