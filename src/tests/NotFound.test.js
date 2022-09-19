import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Verifica o componente NotFound', () => {
  test('Verifica se tem um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const titleNotFound = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });
    expect(titleNotFound).toBeInTheDocument();
  });

  test('Verifica se existe uma img com a `src` correta', () => {
    renderWithRouter(<NotFound />);

    const imgNotFound = screen
      .getByAltText(/Pikachu crying because the page requested was not found/i);

    expect(imgNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
