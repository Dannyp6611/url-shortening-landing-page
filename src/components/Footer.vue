<template>
  <footer class="bg-veryDarkViolet py-12 px-4">
    <div
      class="container flex flex-col items-center lg:flex-row lg:items-start"
    >
      <img src="@/assets/images/logolight.svg" class="mb-8 lg:mb-0 lg:mr-32" />
      <div class="flex flex-col lg:flex-row w-full gap-y-10">
        <ul class="flex-1 text-center lg:text-left">
          <h4 class="text-white font-bold mb-3">Features</h4>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Link Shortening</router-link>
          </li>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Branded Links</router-link>
          </li>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Analytics</router-link>
          </li>
        </ul>
        <ul class="flex-1 text-center lg:text-left">
          <h4 class="text-white font-bold mb-3">Resources</h4>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Blog</router-link>
          </li>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Developers</router-link>
          </li>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Support</router-link>
          </li>
        </ul>
        <ul class="flex-1 text-center lg:text-left">
          <h4 class="text-white font-bold mb-3">Company</h4>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">About</router-link>
          </li>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Our Team</router-link>
          </li>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Careers</router-link>
          </li>
          <li class="text-gray hover:text-cyan">
            <router-link to="/">Contact</router-link>
          </li>
        </ul>
        <ul
          class="
            flex-1 flex flex-row
            justify-center
            items-center
            gap-x-6
            lg:items-start
          "
        >
          <li>
            <router-link
              to="/"
              class="
                no-underline
                text-white
                hover:text-cyan
                text-2xl
                lg:text-3xl
              "
            >
              <i class="fab fa-facebook-square"></i>
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="
                no-underline
                text-white
                hover:text-cyan
                text-2xl
                lg:text-3xl
              "
            >
              <i class="fab fa-twitter"></i>
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="
                no-underline
                text-white
                hover:text-cyan
                text-2xl
                lg:text-3xl
              "
            >
              <i class="fab fa-pinterest"></i>
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="
                no-underline
                text-white
                hover:text-cyan
                text-2xl
                lg:text-3xl
              "
            >
              <i class="fab fa-instagram"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
