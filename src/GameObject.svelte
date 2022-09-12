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
  class="overflow-hidden text-left m-2 p-2 border border-black"
  on:click={onClick}
>
  <img
    class="m-auto icon-outline bg-white"
    width={100}
    height={100}
    alt={path}
    src="./objects/dark-bramble/{file}"
    loading="lazy"
  />
  <code bind:this={pathElement} class="break-words text-xs">
    {objectName}
  </code>
</button>
