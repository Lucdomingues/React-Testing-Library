import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Verifica o componente PokemonDetails', () => {
  test('Verifica o Favorite', () => {
    renderWithRouter(<App />);

    const cardLink = screen.getByRole('link', { name: /more details/i });

    userEvent.click(cardLink);

    const titleDetails = screen
      .getByRole('heading', { name: /pikachu details/i, level: 2 });
    expect(titleDetails).toBeInTheDocument();

    const cardFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });

    expect(cardFavorite).toBeInTheDocument();

    userEvent.click(cardFavorite);

    const image = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/star-icon.svg');
  });

  test('Verifica se os detalhes aparecem na tela', () => {
    renderWithRouter(<App />);

    const cardLink = screen.getByRole('link', { name: /more details/i });

    userEvent.click(cardLink);

    const titleDetails = screen
      .getByRole('heading', { name: /pikachu details/i, level: 2 });

    const textSummary = screen.getByRole('heading', { name: /Summary/i, level: 2 });

    const textResumo = screen
      .getByText(/this intelligent pokémon roasts hard berries with electricity to/i);

    expect(textResumo).toBeInTheDocument();
    expect(textSummary).toBeInTheDocument();
    expect(titleDetails).toBeInTheDocument();
    expect(cardLink).not.toBeInTheDocument();
  });

  test('Verifica se exibe os mapas', () => {
    renderWithRouter(<App />);

    const cardLink = screen.getByRole('link', { name: /more details/i });

    userEvent.click(cardLink);

    const titleMap = screen
      .getByRole('heading', { name: /Game Locations of pikachu/i, level: 2 });

    const textLocation = screen.getByText(/Kanto Viridian/i);
    const textLocation2 = screen.getByText(/Kanto Power/i);
    const imgLocation = screen.getAllByRole('img', { name: /pikachu location/i });

    expect(imgLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(titleMap).toBeInTheDocument();
    expect(textLocation).toBeInTheDocument();
    expect(textLocation2).toBeInTheDocument();
  });
});
