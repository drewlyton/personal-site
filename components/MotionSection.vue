<template>
  <section id="motion" class="info-section">
    <div class="tilted mb-8">
      <div class="space-y-1">
        <h5 class="uppercase">I'm a...</h5>
        <motion-ani />
      </div>
    </div>
    <div>
      <p>
        Animation is my favorite way of combining software engineering and video
        production. I love bringing designs to life through motion.
      </p>
      <p>Here is some of my recent work:</p>
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
