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
          <label for="theme" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input id="theme" type="checkbox" class="sr-only" />
              <!-- line -->
              <div
                class="
                  block
                  border-dashed border-2 border-black
                  w-12
                  h-6
                  rounded-full
                "
              ></div>
              <!-- dot -->
              <div
                class="
                  transition-all
                  dot
                  absolute
                  left-1
                  top-1
                  gradient-bg
                  w-4
                  h-4
                  rounded-full
                "
              ></div>
            </div>
          </label>
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
