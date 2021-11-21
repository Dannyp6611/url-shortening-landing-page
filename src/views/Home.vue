<template>
  <main>
    <HeroSection />
    <ShortenLink />
    <Statistics />
    <Boost />
  </main>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import ShortenLink from "../components/ShortenLink.vue";
import Statistics from "../components/Statistics.vue";
import Boost from "../components/Boost.vue";

export default {
  name: "Home",
  components: { HeroSection, ShortenLink, Statistics, Boost },
};
</script>
