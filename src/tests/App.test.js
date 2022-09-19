import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Verificando o componente `<App.js />`', () => {
  test('Verifica se o topo da aplicação tem um conjunto de links', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen
      .getByRole('link', { name: /Favorite Pokémons/i })).toBeInTheDocument();
  });

  test('Verifica se ao clicar no link `Home` é redirecionado pra página certa', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /Home/i });
    userEvent.click(linkHome);

    const titleHome = screen
      .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(titleHome).toBeInTheDocument();
  });

  test('Verifica se ao clicar no link `About` é redirecionado pra página certa', () => {
    renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /About/i });
    userEvent.click(linkAbout);

    const titleAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(titleAbout).toBeInTheDocument();
  });

  test('Verifica se ao clicar no link `Favorite` é redirecionado para página', () => {
    renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', { name: /Favorite/i });
    userEvent.click(linkFavorite);

    const titleFavorite = screen.getByRole('heading', { name: /Favorite pokémons/i });
    expect(titleFavorite).toBeInTheDocument();
  });

  test('Verifica se redireciona para a página `Not Found`', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/nao-existe');
    });

    const titleNotFound = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });
    expect(titleNotFound).toBeInTheDocument();
  });
});
