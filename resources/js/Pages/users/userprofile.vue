<template>
  <div>
    <div class="box px-5 pt-5 mt-5">
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
              :src="userprofile.profile_photo_url"
            />
            <div
              class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-theme-1 rounded-full p-2"
            >
              <svg
                class="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <!-- <icon
                icon="camera"
                folder="outline"
                color="text-white"
                x="w-6"
                y="h-6"
              /> -->
            </div>
          </div>
          <div class="ml-5">
            <div
              class="w-24 sm:w-40 truncate sm:whitespace-normal font-semibold text-lg"
            >
              {{ userprofile.name }}
            </div>
            <div class="text-gray-600">{{ userprofile.title }}</div>
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
              <!-- <icon :icon="'mail'" folder="solid" x="w-4" y="mr-2" /> -->
              <svg
                class="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              {{ userprofile.email }}
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <!-- <icon :icon="'phone'" folder="outline" x="w-4" y="mr-2" /> -->
              <svg
                class="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {{ userprofile.phone }}
            </div>
            <!-- <div class="truncate sm:whitespace-normal flex items-center mt-3"> <i data-feather="twitter" class="w-4 h-4 mr-2"></i> Twitter Arnold Schwarzenegger </div> -->
          </div>
        </div>
      </div>
      <div
        class=" flex flex-col sm:flex-row justify-center lg:justify-start"
      >
        
          <JetNavLink
          v-for="(tab, index) in tabs" :key="index"
            
            :href="'../../userprofile/' + userprofile.id + '/edit?tab=' + index"
            :only="['tab', 'userprofile']"
            :active="tab.active"
                        
          >
          <div class="py-1 sm:mr-8 flex" v-if="(index != 1) | (index == 1 && iscuruser)" >
            <div>

            
            <svg
              v-if="index == 0"
              class="w-4 h-4 mr-1 -mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            <svg
              v-if="index == 1"
              class="w-4 h-4 mr-1 -mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <svg
              v-if="index == 2"
              class="w-4 h-4 mr-1 -mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
            <svg
              v-if="index == 3"
              class="w-4 h-4 mr-1 -mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            </div>
            <!-- <icon
                :icon="tab.icon"
                folder="outline"
                
                x="w-4"
                y="h-4"
                class="mr-1 -mt-1"
              /> -->
           <div class="-mt-1 px-1"> {{ tab.title }}</div>
            </div></JetNavLink
          >
        
      </div>
    </div>
    <div
      class="intro-y tab-content mt-5"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <div
        v-if="tab.active && index == 1 && iscuruser"
        class="tab-content__pane active"
        :id="tab.target"
      >
        <useraccount />
      </div>
      <div
        v-if="tab.active && index == 2"
        class="tab-content__pane active"
        :id="tab.target"
      >
        <userprofile :userprofile="userprofile" :masterdata="masterdata" />
      </div>
      <div
        v-if="tab.active && index == 3"
        class="tab-content__pane active"
        :id="tab.target"
      >
        <userjabatantimeline :userprofile="userprofile" />
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import icon from "@/components/icon";
import useraccount from "@/Pages/Profile/Show";
import userprofile from "@/Pages/users/profile";
import userjabatantimeline from "@/Pages/users/jabatantimeline";
import JetNavLink from "@/Jetstream/NavLink";

export default {
  layout: AppLayout,
  components: {
    icon,
    useraccount,
    userprofile,
    JetNavLink,
    userjabatantimeline,
  },
  props: ["userprofile", "tab", "masterdata"],
  mounted() {
    this.activate_tab(this.tab);
  },
  data() {
    return {
      tabs: [
        {
          title: "Dashboard",
          active: true,
          show: true,
          icon: "home",
          target: "userdashboard",
        },
        {
          title: "Akun ",
          active: false,
          show: true,
          icon: "lock-closed",
          target: "useraccount",
        },
        {
          title: "Profil ",
          active: false,
          show: true,
          icon: "lock-closed",
          target: "userprofile",
        },
        {
          title: "Jabatan ",
          active: false,
          show: true,
          icon: "lock-closed",
          target: "userjabatantimeline",
        },
      ],
    };
  },
  methods: {
    activate_tab(ind) {
      this.tabs.forEach((element, index) => {
        if (index == ind) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
    },
    change_tab(ind) {
      this.$inertia.replace(
        this.route("userprofile.show", { term: this.term })
      );
    },
  },
  computed: {
    iscuruser() {
      let bo = false;
      if (this.userprofile) {
        bo = this.$page.user.id == this.userprofile.id ? true : false;
      }
      return bo;
    },
  },
};
</script>

<style>
</style>