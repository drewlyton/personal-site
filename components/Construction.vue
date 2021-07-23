<template>
  <div
    class="p-10 bg-white max-w-md mx-auto rounded-xl shadow-xl flex flex-col"
  >
    <div class="mx-auto block"><avatar /></div>
    <div class="block">
      <h1 class="text-5xl font-bold mt-4 mb-4">
        <span role="img" aria-label="hand wave">👋 </span>
        <span
          class="
            inline
            text-transparent
            bg-clip-text bg-gradient-to-br
            from-red-600
            to-yellow-600
          "
          >Hey
        </span>
        <span
          class="
            inline
            text-transparent
            bg-clip-text bg-gradient-to-br
            from-red-600
            to-yellow-600
          "
          >friend!</span
        >
      </h1>
    </div>
    <p class="text-lg mb-2">
      You've found my personal website 🥳 ! But...there's not much to see here
      yet.
    </p>
    <p class="text-lg mb-2">
      So, here's
      <span class="underline text-red-600 cursor-pointer" @click="copyEmail"
        >my email</span
      >
      if you need to get in contact with me. Now, go enjoy
      <a
        href="https://www.youtube.com/watch?v=s9JZloed6DQ&ab_channel=DodoKids"
        class="underline text-red-600"
        >this video</a
      >
      of a dog learning how to surf.
    </p>
    <p class="text-md text-gray-700">Best,</p>
    <p class="text-md text-gray-700">Drew Lytle</p>
    <input id="my_email" type="text" value="drew@lumastic.com" />
  </div>
</template>

<script>
export default {
  methods: {
    copyEmail() {
      /* Get the text field */
      const copyText = document.getElementById("my_email");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      alert("Copied " + copyText.value + " to your clipboard!");
    }
  }
};
</script>

<style scoped>
#my_email {
  position: absolute;
  left: -9999px;
}
</style>
