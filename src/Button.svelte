<script lang="ts">
  export let isSelected = false;
</script>

<button
  class="bg-black p-1 m-1"
  class:bg-white={isSelected}
  class:text-black={isSelected}
  on:click
>
  <slot />
</button>
