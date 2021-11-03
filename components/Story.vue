<template>
  <div class="post-item relative px-2 py-4 flex-grow">
    <nuxt-link :to="{ name: 'story-slug', params: { slug: story.slug } }">
      <div class="mb-4 rounded-2xl overflow-hidden">
        <img
          :src="story.featuredImage.url"
          :alt="`${story.title} featured image`"
        />
      </div>
      <h4 class="leading-none header-font uppercase">
        {{ story.title }}
      </h4>
      <div class="text-gray-500 mb-2 text-xs dark:text-gray-300">
        <em>{{
          new Date(story.createdAt).toLocaleString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        }}</em>
      </div>
      <p class="text-black dark:text-white">{{ story.description }}</p>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Story from "../types/Story";

export default Vue.extend({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    story: {
      type: Object as () => Story,
      required: true
    }
  }
});
</script>

<style scoped>
.post-item {
  flex-basis: 24ch;
  max-width: 50%;
}
</style>
