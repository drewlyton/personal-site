<template>
  <label for="theme" class="flex items-center cursor-pointer">
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input
        id="theme"
        type="checkbox"
        class="sr-only"
        :checked="checked"
        @change="this.switch"
      />
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
  data() {
    return {
      theme: "",
      checked: false
    };
  },
  watch: {
    theme(newVal) {
      if (newVal === "midnight") {
        this.checked = true;
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "midnight");
      } else {
        this.checked = false;
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "apache");
      }
    }
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "apache";
    this.checked = this.theme === "midnight";
  },
  methods: {
    switch(event: InputEvent) {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        this.theme = "midnight";
      } else {
        this.theme = "apache";
      }
    }
  }
});
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(140%);
  @apply bg-gradient-to-br from-blue-600 to-indigo-600;
}
</style>
