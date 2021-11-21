<template>
  <header class="container flex items-center py-8 px-6">
    <img src="@/assets/images/logo.svg" class="mr-12 w-32 lg:w-40 h-auto" />
    <nav class="flex items-center w-full font-bold">
      <ul class="hidden lg:flex gap-x-4 text-grayishViolet text-sm">
        <li class="hover:text-veryDarkViolet">
          <router-link to="/">Features</router-link>
        </li>
        <li class="hover:text-veryDarkViolet">
          <router-link to="/">Pricing</router-link>
        </li>
        <li class="hover:text-veryDarkViolet">
          <router-link to="/">Resources</router-link>
        </li>
      </ul>
      <div class="hidden lg:flex flex-1 justify-end gap-x-4 text-sm">
        <button
          class="bg-transparent text-gray font-bold hover:text-veryDarkViolet"
        >
          Login
        </button>
        <button
          class="
            hover:bg-cyan-hover
            px-4
            py-2
            rounded-full
            bg-cyan
            text-white
            focus:outline-none
          "
        >
          Sign Up
        </button>
      </div>
      <button
        class="
          flex
          items-center
          flex-1
          justify-end
          lg:hidden
          bg-transparent
          focus:outline-none
          text-grayishViolet text-4xl
        "
        @click="toggleMobileNav"
      >
        <i v-if="!mobileActive" class="fas fa-bars"></i>
        <i v-if="mobileActive" class="fas fa-times"></i>
      </button>
    </nav>
  </header>
  <mobileNav v-if="isMobile" :isActive="mobileActive" />
</template>

<script>
import mobileNav from "./MobileNav.vue";
import { ref } from "vue";

export default {
  components: { mobileNav },
  setup() {
    const mobileActive = ref(false);
    const isMobile = ref(true);
    const windowWidth = ref(null);

    const checkScreen = () => {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value > 920) {
        isMobile.value = false;
        return;
      }
      isMobile.value = true;
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    const toggleMobileNav = () => {
      mobileActive.value = !mobileActive.value;
    };

    return { mobileActive, isMobile, toggleMobileNav };
  },
};
</script>

<style></style>
