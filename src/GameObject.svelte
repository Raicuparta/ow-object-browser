<script lang="ts">
  const onClick = () => {
    console.log("clicked");
    navigator.clipboard.writeText(path);
    selectText();
  };

  export let path: string;
  export let file: string;

  let objectName = "";

  $: {
    const pathParts = String(path).split("/");
    objectName = pathParts[pathParts.length - 1];
  }

  let pathElement: HTMLSpanElement;

  function selectText() {
    var range = document.createRange();
    range.selectNode(pathElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
</script>

<button
  class="overflow-hidden text-left p-2 border border-black"
  on:click={onClick}
>
  <img
    class="m-auto icon-outline bg-white"
    alt={path}
    src="./objects/{file}"
    loading="lazy"
  />
  <code bind:this={pathElement} class="break-words text-xs">
    {objectName}
  </code>
</button>
