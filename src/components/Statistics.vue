<template>
  <div class="bg-veryLightGray py-16 p-6 -mt-20">
    <ul id="link-items"></ul>
    <div class="container">
      <div class="text-center max-w-sm lg:max-w-lg mx-auto my-20">
        <h2 class="text-3xl text-black font-bold inline-block mb-4">
          Advanced Statistics
        </h2>
        <p class="text-grayishViolet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <ul
        class="
          flex flex-col
          lg:flex-row
          gap-y-20 gap-x-8
          items-center
          lg:justify-center
          relative
        "
      >
        <li
          class="
            recognition
            max-w-20
            flex-1
            rounded-md
            bg-white
            text-center
            relative
            pt-20
            p-6
            lg:mb-8 lg:text-left
          "
        >
          <span
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              rounded-full
              bg-darkViolet
              absolute
              -top-12
              xs:left-36
              left-28
              lg:left-8
            "
          >
            <img src="@/assets/images/icon-brand-recognition.svg" />
          </span>
          <h3 class="font-bold text-black text-2xl mb-4">Brand Recognition</h3>
          <p class="text-grayishViolet">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </li>

        <li
          class="
            records
            max-w-20
            flex-1
            rounded-md
            bg-white
            text-center
            relative
            pt-20
            lg:mt-10
            p-6
          "
        >
          <span
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              rounded-full
              bg-darkViolet
              absolute
              -top-12
              xs:left-36
              left-28
              lg:left-8
            "
          >
            <img src="@/assets/images/icon-detailed-records.svg" />
          </span>
          <h3 class="font-bold text-black text-2xl mb-4">Detailed Records</h3>
          <p class="text-grayishViolet">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </li>

        <li
          class="
            max-w-20
            lg:mt-20
            flex-1
            rounded-md
            bg-white
            text-center
            relative
            pt-20
            p-6
          "
        >
          <span
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              rounded-full
              bg-darkViolet
              absolute
              -top-12
              left-28
              xs:left-36
              lg:left-8
            "
          >
            <img src="@/assets/images/icon-fully-customizable.svg" />
          </span>
          <h3 class="font-bold text-black text-2xl mb-4">Fully Customizable</h3>
          <p class="text-grayishViolet">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.recognition::after,
.records::after {
  content: "";
  display: block;
  position: absolute;
  background-color: hsl(180, 66%, 49%);
}

.recognition::after,
.records::after {
  width: 10px;
  height: 100px;
  left: 49%;
  top: 100%;
}

@media only screen and (min-width: 920px) {
  .recognition::after {
    width: 100px;
    height: 10px;
    top: 50%;
    left: 100%;
  }

  .records::after {
    width: 100px;
    height: 10px;
    top: 37%;
    left: 100%;
  }
}
</style>
