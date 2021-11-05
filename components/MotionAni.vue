<template>
  <div class="relative inline-block">
    <div class="absolute -top-10 left-4">
      <svg
        viewBox="0 0 192 53"
        stroke="currentColor"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="12rem"
        height="100%"
      >
        <g id="left-puppet">
          <path
            d="M26.6523 13.4052L2.99976 50.6451M47.1262 12.3717L71.4883 48.6895M46.6821 23.4081L52.4368 48.1494M28.1552 23.3421L30.6568 33.2286"
          />
          <rect
            x="23.3107"
            y="22.2926"
            width="28.6529"
            height="6.19523"
            transform="rotate(-30.3205 23.3107 22.2926)"
          />
          <rect
            x="25.0996"
            y="8.7804"
            width="28.653"
            height="6.19523"
            transform="rotate(25.934 25.0996 8.7804)"
          />
        </g>
        <g id="right-puppet" transform="translate(0, 7)">
          <path
            d="M146.5 7.35501L122.847 44.5949M166.974 6.32143L191.336 42.6393M166.529 17.3579L172.284 42.0992M148.003 17.2919L146.09 38.9158"
          />
          <rect
            x="143.158"
            y="16.2424"
            width="28.6529"
            height="6.19523"
            transform="rotate(-30.3205 143.158 16.2424)"
          />
          <rect
            x="144.947"
            y="2.73016"
            width="28.653"
            height="6.19523"
            transform="rotate(25.934 144.947 2.73016)"
          />
        </g>
      </svg>
    </div>
    <h2 class="leading-0.75">
      <a
        :href="link"
        :class="[noLink ? '' : 'wave-border', 'bottom inline-block']"
      >
        <div id="motion-title" class="inline-block">motion</div>
        <div id="designer-title" class="inline-block">designer</div>
      </a>
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";

export default Vue.extend({
  props: {
    noLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    link() {
      return this.noLink ? null : "#motion";
    }
  },
  mounted() {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline
      .to("#left-puppet, #motion-title", { y: 2, ease: "power1.inOut" })
      .to("#right-puppet", { y: 5, ease: "power1.inOut" }, "<")
      .to("#designer-title", { y: -2, ease: "power1.inOut" }, "<")
      .timeScale(0.8);
  }
});
</script>

<style scoped></style>
