<template>
  <section id="video" class="info-section">
    <div class="tilted mb-8">
      <div class="space-y-1">
        <h5 class="uppercase">I'm a...</h5>
        <video-ani :no-link="true" />
      </div>
    </div>
    <div>
      <p>
        Whether it's from a set or at my desk, I love making movies. I get a lot
        of joy from capturing moments in time.
      </p>
      <p>Here are some of my latest videos:</p>
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
