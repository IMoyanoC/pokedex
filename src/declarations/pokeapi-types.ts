/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Description {
    /** The localized description for an API resource in a specific language. */
    description: string;
    /** The language this name is in */
    language: NamedAPIResource;
  }

  export interface PokemonSpecies {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage */
    order: number;
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless */
    gender_rate: number;
    /** The base capture rate; up to 255. The higher the number, the easier the catch */
    capture_rate: number;
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon */
    base_happiness: number;
    /** Whether or not this is a baby Pokémon */
    is_baby: boolean;
    /** Whether or not this is a legendary Pokémon */
    is_legendary: boolean;
    /** Whether or not this is a mythical Pokémon */
    is_mythical: boolean;
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's */
    hatch_counter: number;
    /** Whether or not this Pokémon has visual gender differences */
    has_gender_differences: boolean;
    /** Whether or not this Pokémon has multiple forms and can switch between them */
    forms_switchable: boolean;
    /** The rate at which this Pokémon species gains levels */
    growth_rate: NamedAPIResource;
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species */
    pokedex_numbers: PokemonSpeciesDexEntry[];
    /** A list of egg groups this Pokémon species is a member of */
    egg_groups: NamedAPIResource[];
    /** The color of this Pokémon for Pokédex search */
    color: NamedAPIResource;
    /** The shape of this Pokémon for Pokédex search */
    shape: NamedAPIResource;
    /** The Pokémon species that evolves into this Pokemon_species */
    evolves_from_species: NamedAPIResource;
    /** The evolution chain this Pokémon species is a member of */
    evolution_chain: APIResource;
    /** The habitat this Pokémon species can be encountered in */
    habitat: NamedAPIResource;
    /** The generation this Pokémon species was introduced in */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of encounters that can be had with this Pokémon species in pal park */
    pal_park_encounters: PalParkEncounterArea[];
    /** A list of flavor text entries for this Pokémon species */
    flavor_text_entries: FlavorText[];
    /** Descriptions of different forms Pokémon take on within the Pokémon species */
    form_descriptions: Description[];
    /** The genus of this Pokémon species listed in multiple languages */
    genera: Genus[];
    /** A list of the Pokémon that exist within this Pokémon species */
    varieties: PokemonSpeciesVariety[];
  }

  export interface PokemonSpeciesDexEntry {
    /** The index number within the Pokédex */
    entry_number: number;
    /** The Pokédex the referenced Pokémon species can be found in */
    pokedex: NamedAPIResource;
  }

  export interface APIResource {
    /** The URL of the referenced resource*/
    url: string;
  }

  export interface Name {
    /** The localized name for an API resource in a specific language */
    name: string;
    /** The language this name is in */
    language: NamedAPIResource;
  }

  export interface PalParkEncounterArea {
    /** The base score given to the player when the referenced Pokémon is caught during a pal park run */
    base_score: number;
    /** The base rate for encountering the referenced Pokémon in this pal park area */
    rate: number;
    /** The pal park area where this encounter happens */
    area: NamedAPIResource;
  }

  export interface FlavorText {
    /** The localized flavor text for an API resource in a specific language */
    flavor_text: string;
    /** The language this name is in */
    language: NamedAPIResource;
    /** The game version this flavor text is extracted from */
    version: NamedAPIResource;
  }

  export interface PokemonSpeciesVariety {
    /** Whether this variety is the default variety */
    is_default: boolean;
    /** The Pokémon variety */
    pokemon: NamedAPIResource;
  }

  export interface Genus {
    /** The localized genus for the referenced Pokémon species */
    genus: string;
    /** The language this genus is in */
    language: NamedAPIResource;
  }

  export interface NamedAPIResource {
    /** The name of the referenced resource */
    name: string;
    /** The URL of the referenced resource */
    url: string;
  }

  export interface PokemonType {
    /** The order the Pokémon's types are listed in */
    slot: number;
    /** The type the referenced Pokémon has */
    type: NamedAPIResource;
  }

  export interface PokemonSprites {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string;
    /** The shiny female depiction of this Pokémon from the front in battle */
    front_shiny_female: string;
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string;
  }

  export interface Pokemon {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The base experience gained for defeating this Pokémon */
    base_experience: number;
    /** The height of this Pokémon in decimetres */
    height: number;
    /** Set for exactly one Pokémon used as the default for each species */
    is_default: boolean;
    /** Order for sorting. Almost national order, except families are grouped together */
    order: number;
    /** The weight of this Pokémon in hectograms */
    weight: number;
    /** A list of abilities this Pokémon could potentially have */
    abilities: any[];
    /** A list of forms this Pokémon can take on */
    forms: NamedAPIResource[];
    /** A list of game indices relevent to Pokémon item by generation */
    game_indices: any[];
    /** A list of items this Pokémon may be holding when encountered */
    held_items: any[];
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups */
    moves: any[];
    /** A set of sprites used to depict this Pokémon in the game.
     * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
     */
    sprites: PokemonSprites;
    /** The species this Pokémon belongs to */
    species: NamedAPIResource;
    /** A list of base stat values for this Pokémon */
    stats: any[];
    /** A list of details showing types this Pokémon has */
    types: PokemonType[];
  }
  export interface PokemonForm {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The order in which forms should be sorted within all forms.
     * Multiple forms may have equal order, in which case they should fall back on sorting by name
     */
    order: number;
    /** The order in which forms should be sorted within a species' forms */
    form_order: number;
    /** True for exactly one form used as the default for each Pokémon */
    is_default: boolean;
    /** Whether or not this form can only happen during battle */
    is_battle_only: boolean;
    /** Whether or not this form requires mega evolution */
    is_mega: boolean;
    /** The name of this form */
    form_name: string;
    /** The Pokémon that can take on this form */
    pokemon: NamedAPIResource;
    /** A set of sprites used to depict this Pokémon form in the game */
    sprites: PokemonFormSprites;
    /** The version group this Pokémon form was introduced in */
    version_group: NamedAPIResource;
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name */
    names: Name[];
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name */
    form_names: Name[];
  }

  export interface PokemonFormSprites {
    /** The default depiction of this Pokémon form from the front in battle */
    front_default: string;
    /** The shiny depiction of this Pokémon form from the front in battle */
    front_shiny: string;
    /** The default depiction of this Pokémon form from the back in battle */
    back_default: string;
    /** The shiny depiction of this Pokémon form from the back in battle */
    back_shiny: string;
  }