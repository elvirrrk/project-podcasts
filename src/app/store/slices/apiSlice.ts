import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
  reducerPath: "pokemons",

  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: builder => ({
    getPokemons: builder.query({
      query: () => `/pokemon?limit=10`,
    }),

    // сделать отдельный slice, value=кол-во подгружаемых карточек
    //  setNextPageUrl(response.data.next);
    // setPrevPageUrl(response.data.previous);

    getPokemonByName: builder.query({
      query: pokemonName => `/pokemon/${pokemonName}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokeApi;
