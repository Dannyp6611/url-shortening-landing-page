<template>
  <div
    class="
      rounded-lg
      p-8
      w-11/12
      lg:max-w-6xl
      mx-auto
      mb-6
      relative
      z-20
      bg-shorten-pattern-mobile
      lg:bg-shorten-pattern-desktop
      bg-cover bg-right-bottom bg-no-repeat
      lg:bg-center
      bg-darkViolet
    "
  >
    <form
      class="flex flex-col gap-y-4 md:flex-row gap-x-6 flex-wrap"
      @submit.prevent="handleSubmit"
    >
      <input
        type="text"
        placeholder="Shorten a link here..."
        v-model.trim="link"
        class="
          md:flex-1
          flex
          p-4
          rounded-md
          focus:outline-none
          border-2 border-transparent
        "
        :class="{
          'border-2': errorMsg,
          'border-red': errorMsg,
          'placeholder-red': errorMsg,
        }"
      />
      <p v-if="errorMsg" class="text-red lg:w-full lg:order-1">
        {{ errorMsg }}
      </p>
      <button
        type="submit"
        class="
          rounded-md
          py-2
          px-8
          text-white
          bg-cyan
          hover:bg-cyan-hover
          focus:outline-none
        "
      >
        Shorten it!
      </button>
    </form>
  </div>
  <teleport to="#link-items" v-if="isMounted">
    <li
      v-for="(item, index) in shortenedLinksArr"
      :key="index"
      class="
        rounded-lg
        w-10/12
        lg:max-w-6xl
        mx-auto
        my-6
        bg-white
        relative
        shadow-sm
        lg:flex lg:items-center
      "
    >
      <SingleShorten :link="item" @remove-link="removeLinkItem" />
    </li>
  </teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
import SingleShorten from "./SingleShorten.vue";
import { onMounted } from "@vue/runtime-core";

export default {
  components: { SingleShorten },
  setup() {
    const link = ref(null);
    const errorMsg = ref(null);
    const successMsg = ref(null);
    const isMounted = ref(false);

    onMounted(() => {
      isMounted.value = true;
    });

    let localStorageShortenedLinks =
      localStorage.getItem("savedLinks") === null
        ? []
        : JSON.parse(localStorage.getItem("savedLinks"));
    const shortenedLinksArr = ref([...localStorageShortenedLinks]);

    const handleSubmit = async () => {
      if (!link.value) {
        errorMsg.value = "Please add a link";
        setTimeout(() => {
          errorMsg.value = null;
        }, 5000);
        return;
      }
      try {
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${link.value}`
        );
        const data = await res.json();
        if (!data.ok) {
          throw error("Could not complete shortened link, try again later.");
        }
        shortenedLinksArr.value.push({
          enteredLink: data.result.original_link,
          shortenedLink: data.result.full_short_link,
        });
        localStorage.setItem(
          "savedLinks",
          JSON.stringify([...shortenedLinksArr.value])
        );
        link.value = null;
      } catch (err) {
        alert(`ERROR: ${err.message}`);
      }
    };

    const removeLinkItem = (linkItem) => {
      shortenedLinksArr.value = shortenedLinksArr.value.filter(
        (item) => linkItem.shortenedLink !== item.shortenedLink
      );
      localStorage.setItem(
        "savedLinks",
        JSON.stringify(shortenedLinksArr.value)
      );
    };

    return {
      link,
      handleSubmit,
      errorMsg,
      successMsg,
      shortenedLinksArr,
      isMounted,
      removeLinkItem,
    };
  },
};
</script>

<style></style>
