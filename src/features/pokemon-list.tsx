// import { Pagination } from "src/widgets/pagination";
import { useGetPokemonsQuery } from "src/app/store/slices/apiSlice";
import {
  Box,
  Card,
  Image,
  CardHeader,
  CardBody,
  Button,
  Flex,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import type { Pokemon, PokemonSprites } from "pokenode-ts";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function PokemonList() {
  const { data, isLoading, error } = useGetPokemonsQuery();

  return (
    <Box>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Flex gap={7} flexWrap="wrap" my={7} justifyContent="center">
          {data.results.map((pokemon: Pokemon) => (
            <Card key={pokemon.id} w={40}>
              <CardHeader textAlign="center">
                {capitalizeFirstLetter(pokemon.name)}
              </CardHeader>
              <CardBody>
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", m: "300px" }}
                  mx="auto"
                  // src={pokemon.sprites["front_default"]}
                  // нужен отдельный запрос [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
                />
                <Button>
                  <StarIcon />
                </Button>
              </CardBody>
            </Card>
          ))}
        </Flex>
      ) : null}
    </Box>
  );
}
