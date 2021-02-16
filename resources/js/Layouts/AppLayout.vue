<template>
  <div class="app" data-scroll>
    <!-- BEGIN: Mobile Menu -->
    <main>

    <div class="mobile-menu md:hidden">
      <div class="mobile-menu-bar flex justify-end">
        <a href="" class="flex mr-auto">
          <div
            class="inline-block w-8 h-8 rounded-full bg-white justify-items-center"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6 mt-1 ml-1"
              src="/dist/images/logo.svg"
            />
          </div>
        </a>
        <a
          @click="showingNavigationDropdown = !showingNavigationDropdown"
          id="mobile-menu-toggler"
        >
          <!-- <i
            data-feather="bar-chart-2"
            class="w-8 h-8 text-white transform -rotate-90"
          ></i> -->
          <svg
            class="w-8 h-8 text-white transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <ul
        v-if="showingNavigationDropdown"
        class="border-t border-theme-24 py-5"
      >
        <li>
          <inertia-link
            preserve-scroll
            :href="route('dashboard')"
            class="menu menu--active"
          >
            <div class="menu__icon"><i data-feather="home"></i></div>
            <div class="menu__title">Dashboard</div>
          </inertia-link>
        </li>
      </ul>
    </div>
    <!-- END: Mobile Menu -->
    <div class="flex mr-auto">
      <!-- BEGIN: Simple Menu -->
      <nav class="side-nav side-nav--simple">
        <inertia-link
          preserve-scroll
          :href="route('dashboard')"
          class="flex items-center pl-5 pt-4"
        >
          <div
            class="inline-block w-8 h-8 rounded-full bg-white justify-items-center"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6 mt-1 ml-1"
              src="/dist/images/logo.svg"
            />
          </div>
        </inertia-link>
        <div class="side-nav__devider my-5"></div>
        <ul v-if="filtered_menu">
          <li v-for="(menu, ind) in filtered_menu" :key="ind">
            <inertia-link
              preserve-state
              :href="route(menu.web)"
              :class="
                route().current().split('.')[0] == menu.web.split('.')[0]
                  ? 'side-menu side-menu--active'
                  : 'side-menu'
              "
            >
              <div class="side-menu__icon">
                <icon :icon="menu.icon" x="w-6" y="h-6" folder="outline" />
              </div>
              <div class="side-menu__title">{{ menu.name }}</div>
            </inertia-link>
          </li>
          <!-- <li>
            <inertia-link
              preserve-state
              :href="route('users.index')"
              :class="
                route().current() == 'users.index'
                  ? 'side-menu side-menu--active'
                  : 'side-menu'
              "
            >
              <div class="side-menu__icon">
                <icon icon="users" folder="outline" x='w-6' y='h-6' />
              </div>
              <div class="side-menu__title">Users</div>
            </inertia-link>
          </li> -->
        </ul>
      </nav>
      <!-- END: Simple Menu -->
      <!-- BEGIN: Content -->
      <div class="content">
        <!-- BEGIN: Top Bar -->
        <div class="top-bar">
          <!-- BEGIN: Breadcrumb -->
          <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <inertia-link href="/login" class="breadcrumb--active">App</inertia-link> 
            <div class="flex flex-row" v-for="(name, index) in route().current().split('.')" :key="index" >
              <div class="flex flex-row space-y-1" >
                <svg
                  class="h-5 w-5 mx-2 bg-indigo-100 rounded-full p-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div v-if="index==0">
                <inertia-link v-if="index==0" :href="route(route().current().split('.')[0])" class="breadcrumb--active">{{name}}</inertia-link>
              </div>
              <div v-else>
{{name}}
              </div>
            </div>
          </div>
          <!-- END: Breadcrumb -->
          <!-- BEGIN: Search -->

          <!-- END: Search -->
          <!-- BEGIN: Notifications -->

          <!-- END: Notifications -->
          <!-- BEGIN: Account Menu -->
          <div class="hidden sm:flex sm:items-center sm:ml-6">
            <div class="ml-3 relative">
              <jet-dropdown align="right" width="48">
                <template #trigger>
                  <button
                    v-if="$page.jetstream.managesProfilePhotos"
                    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    <img
                      class="h-8 w-8 rounded-full object-cover"
                      :src="$page.user.profile_photo_url"
                      :alt="$page.user.name"
                    />
                  </button>

                  <button
                    v-else
                    class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    <div>{{ $page.user.name }}</div>

                    <div class="ml-1">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                </template>

                <template #content>
                  <!-- Account Management -->
                  <div class="block px-4 py-2 text-xs text-gray-400">
                    Manage Account
                  </div>

                  <jet-dropdown-link
                    :href="'/userprofile/' + $page.user.id + '/edit?tab=1'"
                  >
                    Profile
                  </jet-dropdown-link>

                  <jet-dropdown-link
                    :href="route('api-tokens.index')"
                    v-if="$page.jetstream.hasApiFeatures"
                  >
                    API Tokens
                  </jet-dropdown-link>

                  <div class="border-t border-gray-100"></div>

                  <!-- Team Management -->
                  <template v-if="$page.jetstream.hasTeamFeatures">
                    <div class="block px-4 py-2 text-xs text-gray-400">
                      Manage Team
                    </div>

                    <!-- Team Settings -->
                    <jet-dropdown-link
                      :href="route('teams.show', $page.user.current_team)"
                    >
                      Team Settings
                    </jet-dropdown-link>

                    <jet-dropdown-link
                      :href="route('teams.create')"
                      v-if="$page.jetstream.canCreateTeams"
                    >
                      Create New Team
                    </jet-dropdown-link>

                    <div class="border-t border-gray-100"></div>

                    <!-- Team Switcher -->
                    <div class="block px-4 py-2 text-xs text-gray-400">
                      Switch Teams
                    </div>

                    <template v-for="team in $page.user.all_teams">
                      <form @submit.prevent="switchToTeam(team)" :key="team.id">
                        <jet-dropdown-link as="button">
                          <div class="flex items-center">
                            <svg
                              v-if="team.id == $page.user.current_team_id"
                              class="mr-2 h-5 w-5 text-green-400"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <div>{{ team.name }}</div>
                          </div>
                        </jet-dropdown-link>
                      </form>
                    </template>

                    <div class="border-t border-gray-100"></div>
                  </template>

                  <!-- Authentication -->
                  <form @submit.prevent="logout">
                    <jet-dropdown-link as="button"> Logout </jet-dropdown-link>
                  </form>
                </template>
              </jet-dropdown>
            </div>
          </div>
          <!-- END: Account Menu -->
        </div>
        <!-- END: Top Bar -->
        <div>
          <main data-scroll>
            <div>
              <!-- <div class="bg-gray-100 overflow-hidden shadow-xl sm:rounded-lg"> -->
              <slot></slot>
              <!-- </div> -->
            </div>
          </main>
        </div>
      </div>
      <!-- END: Content -->
    </div>
    <!-- BEGIN: Dark Mode Switcher-->
    <!-- <div data-url="simple-menu-dark-dashboard.html" class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
            <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
            <div class="dark-mode-switcher__toggle border"></div>
        </div> -->
    <!-- END: Dark Mode Switcher-->
    <!-- BEGIN: JS Assets-->

    <!-- END: JS Assets-->
    </main>
    <portal-target name="modal" multiple>
        </portal-target>
  </div>
</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import JetNavLink from "@/Jetstream/NavLink";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink";
import icon from "@/components/icon";

export default {
  components: {
    JetApplicationMark,
    JetDropdown,
    JetDropdownLink,
    JetNavLink,
    JetResponsiveNavLink,
    icon,
  },

  data() {
    return {
      showingNavigationDropdown: false,

      menu: [
        {
          icon: "home",
          name: "Dashboard",
          web: "dashboard",
          role: [],
        },
        {
          icon: "users",
          name: "Users",
          web: "users",
          role: ["*", "kantor"],
        },
      ],
    };
  },
  computed: {
    filtered_menu() {
      if (this.menu) {
        let men = [];
        this.menu.forEach((element) => {
          // console.log(element.role.includes(this.$page.user.role_list.toLowerCase()));
          if (
            element.role.length == 0 ||
            element.role.includes(this.$page.user.role_list.toLowerCase())
          ) {
            men.push(element);
          }
        });
        return men;
      }
    },
  },

  methods: {
    switchToTeam(team) {
      this.$inertia.put(
        route("current-team.update"),
        {
          team_id: team.id,
        },
        {
          preserveState: false,
        }
      );
    },

    logout() {
      axios.post(route("logout").url()).then((response) => {
        window.location = "/";
      });
    },
    getfullroutename(ind){
      let rout=route().current().split('.');
      let cur='';
      let arr = rout.filter((item,index) => index <= ind);
      return arr.join('.')
    }
  },
};
</script>
