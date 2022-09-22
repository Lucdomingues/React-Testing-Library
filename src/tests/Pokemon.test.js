import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Verifica o componente Pokemon', () => {
  test('Verifica se é renderizado os dados do card certo', () => {
    renderWithRouter(<App />);

    const cardName = screen.getByText(/pikachu/i);
    expect(cardName).toBeInTheDocument();

    const cardType = screen.getAllByText(/electric/i);
    expect(cardType[1]).toBeInTheDocument();

    const cardAverage = screen.getByText(/Average weight: 6.0 kg/i);
    expect(cardAverage).toBeInTheDocument();
    const cardImage = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(cardImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Verifica se existe um link para detalhes', () => {
    renderWithRouter(<App />);

    const cardLink = screen.getByRole('link', { name: /more details/i });

    expect(cardLink).toHaveAttribute('href', '/pokemons/25');
  });

  test('Verifica se ao clicar no link é redirecionado', () => {
    renderWithRouter(<App />);

    const cardLink = screen.getByRole('link', { name: /more details/i });

    userEvent.click(cardLink);

    const titleDetails = screen
      .getByRole('heading', { name: /pikachu details/i, level: 2 });
    expect(titleDetails).toBeInTheDocument();

    const cardFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });

    userEvent.click(cardFavorite);

    const image = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/star-icon.svg');
  });
});
