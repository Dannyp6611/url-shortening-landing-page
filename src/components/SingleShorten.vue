<template>
  <button
    class="
      bg-red
      text-white
      absolute
      -right-2
      -top-2
      flex
      items-center
      justify-center
      w-7
      h-7
      rounded-full
      font-bold
      transform
      transition
      duration-300
      hover:scale-125
    "
    @click="$emit('remove-link', link)"
  >
    <i class="fas fa-times font-bold"></i>
  </button>
  <h4
    class="
      text-black
      border-b-2 border-veryLightGray
      lg:border-transparent
      p-4
      lg:inline-block
      text-sm
      xs:text-base
      sm:text-lg
    "
  >
    {{ link.enteredLink }}
  </h4>
  <div
    class="p-6 flex flex-col flex-1 lg:flex-row lg:justify-end lg:items-center"
  >
    <p class="text-cyan mb-4 lg:mb-0 lg:mr-8 text-sm xs:text-base">
      {{ link.shortenedLink }}
    </p>
    <button
      type="submit"
      class="rounded-md py-2 px-8 w-full lg:w-auto text-white bg-cyan"
      :class="{ 'bg-darkViolet': copied, 'hover:bg-cyan-hover': !copied }"
      @click.prevent="copy"
    >
      <p v-if="!copied">Copy</p>
      <p v-else>Copied!</p>
    </button>
  </div>
</template>

<script>
import useClipboard from "vue-clipboard3";
import { ref } from "vue";

export default {
  props: ["link"],
  emits: ["remove-link", "invalid-url"],
  setup(props, context) {
    const { toClipboard } = useClipboard();
    const copied = ref(false);

    const copy = async () => {
      try {
        await toClipboard(props.link.shortenedLink);
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 5000);
      } catch (error) {
        alert("Could not copy to clipboard, try again later.");
      }
    };

    return { copied, copy };
  },
};
</script>

<style></style>
