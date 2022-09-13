<script lang="ts">
  export let isSelected = false;
</script>

<button
  class="bg-black py-1 px-2"
  class:bg-white={isSelected}
  class:text-black={isSelected}
  on:click
>
  <slot />
</button>
