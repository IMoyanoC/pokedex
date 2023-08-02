<script>
  import pikachu from "./lib/pikachu.png";
  import pichu from "./lib/pichu.png";
  import raichu from "./lib/raichu.png";
  import Carta from "./components/carta.svelte";
  let name = "Pikachu";
  let types = ["electr", "normal"];
  let description =
    "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.";
  let number = "025";
  let image = pikachu;
  let evolutions = ["pichu", "pikachu", "raichu"];

  let cardProps = {
    name,
    description,
    number,
    image,
    evolutions,
    pikachu,
    pichu,
    raichu,
  };
</script>

<main class="flex h-screen w-full flex-col bg-neutral-50">
  <div class="flex justify-center">
    <!-- search bar -->
    <div
      class="group my-7 flex h-8 w-[20rem] justify-start gap-2 rounded-full px-2 align-middle ring-1 ring-slate-200 transition-colors hover:bg-slate-200 hover:ring-0"
    >
      <i
        class="material-icons select-none self-center text-zinc-500 group-hover:text-zinc-700"
        style="font-size: 1rem;"
        >search
      </i>
      <input
        type="text"
        class="gro basis-full select-none bg-transparent font-mono text-sm text-zinc-500 placeholder-zinc-300 outline-none group-hover:text-zinc-700 group-hover:placeholder-zinc-400"
        placeholder="click me"
      />
    </div>
  </div>
  <!-- panel -->
  <section class="flex w-full basis-full flex-col justify-center">
    <Carta {...cardProps} />
  </section>
</main>

<style>
  .filter-black {
    filter: brightness(0%);
  }
</style>
