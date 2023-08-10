<script >
import { initFlowbite } from "flowbite";
export default {
  name: "About",
  data: function () {
    return {
      branch: ''
    };
  },
  mounted: function () {
    initFlowbite();
  },
};
</script>
<template>
  <div class="flex flex-col items-center">
    <div
      class="w-full h-[500px] bg-pro1 bg-no-repeat bg-cover flex justify-center"
    >
      <div
        class="container flex items-center justify-center invisible lg:visible"
      >
        <div class="flex flex-col">
          <h1 class="text-white text-[20px] lg:text-[60px] font-bold">
            ກຽວກັບສະຖາບັນຂອງພວກເຮົາ
          </h1>
          <hr class="h-2 bg-white" />
        </div>

        <div class="h-92 w-92 self-end">
          <img
            src="../assets/image/modeling.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>

    <div class="container h-fit my-12 flex flex-col text-justify rounded-xl">
      <div
        class="w-40 flex justify-center self-center lg:self-start bg-[#4898EF] rounded-lg my-2"
      >
        <label for="history" class="text-2xl text-white font-bold p-2">{{
          $t("AboutUs.History")
        }}</label>
      </div>

      <div class="flex flex-col xl:flex-row my-2">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold my-4 mx-2">
            {{ $t("AboutUs.HistoryTitle") }}
          </h1>
          <p class="text-xl mx-4 leading-relaxed indent-6">
            {{ $t("AboutUs.HistoryContent") }}
          </p>
        </div>

        <img
          src="../assets/image/bank.jpg"
          alt=""
          class="h-92 w-92 object-cover mx-2 self-end"
        />
      </div>
    </div>

    <div class="h-fit w-full bg-gray-100 flex flex-col items-center rounded-xl">
      <div
        class="container flex flex-col items-center lg:items-stretch lg:flex-row py-10"
      >
        <div
          class="flex flex-col lg:ml-32 w-5/6 items-center md:items-start self-center"
        >
          <div
            class="self-center w-fit h-fit bg-[#0566DD] bg-opacity-xl rounded-lg drop-shadow-xl p-4 pt-4"
          >
            <h4 class="text-2xl text-white font-bold">
              {{ $t("AboutUs.Vision") }}
            </h4>
          </div>
          <div
            class="w-fit self-center h-fit bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] bg-opacity-xl rounded-lg drop-shadow-xl p-4 my-4"
          >
            <h1 class="font-bold text-[30px] text-center text-white">
              {{ $t("AboutUs.VisionContent") }}
            </h1>
          </div>
          <hr class="mx-2 bg-white" />
          <div
            class="w-fit h-fit bg-[#0566DD] rounded-lg drop-shadow-xl p-4 self-center mt-5"
          >
            <h4 class="text-2xl text-white font-bold">
              {{ $t("AboutUs.Mission") }}
            </h4>
          </div>
          <div
            class="w-full flex flex-col pt-10 items-center self-center md:items-start"
          >
            <div
              class="w-full text-xl text-white text-center grid grid-cols-2 gap-2"
            >
              <div
                class="p-2 bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] rounded-lg my-4 drop-shadow-xl w-full"
              >
                <p class="py-2">
                  {{ $t("AboutUs.MissionTopic[0]") }}
                </p>
              </div>
              <div
                class="p-2 bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] rounded my-4 drop-shadow-xl w-full"
              >
                <p class="py-2">{{ $t("AboutUs.MissionTopic[1]") }}</p>
              </div>
              <div
                class="p-2 bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] rounded my-4 drop-shadow-xl"
              >
                <p class="py-2">
                  {{ $t("AboutUs.MissionTopic[2]") }}
                </p>
              </div>
              <div
                class="p-2 bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] rounded my-4 drop-shadow-xl w-full"
              >
                <p class="py-2">
                  {{ $t("AboutUs.MissionTopic[3]") }}
                </p>
              </div>
              <div
                class="p-2 bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] rounded my-4 drop-shadow-xl w-full"
              >
                <p class="py-2">{{ $t("AboutUs.MissionTopic[4]") }}</p>
              </div>
              <div
                class="p-2 bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] rounded my-4 drop-shadow-xl w-full"
              >
                <p class="py-2">
                  {{ $t("AboutUs.MissionTopic[5]") }}
                </p>
              </div>
              <div
                class="p-2 bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] rounded my-4 drop-shadow-xl col-span-2"
              >
                <p class="py-2">ສົ່ງເສີມການສ້າງລາຍຮັບຂອງສະມາຊິກທະນາຄານບ້ານ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container flex flex-col">
      <!-- test tap bart -->
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2" role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg text-xl text-bold"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              ໂຄງຮ່າງການຈັດຕັ້ງສຳນັກງານໃຫຍ່
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg text-xl text-bold"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              ສະພາບໍລິຫານ
            </button>
          </li>

          <li class="mr-2" role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg text-xl text-bold"
              id="branch-tab"
              data-tabs-target="#branch"
              type="button"
              role="tab"
              aria-controls="branch"
              aria-selected="false"
            >
              ໜ່ວຍບໍລິການ
            </button>
          </li>
        </ul>
      </div>

      <div id="myTabContent" class="mb-10">
        <!-- ໂຄງຮ່າງການຈັດຕັ້ງ -->
        <div id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div class="flex flex-col items-center mt-10">
            <div class="w-fit mb-5">
              <label for="team" class="text-4xl font-bold mt-5"
                >ໂຄງຮ່າງການຈັດຕັ້ງ</label
              >
              <hr class="h-2 mt-2 bg-blue-500" />
            </div>
            <div class="container mt-10">
              <img
                type="image"
                src="../assets/image/structure.png"
                class="h-[1200px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <div class="container flex flex-col items-center my-10 px-10">
            <div class="w-fit mb-5">
              <label for="team" class="text-4xl font-bold mt-5"
                >ສະພາບໍລິຫານ</label
              >
              <hr class="h-2 mt-2 bg-blue-500 rounded-sm" />
            </div>
            <div
              class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
            >
              <img
                src="../assets/image/person.jpg"
                alt=""
                class="h-64 w-full object-cover border-4 border-gray-200 self-center"
              />
              <label
                class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
              >
              <label
                class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                >ປະທານ ສະພາບໍລິຫານ</label
              >
            </div>

            <label class="text-3xl font-bold mt-12">ສະພາບໍລິຫານບັນຊີ</label>
            <hr class="w-full h-2 mt-4" />
            <div class="w-full flex flex-row justify-between">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>
            </div>

            <label class="text-3xl font-bold mt-12">ສະພາບໍລິຫານວິຊາການ</label>
            <hr class="w-full h-2 mt-4" />
            <div class="w-full flex flex-row justify-between">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>
            </div>

            <label class="text-3xl font-bold mt-12"
              >ສະພາບໍລິຫານທະນາຄານບ້ານ</label
            >
            <hr class="w-full h-2 mt-4" />
            <div class="w-full flex flex-row justify-between">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>
            </div>
          </div>
        </div>
        <!-- ໂຄງຮ່າງການຈັດຕັ້ງ -->

        <div id="branch" role="tabpanel" aria-labelledby="branch-tap">
          <div class="w-full flex flex-col">
            <div class="self-end flex flex-col">
              <label
                for="branch"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >ເລືອກໜ່ວຍບໍລິການ</label
              >
              <select
                id="branch"
                v-model="branch"
                class="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>ໜ່ວຍບໍລີການ</option>
                <option value="branch1">ສາຂາໜຶ່ງ</option>
                <option value="branch2">ສາຂາສອງ</option>
                <option value="branch3">ສາຂາສາມ</option>
                <option value="branch4">ສາຂາສີ່</option>
              </select>
            </div>

            <div v-if="branch == 'branch1'" class="flex flex-col items-center">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div class="w-full flex flex-row justify-between">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>
            </div>
            </div>


            <div v-if="branch == 'branch2'" class="flex flex-col items-center">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div class="w-full flex flex-row justify-between">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>
            </div>

            <div class="w-full flex flex-row justify-between">
              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>

              <div
                class="h-96 w-80 flex flex-col rounded-lg bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] mt-10"
              >
                <img
                  src="../assets/image/person.jpg"
                  alt=""
                  class="h-64 w-full object-cover border-4 border-gray-200 self-center"
                />
                <label
                  class="text-xl font-semibold text-center mt-4 mx-5 text-gray-200"
                  >ທ່ານ ວັນລະຄານ ອິນສີຊຽງໃໝ່</label
                >
                <label
                  class="text-2xl font-semibold text-center mt-5 mb-2 mx-2 bg-white"
                  >ປະທານ ສະພາບໍລິຫານ</label
                >
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>