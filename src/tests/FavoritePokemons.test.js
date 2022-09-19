import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Verifica o componente FavoritePokemons', () => {
  test('Verifica se é exebido a menssagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const textFound = screen.getByText('No favorite pokemon found');
    expect(textFound).toBeVisible();
  });
});
