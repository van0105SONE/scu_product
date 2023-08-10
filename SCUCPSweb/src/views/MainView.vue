
<template>
  <header class="relative z-10">
    <div
      class="invisible xl:visible h-10 bg-gradient-to-r from-[#160a6c] to-[#1E85DD] flex justify-center"
    >
      <div class="container flex flex-row items-center justify-between">
        <div class="relative flex overflow-x-hidden">
          <div class="py-12 animate-marquee whitespace-nowrap text-white">
            <span class="text-lg mx-2">{{ $t("quotes") }}</span>
          </div>

          <div
            class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-white"
          >
            <span class="text-lg mx-2">{{ $t("quotes") }}</span>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex flex-row">
            <label for="" class="px-2 text-white"
              >{{ $t("tel") }}: +856 031512059</label
            >
          </div>
          <router-link :to="{ name: 'job' }" class="text-white font-bold ml-10">
            {{ $t("headerTitle.option1") }}
          </router-link>
          <router-link
            :to="{ name: 'news' }"
            class="text-white font-bold ml-10"
          >
            {{ $t("headerTitle.option2") }}
          </router-link>

          <router-link
            :to="{ name: 'financialReport' }"
            class="text-white font-bold ml-10"
          >
            {{ $t("headerTitle.option4") }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-full h-[100px] shadow-xl">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <a class="flex items-center my-2.5">
            <img
              src="../assets/LOGO/Logo.png"
              class="h-20 mr-3"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="font-medium flex flex-col md:items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <router-link
                  class="block py-2 pl-3 pr-4 text-xl rounded md:bg-transparent hover:text-blue-700 focus:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  to="/"
                >
                  {{ $t("title.option1") }}
                </router-link>
              </li>
              <li class="flex flex-row">
                <router-link
                  class="block py-2 pl-3 pr-4 text-xl rounded md:bg-transparent hover:text-blue-700 focus:text-blue-700 md:p-0 dark:text-white"
                  :to="{ name: 'service' }"
                  >{{ $t("title.option2") }}</router-link
                >
              </li>
              <li>
                <router-link
                  class="block py-2 pl-3 pr-4 text-xl text-gray-900 rounded focus:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  :to="{ name: 'AboutUs' }"
                >
                  {{ $t("title.option3") }}
                </router-link>
              </li>
              <li>
                <router-link
                  class="block py-2 pl-3 pr-4 text-xl text-gray-900 rounded focus:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  :to="{ name: 'contact' }"
                >
                  {{ $t("title.option4") }}
                </router-link>
              </li>

              <li class="my-5 md:ml-10">
                <select @change="switchLanguage">
                  <option
                    v-for="item in supportedLocales"
                    :key="`locale-${item.val}`"
                    :value="item.val"
                  >
                    {{ item.val }}
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <main class="relative z-0">
    <div>
      <router-view />
    </div>
  </main>
  <footer>
    <div class="flex flex-col bg-gradient-to-r from-[#3322b6] to-[#1E85DD]">
      <div class="h-fit flex justify-center">
        <div
          class="container flex flex-col items-center md:flex-row md:justify-between md:items-start my-10"
        >
          <div class="flex flex-col items-center md:items-start my-4 md:my-0">
            <label for="contact" class="text-2xl font-bold"> link </label>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ກຽວກັບພວກເຮົາ</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ການບໍລິການ</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ຕິດຕໍ່</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ສະໝັກວຽກ</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ລາຍງານການເງິນ</h1>
            </a>
          </div>

          <div class="flex flex-col items-center md:items-start my-4 md:my-0">
            <label for="contact" class="text-2xl font-bold"> ຜະລິດຕະພັນ </label>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ຜູ້ຊຽວຊານບັນຊີ</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ສິນເຊື້ອ</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ໂອນເງິນດວນຊຸມຊົນ</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ເງິນຝາກ</h1>
            </a>
            <a href="" class="flex flex-row rounded-lg mt-2 px-1">
              <h1 class="text-lg hover:underline">ຕົວແທນປະກັນໄພ</h1>
            </a>
          </div>

          <div class="flex flex-col items-center md:items-start my-4 md:my-0">
            <label for="contact" class="text-2xl font-bold">
              ຊ່ອງທາງຕຶດຕໍ່:
            </label>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <span class="">
                <i class="bi bi-geo-alt-fill"></i>
              </span>
              <h1 class="text-lg hover:underline ml-2">
                ບ.ສຸຂຸມມາ(ຫຼັກສອງ), ເມືອງ ສຸຂຸມມາ ແຂວງ ຈຳປາສັກ
              </h1>
            </a>
            <a href="https://www.facebook.com/champaphatthana/" class="flex flex-row rounded-lg mt-4 px-1">
              <span>
                <i class="bi bi-telephone-fill"></i>
              </span>
              <h1 class="text-lg hover:underline ml-2">+856 03121859</h1>
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <span>
                <i class="bi bi-envelope"></i>
              </span>
              <h1 class="text-lg hover:underline ml-2">hq@scu-cp.com</h1>
            </a>
          </div>

          <div class="flex flex-col items-center md:items-start my-4 md:my-0">
            <label for="contact" class="text-2xl font-bold">
              ຊ່ອງທາງຕິດຕາມ
            </label>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <img
                src="../assets/icons/youtube.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
              <h1 class="text-center ml-4">ສສງ ຈຳປາພັດທະນາ</h1>
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <img
                src="../assets/icons/facebook.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
              <h1 class="text-center ml-4">ສສງ ຈຳປາພັດທະນາ</h1>
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <img
                src="../assets/icons/instagram.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
              <h1 class="text-center ml-4">ສສງ ຈຳປາພັດທະນາ</h1>
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <img
                src="../assets/icons/linkedin.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
              <h1 class="text-center ml-4">ສສງ ຈຳປາພັດທະນາ</h1>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full h-full flex flex-row justify-items-center self-center">
        <!-- sponsor part -->
        <div class="w-full flex flex-col items-center mx-4 mt-2">
          <label for="sponsor" class="text-2xl font-bold self-center"
            >ຄູ່ຮ່ວມງານ:</label
          >
          <div class="w-full mt-4 bg-white rounded-lg">
            <div
              class="w-fit grid grid-cols-2 gap-4 lg:flex lg:flex-row  items-center bg-white rounded-lg p-2 mx-auto"
            >
              <div
                class="h-[100px] w-[100px] flex items-center justify-center rounded-lg mx-10"
              >
                <img
                  src="../assets/sponsors/giz_logo.jpg"
                  class="object-cover"
                />
              </div>
              <div
                class="h-[100px] w-[100px] flex items-center justify-center rounded-lg mx-10"
              >
                <img
                  src="../assets/sponsors/LOGO_BANK_V2.png"
                  class="object-cover"
                />
              </div>
              <div
                class="h-[100px] w-[100px] flex items-center justify-center rounded-lg mx-10"
              >
                <img
                  src="../assets/sponsors/LMFA-update-logo-e1639008553398.png"
                  class="object-cover"
                />
              </div>
              <div
                class="h-[100px] w-[100px] flex items-center justify-center rounded-lg mx-10 p-4"
              >
                <img src="../assets/sponsors/lts_venture.png"  />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- sponsor part -->
      <label for="licence" class="self-center mt-4"
        >Copyright © 2013 ສະງວນສິດໂດຍສະຫະກອນສິນເຊື້ອ ສສງ ຈຳປາພັດທະນາ</label
      >
      <div
        class="flex flex-row justify-end pr-5 bg-gradient-to-r from-[#3322b6] to-[#1E85DD]"
      >
        <router-link class="hover:cursor-pointer" :to="{ name: 'login' }"
          >ສະເພາະພະນັກງານ</router-link>
      </div>
    </div>
  </footer>
</template>


<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Tr from "../i18n/translation";
import HomeView from "./HomeView.vue";

export default {
  name: "app",
  components: {
    HomeView,
  },
  data() {
    return {
      supportedLocales: Tr.supportedLocales,
      open: ref(true),
    };
  },
  methods: {
    switchLanguage: async function (event) {
      const newLocale = event.target.value;
      await Tr.switchLanguage(newLocale);
    },
    MenuOpen: function () {
      open.value = !open.value;
    },
  },
};
</script>