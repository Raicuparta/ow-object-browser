<script lang="ts">
  import GameObject from "./GameObject.svelte";

  let objectRecord: Record<string, string> = {};
  let filteredObjectList: [string, string][];
  let filter = "";
  let filterDebounceTimer = -1;

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
  }

  const setFilterDebounce = (value) => {
    clearTimeout(filterDebounceTimer);
    filterDebounceTimer = setTimeout(() => {
      filter = value;
    }, 300);
  };
</script>

<main class="m-auto p-4">
  <input
    class="p-2 mb-2"
    placeholder="Filter"
    on:keyup={({ currentTarget: { value } }) => setFilterDebounce(value)}
  />
  <div class="grid grid-cols-4">
    {#each filteredObjectList as [file, path]}
      <GameObject {file} {path} />
    {/each}
  </div>
</main>
