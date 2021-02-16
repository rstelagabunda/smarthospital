<template>
  <div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
      >
        <button class="button text-white bg-theme-1 shadow-md mr-2">
          Add New User
        </button>
        <!-- <div class="dropdown">
                            <button class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300">
                                <span class="w-5 h-5 flex items-center justify-center"> <i class="w-4 h-4" data-feather="plus"></i> </span>
                            </button>
                            <div class="dropdown-box w-40">
                                <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                                    <a href="" class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="users" class="w-4 h-4 mr-2"></i> Add Group </a>
                                    <a href="" class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="message-circle" class="w-4 h-4 mr-2"></i> Send Message </a>
                                </div>
                            </div>
                        </div> -->
        <div class="hidden md:block mx-auto text-gray-600">
          Showing {{ users.from }} to {{ users.to }} of
          {{ users.total }} entries
        </div>
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="input w-56 box pr-10 placeholder-theme-13"
              placeholder="Search..."
              v-model="terms"
              @keyup="search($event.keyCode)"
            />
            <i
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              data-feather="search"
            ></i>
          </div>
        </div>
      </div>
      <!-- BEGIN: Users Layout -->

      <div
        v-for="(user, inde) in users.data"
        :key="inde"
        class="intro-y col-span-12 md:col-span-6"
      >
        <div class="box">
          <div class="flex flex-col lg:flex-row items-center p-5">
            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
              <img
                :alt="user.name"
                class="rounded-full"
                :src="user.profile_photo_url"
              />
            </div>
            <div
              class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0"
            >
              <inertia-link
                :href="'userprofile/' + user.id + '/edit'"
                class="text-gray-800 font-semibold"
                >{{ user.name }}</inertia-link
              >
              <div class="text-gray-600 text-xs mt-0.5">{{ user.title }}</div>
            </div>
            <div class="flex mt-4 lg:mt-0">
              <button
                class="button button--sm text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300"
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BEGIN: Users Layout -->
    <!-- END: Pagination -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      v-if="users.total > users.per_page"
      class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="flex-1 flex justify-between sm:hidden">
        <a
          :href="users.prev_page_url"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Previous
        </a>
        <a
          :href="users.next_page_url"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Next
        </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div></div>
        <div>
          <nav
            class="relative z-0 inline-flex shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              :href="users.prev_page_url + '&term=' + terms"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: chevron-left -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <div v-for="(page, ind) in users.links" :key="ind">
              <button
                v-if="!page.url && page.label == '...'"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {{ page.label }}
              </button>
              <inertia-link
                v-if="ind != 0 && ind != users.links.length - 1 && page.url"
                :href="page.url + '&term=' + terms"
                disabled="true"
                :class="
                  '' + page.label == users.current_page
                    ? 'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium  hover:bg-gray-50 bg-theme-1 text-white'
                    : 'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
                "
              >
                {{ page.label }}
              </inertia-link>
            </div>
            <a
              :href="users.next_page_url + '&term=' + terms"
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Next</span>
              <!-- Heroicon name: chevron-right -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>

    <!-- END: Pagination -->
  </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import loadash from "lodash";

export default {
  layout: AppLayout,
  props: ["users", "term"],
  data() {
    return {
      terms: this.term,
    };
  },
  methods: {
    search: loadash.throttle(function (code) {
      if (code != 8 || this.terms.length == 0) {
        this.$inertia.replace(this.route("users", { term: this.terms }));
      }
    }, 200),
  },
};
</script>
