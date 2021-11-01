<template>
  <div>
    <section class="h-screen top-section">
      <div class="h-full relative">
        <div class="tilted-header">
          <div>
            <h5>HEY, FRIEND 👋</h5>
            <h2>MY NAME’S DREW</h2>
          </div>
        </div>
        <div class="flex justify-center">
          <me-apache />
        </div>
        <div
          class="
            w-full
            bottom-2
            absolute
            flex flex-col
            items-center
            text-gray-500
          "
        >
          <div class="header-font text-sm uppercase">scroll down</div>
          <div><i class="bi bi-mouse-fill"></i></div>
        </div>
      </div>
    </section>
    <section class="mb-24" style="min-height: 60vh">
      <div class="tilted-header mb-4">
        <h1>I'M A...</h1>
      </div>
      <div class="pt-4 flex flex-col items-center space-y-12">
        <h2 class="leading-0.75">
          <a href="#software" class="wave-border bottom inline-block">
            software engineer
          </a>
        </h2>
        <h2 class="leading-0.75">
          <a href="#video" class="wave-border bottom inline-block"
            >video producer</a
          >
        </h2>
        <h2 class="leading-0.75">
          &
          <a href="#motion" class="wave-border bottom inline-block">
            motion designer
          </a>
        </h2>
        <h2 class="leading-0.75">
          in
          <a href="#life" class="wave-border bottom inline-block">
            charlottesville, va
          </a>
        </h2>
      </div>
    </section>
    <software-section />
    <video-section />
    <motion-section />
    <life-section />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  transition: "home"
});
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.info-section {
  @apply pb-24 max-w-prose mx-auto;
}
</style>
