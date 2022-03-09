<template>
  <section class="top-section">
    <div class="tilted-header">
      <h1 class="uppercase mb-4">Stories</h1>
    </div>
    <div class="mx-auto max-w-prose">
      <story
        v-for="story in highlighted"
        :key="story.slug"
        :story="story"
      ></story>

      <div class="px-2 mt-4">
        <h5 class="mb-2">ALL STORIES</h5>
        <div
          class="
            border border-gray-700
            dark:border-gray-200
            rounded-lg
            flex
            items-center
            px-3
            py-2
            focus-within:ring-2 focus-within:ring-red-300
            dark:focus-within:ring-indigo-300
            mb-6
          "
        >
          <i class="bi bi-search mr-4"></i>
          <input
            type="text"
            placeholder="Search stories..."
            class="flex-grow focus:outline-none"
            @input="updateSearch"
          />
        </div>
      </div>

      <div class="flex flex-wrap items-start">
        <story
          v-for="story in filterStories(stories)"
          :key="story.slug"
          :story="story"
        ></story>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import metaTags from "../helpers/meta_tags";
import GetStories from "../data/GetStories";
import GetHighlighted from "../data/GetHighlighted";
import Story from "../types/Story";

export default Vue.extend({
  transition: "home",
  async asyncData({ $graphcms }) {
    const { stories } = await $graphcms.request(GetStories);
    const { stories: highlighted } = await $graphcms.request(GetHighlighted);
    return { stories, highlighted };
  },
  data() {
    return {
      searchString: "",
      fetchedStories: [] as Story[]
    };
  },
  head() {
    return {
      title: "Stories | Drew Lytle",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "My name's Drew. I'm a designer and software engineer who likes to make stuff on the internet. I make videos and write about things I'm learning."
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
        metaTags("title", "Stories | Drew Lytle"),
        metaTags("url", "https://www.drewis.cool/stories")
      )
    };
  },
  methods: {
    updateSearch(e: Event) {
      const target = e.target as HTMLInputElement;
      this.searchString = target.value;
    },
    filterStories(storiesArray: Array<Story>): Array<Story> | boolean {
      if (!storiesArray) return false;
      return storiesArray.filter((story: Story): Boolean => {
        return (
          story.title.toLowerCase().includes(this.searchString) ||
          story.description.toLowerCase().includes(this.searchString)
        );
      });
    }
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
