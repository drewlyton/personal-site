<template>
  <label for="theme" class="flex items-center cursor-pointer">
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input id="theme" type="checkbox" class="sr-only" @change="this.switch" />
      <!-- line -->
      <div
        class="
          block
          border-dashed border-2 border-black
          w-12
          h-6
          rounded-full
          dark:border-gray-50
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
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    switch(event: InputEvent) {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }
});
</script>

<style scoped></style>
