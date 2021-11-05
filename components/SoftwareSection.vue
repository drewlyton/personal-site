<template>
  <section id="software" class="info-section">
    <div class="tilted mb-8">
      <div class="space-y-1">
        <h5 class="uppercase">I'm a...</h5>
        <software-ani :no-link="true" />
      </div>
    </div>
    <div>
      <p>
        I love building digital products. My favorite medium is the web, but I’m
        always learning new technologies that can help bring my ideas to life.
      </p>
      <p>Here are some of my latest projects:</p>
    </div>
    <div class="flex flex-wrap items-start">
      <story v-for="story in stories" :key="story.slug" :story="story"></story>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Story from "~/types/Story";

export default Vue.extend({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    stories: {
      type: Array as () => Story[]
    }
  }
});
</script>

<style scoped></style>
