<template>
  <footer class="px-4 bottom-0 fixed w-full z-50">
    <div
      class="
        box-border
        container
        mx-auto
        max-w-screen-lg
        flex
        items-center
        pb-3
        pt-2
        px-2
        wave-border
        top
        solid
      "
    >
      <div class="flex-grow flex items-center space-x-4">
        <div class="header-font leading-none uppercase">Find me on:</div>
        <a href="https://twitter.com/itsjustdrewit" target="_blank">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://www.youtube.com/c/Curiository" target="_blank">
          <i class="bi bi-youtube"></i>
        </a>
        <a href="https://github.com/aml3ed" target="_blank">
          <i class="bi bi-github"></i>
        </a>
      </div>
      <div class="flex-grow-0">
        <button @click="copyEmail">
          <i class="bi bi-envelope-fill mr-1.5 mb-0.5"></i>
          Contact Me
        </button>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    copyEmail() {
      if (process.client) {
        /* Copy the text inside the text field */
        navigator.clipboard.writeText("drew@lumastic.com").then(
          function () {
            console.log("Copied successfully!");
            alert("Copied drew@lumastic.com to your clipboard!");
          },
          function (err) {
            console.error("Async: Could not copy text: ", err);
            alert(
              "Sorry! I couldn't copy my email to your clipboard. It's drew@lumastic.com"
            );
          }
        );
        /* Alert the copied text */
      }
    }
  }
});
</script>

<style scoped></style>
