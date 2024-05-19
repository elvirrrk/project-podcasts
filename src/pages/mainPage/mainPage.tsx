import { Heading } from "@chakra-ui/react";
import { PokemonList } from "src/features/pokemon-list";

export function MainPage() {
  return (
    <>
      <Heading textAlign="center">Catalog</Heading>
      <PokemonList></PokemonList>
    </>
  );
}
