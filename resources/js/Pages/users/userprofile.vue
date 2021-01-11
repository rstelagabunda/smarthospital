<template>
  <div>
    <div class="intro-y box px-5 pt-5 mt-5">
      <div
        class="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5"
      >
        <div
          class="flex flex-1 px-5 items-center justify-center lg:justify-start"
        >
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              :src="user.profile_photo_url"
            />
            <div
              class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-theme-1 rounded-full p-2"
            >
                            <icon icon="camera" folder="outline" color="text-white "/>

            </div>
          </div>
          <div class="ml-5">
            <div
              class="w-24 sm:w-40 truncate sm:whitespace-normal font-semibold text-lg"
            >
              {{ user.name }}
            </div>
            <div class="text-gray-600">{{ user.title }}</div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 dark:text-gray-300 px-5 border-l border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0"
        >
          <div class="font-semibold text-center lg:text-left lg:mt-5">
            Contact Details
          </div>
          <div
            class="flex flex-col justify-center items-center lg:items-start mt-4"
          >
            <div class="truncate sm:whitespace-normal flex items-center">
              <icon :icon="'mail'" :folder="'solid'"/>
              
              {{ user.email }}
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              
              <icon :icon="'phone'" :folder="'outline'"/>
              {{ user.phone }}
            </div>
            <!-- <div class="truncate sm:whitespace-normal flex items-center mt-3"> <i data-feather="twitter" class="w-4 h-4 mr-2"></i> Twitter Arnold Schwarzenegger </div> -->
          </div>
        </div>
      </div>
      <div
        class="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start"
      >
        <a
          data-toggle="tab"
          data-target="#dashboard"
          href="javascript:;"
          class="py-4 sm:mr-8 active"
          >Dashboard</a
        >
        <a
          data-toggle="tab"
          data-target="#account-and-profile"
          href="javascript:;"
          class="py-4 sm:mr-8"
          >Account & Profile</a
        >
        <a
          data-toggle="tab"
          data-target="#activities"
          href="javascript:;"
          class="py-4 sm:mr-8"
          >Activities</a
        >
        <a
          data-toggle="tab"
          data-target="#tasks"
          href="javascript:;"
          class="py-4 sm:mr-8"
          >Tasks</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import icon from "@/components/icon";

export default {
  layout: AppLayout,
  components:{
      icon
  },
  props: ["user"],
};
</script>

<style>
</style>