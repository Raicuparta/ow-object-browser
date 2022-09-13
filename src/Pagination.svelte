<script lang="ts">
  import Button from "./Button.svelte";

  export let pageCount = 0;
  export let currentPage = 0;
</script>

<div class="flex flex-wrap gap-2">
  {#each Array(pageCount) as _, pageIndex}
    <Button
      isSelected={pageIndex == currentPage}
      on:click={() => (currentPage = pageIndex)}
    >
      {pageIndex}
    </Button>
  {/each}
</div>
