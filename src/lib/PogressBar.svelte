<script lang="ts">
  import { onDestroy } from "svelte";
  import { navigating } from "$app/stores";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { navigationState } from "./store/index.js";

  export let color = "red";
  export let height = "0.125em";
  export let exitDelay = 500; // exit delay in milliseconds
  export let startPosition = 0; // initial position (0 to 1)

  let showTopLoader = false;

  const progress = tweened(startPosition, {
    duration: 0,
    easing: cubicOut,
  });

  const unsubscribe = navigationState.subscribe(
    (state: "loading" | "loaded" | null) => {
      if (state === "loaded") progress.set(1, { duration: exitDelay });
    }
  );

  onDestroy(() => {
    unsubscribe();
  });

  $: if ($navigating) {
    $navigationState = "loading";
    showTopLoader = true;
    progress.set(0.8, { duration: 5000 });
  } else {
    $navigationState = "loaded";
    setTimeout(() => {
      showTopLoader = false;
      progress.set(startPosition, { duration: 0 });
    }, exitDelay+10 );
    
  }
</script>

{#if showTopLoader}
  <div
    class="wrrapper"
    out:fly|local={{ delay: 500, duration: 1000, y: -8, opacity: 0 }}
  >
    <div
      class={"bar"}
      style={`height: ${height}; transform: scaleX(${$progress}); transform-origin: center left; background-color: ${color}`}
    />
  </div>
{/if}

<style>
  .wrrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
  }
  .bar {
    height: 100%;
  }
</style>
