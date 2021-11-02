<template>
  <div>
    <section class="top-section max-w-prose mx-auto">
      <div class="tilted mb-8">
        <div class="space-y-1">
          <nuxt-link to="/stories" class="text-gray-500 dark:text-gray-300"
            ><small class="header-font uppercase">
              <i class="bi bi-arrow-left"></i> All Stories
            </small></nuxt-link
          >
          <h2 class="uppercase">{{ story.title }}</h2>
        </div>
      </div>
      <div class="mb-6 story-content" v-html="story.content.html"></div>
      <div>
        <h5 class="header-font mb-4">Best,</h5>
        <div class="flex items-start space-x-4">
          <div>
            <img
              :src="story.author.picture.url"
              :alt="story.author.name"
              width="68px"
            />
          </div>
          <div class="flex flex-col mb-6">
            <h5 class="header-font uppercase leading-none mt-1">
              {{ story.author.name }}
            </h5>
            <small class="text-gray-500 mb-2 text-xs dark:text-gray-300"
              ><em>{{
                new Date(story.createdAt).toLocaleString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })
              }}</em></small
            >
            <p class="text-gray-600 text-sm dark:text-gray-100">
              {{ story.author.bio }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetStory from "../../data/GetStory";

export default Vue.extend({
  transition: "home",
  async asyncData({ $graphcms, params }) {
    const { slug } = params;
    const { story } = await $graphcms.request(GetStory, { slug });
    return { story };
  }
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
