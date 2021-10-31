<template>
  <div>
    <section class="h-screen top-section">
      <div class="h-full relative">
        <div class="page-header">
          <h5>HEY, FRIEND 👋</h5>
          <h2>MY NAME’S DREW</h2>
        </div>
        <div class="flex justify-center">
          <img src="~static/drew.svg" alt="Self portrait" class="max-h-96" />
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
    <section class="pb-4">
      <div class="page-header mb-4">
        <h1>I'M A...</h1>
      </div>
      <div class="pt-4 flex flex-col items-center space-y-12">
        <a href="" class="wave-border bottom"
          ><h2 class="leading-0.75">software engineer</h2></a
        >
        <a href="" class="wave-border bottom"
          ><h2 class="leading-0.75">video producer</h2></a
        >
        <a href="">
          <h2 class="leading-0.75">
            & <span class="wave-border bottom">motion designer</span>
          </h2>
        </a>
        <a href="">
          <h2 class="leading-0.75">
            in <span class="wave-border bottom">charlottesville, va</span>
          </h2>
        </a>
      </div>
    </section>
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
</style>
