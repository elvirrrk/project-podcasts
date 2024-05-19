export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  species: NamedAPIResource[];
  sprite: PokemonSprites[];
}

interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface PokemonSprites {
  front_default: string | undefined;
  back_default: string;
}
