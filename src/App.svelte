<script lang="ts">
  import GameObject from "./GameObject.svelte";

  let objectRecord: Record<string, string> = {};
  let filteredObjectList: [string, string][];
  let paginatedObjectList: [string, string][];
  let filter = "";
  let filterDebounceTimer = -1;

  const maxPerMage = 50;
  let currentPage = 0;
  let pageCount = 0;

  $: {
    (async () => {
      objectRecord = (
        await (await fetch("./objects/dark-bramble/objects.json")).json()
      ).Objects;
    })();
  }

  $: {
    filteredObjectList = Object.entries(objectRecord).filter((entry) =>
      entry[1].toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    pageCount = Math.ceil(filteredObjectList.length / maxPerMage);
    currentPage = 0;
  }

  $: {
    paginatedObjectList = filteredObjectList.slice(
      currentPage * maxPerMage,
      currentPage * maxPerMage + maxPerMage
    );
  }

  const setFilterDebounce = (newFilter: string) => {
    clearTimeout(filterDebounceTimer);
    filterDebounceTimer = setTimeout(() => {
      filter = newFilter;
    }, 300);
  };
</script>

<main class="m-auto p-4">
  <input
    class="p-2 mb-2"
    placeholder="Filter"
    on:keyup={({ currentTarget: { value } }) => setFilterDebounce(value)}
  />
  <div class="flex flex-wrap">
    {#each Array(pageCount) as _, pageIndex}
      <button
        class="bg-black p-1 m-1"
        class:bg-white={pageIndex == currentPage}
        class:text-black={pageIndex == currentPage}
        on:click={() => (currentPage = pageIndex)}
      >
        {pageIndex}
      </button>
    {/each}
  </div>
  <div class="grid grid-cols-4">
    {#each paginatedObjectList as [file, path]}
      <GameObject {file} {path} />
    {/each}
  </div>
</main>
