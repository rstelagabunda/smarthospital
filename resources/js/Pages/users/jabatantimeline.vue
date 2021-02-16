<template>
  <div class="container mx-auto w-full h-full">
    <div class="relative wrap overflow-hidden p-10 h-full">
      <div
        class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
        style="left: 50%"
      ></div>
      <!-- right timeline -->
      <div v-for="(jab, ind) in 10" :key="ind">
        <div
          class="mb-8 flex justify-between items-center w-full"
          :class="
            ind % 2 == 0
              ? ['flex-row-reverse', 'left-timeline']
              : ['right-timeline']
          "
        >
          <div class="order-1 w-5/12"></div>
          <div
            class="z-20 flex items-center order-1 text-indigo-900 px-2 rounded-full"
            :class="ind % 2 == 0 ? ['bg-indigo-200'] : ['bg-white']"
          >
            <h1 class="mx-auto font-semibold text-md">
              {{ "2010-01-01" | diffdate }}
            </h1>
          </div>
          <div
            class="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
            :class="ind % 2 == 0 ? ['bg-indigo-400'] : ['bg-white']"
          >
            <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
            <p
              class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
            >
              type specimen book.
            </p>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</template>

<script>
export default {
  props: ["userprofile"],
};
</script>

<style>
</style>