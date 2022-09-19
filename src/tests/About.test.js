import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Verifica o componente `About`', () => {
  test('Verifica se existe informações da Pokedéx', () => {
    renderWithRouter(<About />);

    const textInformation = screen.getAllByText(/pokédex/i);
    expect(textInformation[1]).toBeInTheDocument();
  });

  test('Verifica se existe um texto `About Pokédex`', () => {
    renderWithRouter(<About />);

    const titleAbout = screen
      .getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(titleAbout).toBeInTheDocument();
  });

  test('Verifica se existem dois parágrafos sobre a Pokédex`', () => {
    renderWithRouter(<About />);

    const paragrafoAbout = screen
      .getAllByText(/Pokémons/i);
    expect(paragrafoAbout[0]).toBeInTheDocument();
    expect(paragrafoAbout[1]).toBeInTheDocument();
  });

  test('Verifica se existe uma img de uma Pokédex', () => {
    renderWithRouter(<About />);

    const imgAbout = screen.getByAltText(/pokédex/i);

    expect(imgAbout).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
