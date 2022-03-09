<template>
  <div>
    <section class="h-screen top-section">
      <div class="h-full relative flex flex-col items-center">
        <div class="tilted-header flex-grow-0">
          <div>
            <h5>HEY, FRIEND 👋</h5>
            <h2>MY NAME’S DREW</h2>
          </div>
        </div>
        <div class="flex justify-center flex-grow w-full pb-4">
          <me-apache />
        </div>
        <div class="flex-grow-0 flex flex-col items-center text-gray-500 pb-2">
          <div class="header-font text-sm uppercase">scroll down</div>
          <div><i class="bi bi-mouse-fill"></i></div>
        </div>
      </div>
    </section>
    <section class="h-screen flex flex-col items-center justify-center">
      <div>
        <div class="tilted-header mb-4">
          <h1>I'M A...</h1>
        </div>
        <div class="pt-4 flex flex-col items-center space-y-14">
          <software-ani />
          <video-ani />
          <div class="pt-2">
            <h2 class="leading-0.75 inline-block mr-3">&</h2>
            <motion-ani />
          </div>
          <div class="pt-2">
            <h2 class="leading-0.75 inline-block mr-3">in</h2>
            <life-ani />
          </div>
        </div>
      </div>
    </section>
    <software-section :stories="softwareStories" />
    <video-section :stories="videoStories" />
    <motion-section :stories="motionStories" />
    <life-section :stories="lifeStories" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetStoriesByTag from "../data/GetStoriesByTag";
import metaTags from "../helpers/meta_tags";

export default Vue.extend({
  transition: "home",
  async asyncData({ $graphcms }) {
    const { stories: softwareStories } = await $graphcms.request(
      GetStoriesByTag,
      {
        tags: ["software"]
      }
    );
    const { stories: videoStories } = await $graphcms.request(GetStoriesByTag, {
      tags: ["video"]
    });
    const { stories: motionStories } = await $graphcms.request(
      GetStoriesByTag,
      {
        tags: ["motion"]
      }
    );
    const { stories: lifeStories } = await $graphcms.request(GetStoriesByTag, {
      tags: ["life"]
    });
    return {
      softwareStories,
      videoStories,
      motionStories,
      lifeStories
    };
  },

  head() {
    return {
      title: "Drew Lytle",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "My name's Drew. I'm a designer and software engineer who likes to make stuff on the internet. I make videos and write about things I'm learning."
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        }
      ].concat(
        metaTags(
          "image",
          "https://media.graphcms.com/output=format:jpg/resize=,width:400,height:400/Rxt3c6FaT4uTu7iYkkkC"
        ),
        metaTags(
          "description",
          "My name's Drew. I'm a designer and software engineer who likes to make stuff on the internet. I make videos and write about things I'm learning."
        ),
        metaTags("title", "Drew Lytle")
      )
    };
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
.info-section {
  @apply pb-16 max-w-prose mx-auto;
}
</style>
