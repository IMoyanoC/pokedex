<script lang="ts">
  import { onMount } from "svelte";
  import type {
    Description,
    PokemonSpecies,
    PokemonSpeciesDexEntry,
    APIResource,
    Name,
    PalParkEncounterArea,
    FlavorText,
    PokemonSpeciesVariety,
    Genus,
    NamedAPIResource,
    PokemonType,
    PokemonSprites,
    Pokemon,
    PokemonForm,
    PokemonFormSprites,
  } from "../declarations/pokeapi-types";

  export let image;
  export let name;
  export let raichu;
  export let pichu;
  export let pikachu;

  let description: string;
  let types: PokemonType[] = [];
  let id: number;

  interface FormData {
    name: string;
    sprites: PokemonFormSprites;
  }

  type FormsData = FormData[];

  let sprites: PokemonSprites;
  let forms: NamedAPIResource[] = [];
  let formsDataPromise: Promise<FormData>[] = [];

  name = "pidgey";

  onMount(async () => {
    const pokemonDataResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    const pokemonData: Pokemon = await pokemonDataResponse.json();
    const pokemonSpeciesDataResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}/`
    );
    const pokemonSpeciesData: PokemonSpecies =
      await pokemonSpeciesDataResponse.json();

    name = pokemonData.name;
    id = pokemonData.id;
    sprites = pokemonData.sprites;
    types = pokemonData.types;
    forms = pokemonData.forms;

    console.log(forms);

    description = pokemonSpeciesData.flavor_text_entries[0].flavor_text;

    formsDataPromise = forms.map(async (form) => {
      const formDataResponse = await fetch(form.url);
      const formData: PokemonForm = await formDataResponse.json();
      const formatedFormData: FormData = {
        name: formData.form_name,
        sprites: formData.sprites,
      };

      return formatedFormData;
      console.log(formData);
    });
  });

  console.log(formsDataPromise);
</script>

<figure
  class="flex h-[30rem] w-[20rem] flex-col self-center overflow-hidden rounded-3xl bg-orange-50 shadow-md"
>
  <!-- imagen -->
  <div class="flex h-3/5 w-full flex-shrink-0 justify-center">
    <img
      src={sprites?.front_default}
      alt=""
      class="w-full object-cover"
      style="filter: pixelate(1px);"
    />
  </div>
  <figcaption class="flex basis-full flex-col bg-neutral-100">
    <div
      class="flex items-center gap-x-1 rounded-sm border-solid border-black px-4 pb-2 pt-4"
    >
      <div class="basis-full text-base font-semibold text-slate-900">
        {name}
        <span class="text-sm font-normal text-slate-300">#{id}</span>
      </div>
      {#each types as type}
        <div
          class="inline-flex h-fit items-center rounded-full bg-amber-400 px-1 text-center font-mono text-xs font-bold uppercase text-slate-100"
        >
          {type.type.name}
        </div>
      {/each}
    </div>
    <div
      class="rounded-sm border-solid border-black px-4 py-2 text-sm text-slate-600"
    >
      {description}
    </div>

    <!-- evolution -->
    <!-- <div class="flex h-full items-center self-center">
      <div class="group grid hover:cursor-pointer">
        <div
          class="col-span-full row-span-full h-8 w-8 scale-0 self-center rounded-full bg-transparent transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-stone-200"
        />
        <img
          src={formsData[0]?.sprites.front_default}
          alt="Pichu"
          class="z-10 col-span-full row-span-full h-10 self-center"
        />
      </div>

      <i class="material-icons text text-slate-300">arrow_right</i>
      <img
        src={sprites?.front_default}
        alt="Pikachu"
        class="filter-black h-10"
      />
      <i class="material-icons text-slate-300">arrow_right</i>
      <img src={raichu} alt="Raichu" class="h-10" />
    </div> -->

    <div class="flex h-full w-full items-center self-center bg-slate-400">
      {#each formsDataPromise as formDataPromise}
        {#await formDataPromise then formData}
          <div class="group grid hover:cursor-pointer">
            <div
              class="col-span-full row-span-full h-8 w-8 scale-0 self-center rounded-full bg-transparent transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-stone-200"
            />
            <img
              src={formData.sprites.front_default}
              alt="Pichu"
              class="z-10 col-span-full row-span-full h-10 self-center"
            />
          </div>
        {/await}
      {/each}
    </div>
  </figcaption>
</figure>

<style>
  .filter-black {
    filter: brightness(0%);
  }
</style>
