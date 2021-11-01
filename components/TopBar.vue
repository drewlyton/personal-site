<template>
  <nav class="px-4 top-0 fixed w-full z-50 box-border">
    <div
      class="
        container
        mx-auto
        max-w-screen-lg
        flex
        items-center
        py-4
        px-5
        wave-border
        bottom
        solid
      "
    >
      <logo />
      <div
        class="
          flex-grow
          items-end
          justify-end
          flex
          space-x-6
          header-font
          uppercase
        "
      >
        <nuxt-link to="/stories" exact class="leading-none wave-border bottom"
          >Stories</nuxt-link
        >
        <div>
          <theme-switch />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
