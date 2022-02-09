<template>
  <h2 id="software-header" class="leading-0.75">
    &#60;
    <a
      :href="link"
      :class="[noLink ? '' : 'wave-border', 'bottom inline-block relative']"
    >
      product engineer
    </a>
    &#62;
  </h2>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import { SplitText } from "~/static/gsap/SplitText";

export default Vue.extend({
  props: {
    noLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    link() {
      return this.noLink ? null : "#software";
    }
  },
  mounted() {
    gsap.registerPlugin(SplitText);
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    const mySplitText = new SplitText("#software-header", {
      type: "words"
    });
    mySplitText.words[0].classList.add("left-bracket");
    mySplitText.words[3].classList.add("right-bracket");
    mySplitText.words[4].classList.add("left-bracket");
    mySplitText.words[7].classList.add("right-bracket");
    timeline
      .set(".left-bracket", { y: 2 })
      .set(".right-bracket", { y: 5 })
      .to(".left-bracket", { y: 5, ease: "power1.inOut" })
      .to(".right-bracket", { y: 2, ease: "power1.inOut" }, "<")
      .timeScale(0.7);
  }
});
</script>

<style scoped></style>
