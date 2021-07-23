<template>
  <div class="container mx-auto mt-6">
    <construction />
    <!-- <nuxt-link to="about">About Me</nuxt-link> -->
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
