<script lang="ts">
  import Button from "./Button.svelte";
  import GameObject from "./GameObject.svelte";
  import Pagination from "./Pagination.svelte";

  const directories = [
    "cave-twin",
    "comet",
    "dark-bramble",
    "moon",
    "ring-world",
    "timber-hearth",
    "tower-twin",
  ];

  let objectRecords: Record<string, Record<string, string>> = {};
  let filteredObjectList: [string, string][];
  let paginatedObjectList: [string, string][];
  let filter = "";
  let filterDebounceTimer = -1;

  let itemsPerPage = 52;
  let currentPage = 0;
  let pageCount = 0;
  let selectedDirectory = "timber-hearth";
  const minItemsPerPage = 10;

  $: {
    (async () => {
      for (const directory of directories) {
        objectRecords[directory] = (
          await (await fetch(`./objects/${directory}/objects.json`)).json()
        ).Objects;
      }
    })();
  }

  $: {
    itemsPerPage = Math.max(itemsPerPage ?? 0, minItemsPerPage);
  }

  $: {
    filteredObjectList = Object.entries(
      objectRecords[selectedDirectory] ?? {}
    ).filter((entry) =>
      entry[1].toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    pageCount = Math.ceil(filteredObjectList.length / itemsPerPage);
    currentPage = 0;
  }

  $: {
    paginatedObjectList = filteredObjectList.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
  }

  const setFilterDebounce = (newFilter: string) => {
    clearTimeout(filterDebounceTimer);
    filterDebounceTimer = setTimeout(() => {
      filter = newFilter;
    }, 300);
  };
</script>

<main class="m-auto p-4 flex flex-col gap-2">
  <div class="flex gap-2">
    {#each directories as directory}
      <Button
        on:click={() => (selectedDirectory = directory)}
        isSelected={selectedDirectory == directory}
      >
        {directory}
      </Button>
    {/each}
  </div>
  <div class="flex flex-wrap gap-4">
    <input
      class="p-2"
      placeholder="Filter"
      on:change={({ currentTarget: { value } }) => setFilterDebounce(value)}
      on:keyup={({ currentTarget: { value } }) => setFilterDebounce(value)}
    />
    <div>
      Items per page:
      <input
        type="number"
        class="w-32 p-2"
        bind:value={itemsPerPage}
        min={minItemsPerPage}
      />
    </div>
  </div>
  <Pagination {pageCount} {currentPage} />
  <p class="my-2">
    Click on an object to copy its full path to your clipboard.
  </p>

  <div class="grid grid-cols-4 gap-2 mb-4">
    {#each paginatedObjectList as [file, path]}
      <GameObject file="{selectedDirectory}/{file}" {path} />
    {/each}
  </div>
  <Pagination {pageCount} {currentPage} />
</main>
