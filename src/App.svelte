<script>
  import pikachu from "./lib/pokemon-pikachu-960x720.webp";
</script>

<main class="flex h-screen w-full flex-col">
  <div class="flex justify-center bg-slate-100">
    <!-- search bar -->
    <div
      class="my-7 flex h-5 w-[20rem] justify-start rounded-full bg-slate-200 px-1 align-middle"
    >
      <i
        class="material-icons select-none self-center text-zinc-700"
        style="font-size: 1rem;"
        >search
      </i>
      <input
        type="text"
        class="basis-full select-none bg-transparent font-mono text-sm outline-none"
        placeholder="search"
      />
    </div>
  </div>

  <!-- panel -->
  <div class="flex w-full basis-full justify-center bg-red-100">
    <!-- cuadro gral -->
    <div
      class="flex h-[30rem] w-[20rem] self-center overflow-hidden rounded-3xl bg-sky-100 shadow-md"
    >
      <!-- imagen -->
      <div class="">
        <img src={pikachu} alt="" class="" />
      </div>
      <!-- clases -->
      <div />
    </div>
  </div>
</main>
