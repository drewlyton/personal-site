<template>
  <div class="post-item relative px-2 py-4 flex-grow">
    <nuxt-link :to="{ name: 'story-slug', params: { slug: story.slug } }">
      <div
        class="mb-4 rounded-2xl overflow-hidden relative"
        :class="{ featured: story.highlighted }"
      >
        <img
          class="w-full"
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

<style scoped lang="scss">
.post-item {
  flex-basis: 28ch;
}
.featured {
  &:after {
    content: "featured";
    position: absolute;
    width: 110px;
    height: 25px;
    @apply bg-gradient-to-br from-red-600 to-yellow-600;
    @apply dark:from-blue-600 dark:to-indigo-600;
    top: 1.15rem;
    left: -1.5rem;
    text-align: center;
    font-size: 12px;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    line-height: 27px;
    transform: rotate(-45deg);
  }
}
@media screen and (min-width: 600px) {
  .post-item:last-child:not(:nth-child(even)) {
    max-width: 50%;
  }
}
</style>
