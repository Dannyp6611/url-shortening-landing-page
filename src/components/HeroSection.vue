<template>
  <div
    class="
      container
      pl-4
      py-16
      flex flex-col
      xl:flex-row-reverse
      items-center
      relative
    "
  >
    <img
      src="@/assets/images/illustration-working.svg"
      class="flex xl:flex-1 relative -right-8 lg:-right-20"
    />
    <div class="flex flex-col xl:flex-1 gap-y-2 items-center xl:items-start">
      <h1
        class="
          text-4xl
          lg:text-6xl
          text-veryDarkViolet
          font-bold
          my-6
          xl:mb-2
          text-center
          xl:text-left
          max-w-lg
        "
      >
        More than just shorter links
      </h1>
      <p
        class="
          text-md text-grayishViolet
          max-w-full
          lg:max-w-md
          text-center
          xl:text-left
        "
      >
        Build your brand's recognition and get detailed insights on how your
        links are performing
      </p>
      <button
        class="
          hover:bg-cyan-hover
          px-6
          py-2
          mt-4
          rounded-full
          bg-cyan
          text-white
          focus:outline-none
        "
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
