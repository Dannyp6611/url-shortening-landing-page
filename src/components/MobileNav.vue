<template>
  <div
    class="
      w-full
      bg-transparent
      px-6
      fixed
      block
      z-50
      transition-top
      duration-1000
      ease-in-out
    "
    :class="isActive === true ? 'top-24' : '-top-2/3'"
  >
    <div class="bg-darkViolet p-6 rounded-md">
      <ul
        class="
          text-white
          font-bold
          text-center
          pb-6
          border-b border-grayishViolet
        "
      >
        <li class="py-2">Features</li>
        <li class="py-2">Pricing</li>
        <li class="py-2">Resources</li>
      </ul>
      <ul class="pb-2">
        <li class="text-white font-bold text-center py-4">Login</li>
        <button
          class="
            hover:bg-cyan-hover
            py-2
            w-full
            rounded-lg
            bg-cyan
            text-white
            focus:outline-none
          "
        >
          Sign Up
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isActive"],
  setup() {},
};
</script>
