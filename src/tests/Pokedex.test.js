import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import pokemons from '../data';
import { isPokemonFavoriteByIdType } from '../types';
import Pokedex from '../pages/Pokedex';
import renderWithRouter from '../renderWithRouter';

describe('Verifica o componente Pokedex', () => {
  test('Verifica se tem um h2 com o texto Encountered pokémons', () => {
    renderWithRouter(
      <Pokedex
        pokemons={ pokemons }
        isPokemonFavoriteById={ isPokemonFavoriteByIdType }
      />,
    );

    const titlePokedex = screen.getByRole('heading', {
      name: /encountered pokémons/i, level: 2,
    });
    expect(titlePokedex).toBeInTheDocument();
  });

  test('Verifica se ao clicar no botão próximo pokémon, exibe um outro pokémon', () => {
    renderWithRouter(
      <Pokedex
        pokemons={ pokemons }
        isPokemonFavoriteById={ isPokemonFavoriteByIdType }
      />,
    );

    const buttonNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    const textPik = screen.getByText(/pikachu/i);

    expect(buttonNext).toBeInTheDocument();
    expect(textPik).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textChar = screen.getByText(/Charmander/i);

    expect(textChar).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textCat = screen.getByText(/Caterpie/i);

    expect(textCat).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textEkan = screen.getByText(/Ekans/i);

    expect(textEkan).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textAla = screen.getByText(/Alakazam/i);

    expect(textAla).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textMew = screen.getByText(/Mew/i);

    expect(textMew).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textRap = screen.getByText(/Rapidash/i);

    expect(textRap).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textSno = screen.getByText(/Snorlax/i);

    expect(textSno).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textDra = screen.getByText(/Dragonair/i);

    expect(textDra).toBeInTheDocument();

    userEvent.click(buttonNext);

    const textUlt = screen.getByText(/Pikachu/i);

    expect(textUlt).toBeInTheDocument();
  });

  test('Verifica se os buttons de filtro tem o nome correto', () => {
    renderWithRouter(
      <Pokedex
        pokemons={ pokemons }
        isPokemonFavoriteById={ isPokemonFavoriteByIdType }
      />,
    );

    const buttonFilter = screen.getAllByTestId('pokemon-type-button');

    expect(buttonFilter[0]).toHaveTextContent(/electric/i);
    expect(buttonFilter[1]).toHaveTextContent(/fire/i);
    expect(buttonFilter[2]).toHaveTextContent(/bug/i);
    expect(buttonFilter[3]).toHaveTextContent(/poison/i);
    expect(buttonFilter[4]).toHaveTextContent(/psychic/i);
    expect(buttonFilter[5]).toHaveTextContent(/normal/i);
    expect(buttonFilter[6]).toHaveTextContent(/dragon/i);
  });

  test('Verifica se é possível clicar o button all', () => {
    renderWithRouter(
      <Pokedex
        pokemons={ pokemons }
        isPokemonFavoriteById={ isPokemonFavoriteByIdType }
      />,
    );

    const btnAll = screen.getByRole('button', { name: /all/i });

    userEvent.click(btnAll);
  });
});
