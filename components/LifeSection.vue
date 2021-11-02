<template>
  <section id="life" class="info-section">
    <div class="tilted mb-8">
      <div class="space-y-1">
        <h5 class="uppercase">living in...</h5>
        <life-ani />
      </div>
    </div>
    <div>
      <p>
        Home to me is being in the Blue Ridge Mountains with my girlfriend and
        my dog. Outside of work, I love board sports, cooking, and visiting
        friends.
      </p>
      <p>Here are some of my latest adventures:</p>
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

<style scop LifeAnied></style>
