<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-12 md:gap-6">
        <div class="md:col-span-2">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-semibold leading-6 text-gray-900">
              Informasi Pribadi
            </h3>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-10 mb-2">
          <form>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="mt-4">
                  <label
                    for="tgllahir"
                    class="block text-sm font-semibold text-gray-700 space-x-3"
                    >Tanggal Lahir
                    <span
                      v-if="userpersonaldata.tanggal_lahir"
                      class="m-auto px-2 mr-2 bg-indigo-100 text-blue-900 rounded-full"
                    >
                      Age: {{ userpersonaldata.tanggal_lahir | age }}
                    </span></label
                  >
                  <div class="flex flex-col md:flex-row">
                    <input
                      v-model="userpersonaldata.tanggal_lahir"
                      id="tgllahir"
                      name="tgllahir"
                      type="date"
                      rows="3"
                      class="input border mt-2 rounded-md"
                    />
                  </div>
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >Alamat</label
                  >
                  <textarea
                    spellcheck="false"
                    name="alamat"
                    rows="3"
                    class="input w-full border mt-2 rounded-md"
                    v-model="userpersonaldata.alamat"
                    placeholder="Alamat Lengkap"
                  ></textarea>
                </div>
                <div>
                  <div class="grid grid-cols-6 gap-6 mt-2">
                    <div class="col-span-6 sm:col-span-3">
                      <label class="block text-sm font-semibold text-gray-700"
                        >Genis Kelamin</label
                      >
                      <div class="mt-2 pl-2 flex items-start">
                        <div class="flex items-center h-5 mr-5">
                          <input
                            type="checkbox"
                            @click="change_gender()"
                            :checked="
                              userpersonaldata.gender.toLowerCase() == 'l'
                            "
                            class="input w-full border inline-block"
                            placeholder="Input text"
                          />
                          <div class="ml-3 text-sm">
                            <label
                              for="comments"
                              class="font-semibold text-gray-700"
                              >Laki-laki</label
                            >
                          </div>
                        </div>
                        <div class="flex items-center h-5 ml-2">
                          <div class="ml-3 text-sm">
                            <label
                              for="comments"
                              class="font-semibold text-gray-700"
                              >Perempuan</label
                            >
                          </div>
                          <input
                            type="checkbox"
                            :checked="
                              userpersonaldata.gender.toLowerCase() == 'p'
                            "
                            class="input w-full border inline-block m-3"
                            placeholder="Input text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <label
                      for="alamat"
                      class="block text-sm font-semibold text-gray-700"
                      >NIK</label
                    >
                    <input
                      type="number"
                      spellcheck="false"
                      rows="3"
                      class="input border mt-2 rounded-md"
                      v-model="userpersonaldata.nik"
                      placeholder="Nomor NIK"
                    />
                  </div>
                  <!-- <hr class="mt-2 w-full" /> -->
                </div>

                <div class="mt-4 flex gap-5">
                  <span class="font-extrabold text-xl mt-2"
                    >Informasi Keluarga</span
                  >
                  <!-- <svg class="w-6 h-6 bg-blue-100 text-blue-500 rounded-full p-1 -mt-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> -->
                  <span
                    class="button text-white bg-theme-1 shadow-md mr-2"
                    @click="formnewmember_show = true"
                  >
                    Add New Member
                  </span>
                  <jet-dialog-modal
                    :show="formnewmember_show"
                    @close="formnewmember_show = false"
                  >
                    <template #title> Delete Account </template>

                    <template #content>
                      Are you sure you want to delete your account? Once your
                      account is deleted, all of its resources and data will be
                      permanently deleted. Please enter your password to confirm
                      you would like to permanently delete your account.
                    </template>
                    <template #footer> fsafdasf </template>
                  </jet-dialog-modal>
                </div>
                <div class="mt-2">
                  <div class="grid md:grid-cols-2 grid-cols-1 gap-12 mt-3">
                    <article
                      v-for="(member, index) in 10"
                      :key="index"
                      class="overflow-hidden rounded-lg shadow-lg"
                    >
                      <div class="flex">
                        <!-- <div class="w-12 h-12 relative mb-4">
    <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple flex items-center">
      <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
    </div>
  </div> -->
                        <div class="flex-1 px-6 py-4">
                          <div class="flex flex-row gap-2">
                            <h4
                              class="mb-3 text-xl font-semibold tracking-tight text-gray-800"
                            >
                              This is the title
                            </h4>
                            <!-- <svg class="w-6 h-6 bg-indigo-100 text-indigo-500 rounded-full p-1 -mt-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  
</svg> -->
                            <svg
                              class="w-6 h-6 bg-indigo-100 text-indigo-500 rounded-full p-1 -mt-1 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                            <svg
                              class="w-6 h-6 bg-pink-100 text-pink-500 rounded-full p-1 -mt-1 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                          <div class="flex flex-col">
                            <span>Hubungan: Anak</span>
                            <span>Pekerjaan: Sekolah</span>
                            <span
                              >Tgl Lahir : 01-05-2000
                              <span
                                class="bg-indigo-100 text-indigo-800 px-2 rounded-full"
                                >{{ "01-05-2000" | age }}</span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-12 md:gap-6">
        <div class="md:col-span-2">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-semibold leading-6 text-gray-900">
              Informasi Pekerja
            </h3>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-10">
          <form>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white grid grid-cols-1 md:grid-cols-3">
                <div class="mt-2">
                  <label
                    for="tgllahir"
                    class="block text-sm font-semibold text-gray-700 space-x-3"
                    >Tanggal Masuk
                    <span
                      v-if="userpersonaldata.tanggal_masuk"
                      class="m-auto px-2 mr-2 bg-indigo-100 text-blue-900 rounded-full"
                    >
                      {{ userpersonaldata.tanggal_masuk | age }}
                    </span></label
                  >
                  <div class="flex flex-col md:flex-row">
                    <input
                      v-model="userpersonaldata.tanggal_masuk"
                      id="tgllahir"
                      name="tgllahir"
                      type="date"
                      rows="3"
                      class="input border mt-2 rounded-md"
                    />
                  </div>
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >No. Peg</label
                  >
                  <input
                    v-model="userpersonaldata.nopeg"
                    type="text"
                    rows="3"
                    class="input border mt-2 rounded-md"
                  />
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >pendidikan</label
                  >
                  <jet-dropdown width="48" fixedclass="fixed">
                    <template #trigger>
                      <input
                        v-model="userpersonaldata.pendidikan"
                        type="text"
                        rows="3"
                        class="input border mt-2 rounded-md"
                      />
                    </template>
                    <template #content>
                      <!-- Account Management -->
                      <ul v-if="pendidikan_filter">
                        <li
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-indigo-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          v-for="(pend, ind) in pendidikan_filter"
                          :key="ind"
                          @click="userpersonaldata.pendidikan = pend.nama"
                        >
                          {{ pend.nama }}
                        </li>
                      </ul>
                    </template>
                  </jet-dropdown>
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >jadwalkerja</label
                  >
                  <jet-dropdown width="48" fixedclass="fixed">
                    <template #trigger>
                      <input
                        v-model="userpersonaldata.jadwalkerja"
                        type="text"
                        rows="3"
                        class="input border mt-2 rounded-md"
                      />
                    </template>
                    <template #content>
                      <!-- Account Management -->
                      <ul v-if="jadwalkerja_filter">
                        <li
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-indigo-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          v-for="(pend, ind) in jadwalkerja_filter"
                          :key="ind"
                          @click="userpersonaldata.jadwalkerja = pend.nama"
                        >
                          {{ pend.nama }}
                        </li>
                      </ul>
                    </template>
                  </jet-dropdown>
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >statuskerja</label
                  >
                  <jet-dropdown width="48" fixedclass="fixed">
                    <template #trigger>
                      <input
                        v-model="userpersonaldata.statuskerja"
                        type="text"
                        rows="3"
                        class="input border mt-2 rounded-md"
                      />
                    </template>
                    <template #content>
                      <!-- Account Management -->
                      <ul v-if="pendidikan_filter">
                        <li
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-indigo-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          v-for="(pend, ind) in statuskerja_filter"
                          :key="ind"
                          @click="userpersonaldata.statuskerja = pend.nama"
                        >
                          {{ pend.nama }}
                        </li>
                      </ul>
                    </template>
                  </jet-dropdown>
                </div>
              </div>
              <hr class="border border-separate" />
              <div class="px-4 py-5 bg-white grid grid-cols-1 md:grid-cols-3">
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >No. SIP</label
                  >
                  <input
                    type="text"
                    spellcheck="false"
                    rows="3"
                    class="input border mt-2 rounded-md"
                    v-model="userpersonaldata.sip_nomor"
                    placeholder="Nomor SIP"
                  />
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >Tgl Terbit. SIP</label
                  >
                  <input
                    type="date"
                    spellcheck="false"
                    rows="3"
                    class="input border mt-2 rounded-md"
                    v-model="userpersonaldata.sip_tgl_terbit"
                    placeholder="Nomor NIK"
                  />
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >Tgl Exp. SIP</label
                  >
                  <input
                    type="date"
                    spellcheck="false"
                    rows="3"
                    class="input border mt-2 rounded-md"
                    v-model="userpersonaldata.sip_tgl_exp"
                    placeholder="Nomor NIK"
                  />
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >NO. STR</label
                  >
                  <input
                    type="text"
                    spellcheck="false"
                    rows="3"
                    class="input border mt-2 rounded-md"
                    v-model="userpersonaldata.str_nomor"
                    placeholder="Nomor STR"
                  />
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >Tgl Terbit. STR</label
                  >
                  <input
                    type="date"
                    spellcheck="false"
                    rows="3"
                    class="input border mt-2 rounded-md"
                    v-model="userpersonaldata.str_tgl_terbit"
                    placeholder="Nomor NIK"
                  />
                </div>
                <div class="mt-2">
                  <label
                    for="alamat"
                    class="block text-sm font-semibold text-gray-700"
                    >Tgl Exp. STR</label
                  >
                  <input
                    type="date"
                    spellcheck="false"
                    rows="3"
                    class="input border mt-2 rounded-md"
                    v-model="userpersonaldata.str_tgl_exp"
                    placeholder="Nomor NIK"
                  />
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JetDropdown from "@/Jetstream/Dropdown";
import JetDialogModal from "@/Jetstream/DialogModal";
import JetDropdownLink from "@/Jetstream/DropdownLink";
export default {
  components: {
    JetDropdown,
    JetDialogModal,
    JetDropdownLink,
  },
  props: ["userprofile", "masterdata"],
  data() {
    return {
      formnewmember_show: false,
      current_member: {
        nama: "",
        relation: "",
        dob: "",
        occupation: "",
        user_id: this.userprofile.id,
      },
      userpersonaldata: this.userprofile.userpersonaldata
        ? this.userprofile.userpersonaldata
        : {
            alamat: "",
            created_at: null,
            gender: "",
            golongan: "",
            id: null,
            jabatan: "",
            jadwalkerja: "",
            masa_pensiun: "",
            nik: "",
            nopeg: "",
            pendidikan: "",
            sip_nomor: "",
            sip_tgl_exp: null,
            sip_tgl_terbit: null,
            statuskerja: "",
            str_nomor: "",
            str_tgl_exp: null,
            str_tgl_terbit: null,
            tanggal_lahir: "",
            tanggal_masuk: "",
            updated_at: null,
            user_id: this.userprofile.id,
          },
    };
  },
  computed: {
    pendidikan_filter() {
      let result = this.masterdata.pendidikan;
      if (!this.userpersonaldata.pendidikan) return result;
      const filterValue = this.userpersonaldata.pendidikan.toLowerCase();
      const filter = (event) => event.nama.toLowerCase().includes(filterValue);
      return result.filter(filter);
    },
    statuskerja_filter() {
      let result = this.masterdata.statuskerja;
      if (!this.userpersonaldata.statuskerja) return result;
      const filterValue = this.userpersonaldata.statuskerja.toLowerCase();
      const filter = (event) => event.nama.toLowerCase().includes(filterValue);
      return result.filter(filter);
    },
    jabatan_filter() {
      let result = this.masterdata.jadwalkerja;
      if (!this.userpersonaldata.jadwalkerja) return result;
      const filterValue = this.userpersonaldata.jadwalkerja.toLowerCase();
      const filter = (event) => event.nama.toLowerCase().includes(filterValue);
      return result.filter(filter);
    },
    jadwalkerja_filter() {
      let result = this.masterdata.jadwalkerja;
      if (!this.userpersonaldata.jadwalkerja) return result;
      const filterValue = this.userpersonaldata.jadwalkerja.toLowerCase();
      const filter = (event) => event.nama.toLowerCase().includes(filterValue);
      return result.filter(filter);
    },
  },
};
</script>
<style>
</style>