<script setup>
import Title from "../components/Title.vue";

var deposits = [
  {
    thumnail:
      "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ການກຸ້ເງິນຢູ່ສະຖາບບັນ",
    content: `For the purposes of understanding how articles are used, it is important to know that nouns can be either count (can be counted) or noncount (indefinite in quantity and cannot be counted). In addition, count nouns are either singular (one) or plural (more than one). Noncount nouns are always in singular form.

For example, if we are speaking of water that has been spilled on the table, there can be one drop (singular) or two or more drops (plural) of water on the table. The word drop in this example is a count noun because we can count the number of drops. Therefore, according to the rules applying to count nouns, the word drop would use the articles a or the.

However, if we are speaking of water in general spilled on the table, it would not be appropriate to count one water or two waters -- there would simply be water on the table. Water is a noncount noun. Therefore, according to the rules applying to noncount nouns, the word water would use no article or the, but not a.

Following are the three specific rules which explain the use of definite and indefinite articles`,
  },
  {
    thumnail:
      "https://images.pexels.com/photos/5909795/pexels-photo-5909795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ການລົງບັນຊີ",
    content: `For the purposes of understanding how articles are used, it is important to know that nouns can be either count (can be counted) or noncount (indefinite in quantity and cannot be counted). In addition, count nouns are either singular (one) or plural (more than one). Noncount nouns are always in singular form.

For example, if we are speaking of water that has been spilled on the table, there can be one drop (singular) or two or more drops (plural) of water on the table. The word drop in this example is a count noun because we can count the number of drops. Therefore, according to the rules applying to count nouns, the word drop would use the articles a or the.

However, if we are speaking of water in general spilled on the table, it would not be appropriate to count one water or two waters -- there would simply be water on the table. Water is a noncount noun. Therefore, according to the rules applying to noncount nouns, the word water would use no article or the, but not a.

Following are the three specific rules which explain the use of definite and indefinite articles`,
  },
];
</script>


<template>
  <div class="pt-30 flex flex-col items-center my-4">
    <Title> {{ $t("ServicePage.ConsultantName") }} </Title>
    <div class="container flex flex-col mt-10">
      <img src="../assets/image/professional.jpg" class="h-[700px] border-4">
      <p class="text-center text-xl mt-4">
           {{$t("ServicePage.Description")}}
      </p>
    </div>
    <div class="container flex flex-col my-4">
        <Title>ໂອນເງິນດວນຊຸມຊົນ</Title>
      <img
        src="../assets/image/bcome.jpg"
        alt=""
        class="h-[500px] object-cover w-full mt-10 border-4"
      />
      <hr class="my-4" />

      <div class="flex flex-row">
        <div
          class="flex flex-col container w-1/2 h-64 bg-gray-100 mx-2 drop-shadow-xl justify-center items-center rounded-xl hover:bg-blue-500 text-black hover:text-white"
        >
            <span class=" fa-4x">
              <i class="fa-solid fa-money-bill-transfer"></i>
            </span>
          <h1 class="lg:text-2xl font-bold mt-4"> {{ $t("ServicePage.MoneyGram") }}</h1>
        </div>
        <div
          class="flex flex-col container w-1/2 h-64 bg-gray-100 mx-2 drop-shadow-xl justify-center items-center rounded-xl hover:bg-blue-500 text-black hover:text-white"
        >
        <span class="fa-4x">
          <i class="fa-solid fa-solid fa-car-side"></i>
        </span>
          <h1 class="lg:text-2xl font-bold mt-4">{{ $t("ServicePage.RoadFax") }}</h1>
        </div>
      </div>
    </div>

    <div class="flex flex-col my-10">
      <div class="flex flex-col items-center">
        <div class="self-start flex flex-col mt-10 w-fit mx-4">
          <label class="texts-center text-4xl lg:text-6xl font-bold">
            {{ $t("ServicePage.Loan.title") }}
          </label>
          <hr class="h-2 bg-blue-600 rounded mt-2" />
        </div>
        <div
          class="container flex flex-col lg:flex-row items-center justify-between mt-10"
        >
          <div
            class="w-auto lg:w-[500px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl"
          >
            <img
              src="../assets/image/28177.jpg"
              alt=""
              class="w-full h-96 oboject-cover rounded-t-xl trasition ease-in-out hover:scale-110 duration-300"
            />
            <h1 class="text-center text-xl font-bold my-4">  {{ $t("ServicePage.Loan.list[0].title") }}</h1>
            <p class="p-4 h-32 text-center"> {{ $t("ServicePage.Loan.list[0].content") }} </p>

            <div
              class="flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-lg items-end justify-self-end text-white"
            >
              <label for="readmore" class="">ເບິ່ງລາຍລະອຽດ</label>
              <span class="text-xl hover:text-[30px]">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
          <div
            class="w-auto lg:w-[500px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl"
          >
            <img
              src="../assets/image/25307.jpg"
              alt=""
              class="w-full h-96 oboject-cover rounded-t-xl trasition ease-in-out hover:scale-110 duration-300"
            />
            <h1 class="text-center text-xl font-bold my-4">  {{ $t("ServicePage.Loan.list[1].title") }}</h1>
            <p class="p-4 h-32 text-center"> {{ $t("ServicePage.Loan.list[1].content") }} </p>

            <div
              class="flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-lg items-end justify-self-end text-white"
            >
              <label for="readmore" class="">ເບິ່ງລາຍລະອຽດ</label>
              <span class="text-xl hover:text-[30px]">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
          <div
            class="w-auto  lg:w-[500px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl"
          >
            <img
              src="../assets/image/standard.jpg"
              alt=""
              class="w-full h-96 oboject-cover rounded-t-xl trasition ease-in-out hover:scale-110 duration-300"
            />
            <h1 class="text-center text-xl font-bold my-4">  {{ $t("ServicePage.Loan.list[2].title") }}</h1>
            <p class="p-4 h-32 text-center"> {{ $t("ServicePage.Loan.list[2].content") }} </p>

            <div
              class="flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-lg items-end justify-self-end text-white"
            >
              <label for="readmore" class="">ເບິ່ງລາຍລະອຽດ</label>
              <span class="text-xl hover:text-[30px]">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col my-10">
      <div class="w-full flex flex-col items-center">
        <div class="self-start flex flex-col mt-10 w-fit mx-4">
          <label class="texts-center text-4xl lg:text-6xl font-bold">
            {{ $t("ServicePage.Deposit.Title") }}
          </label>
          <hr class="h-2 bg-blue-600 rounded mt-2" />
        </div>
        <div
          class="container flex flex-col lg:flex-row items-center justify-between mt-10"
        >
          <div class="w-auto lg:w-[700px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl" >
            <img
              src="../assets/image/deposit.png"
              class="w-full h-[400px] oboject-cover rounded-t-xl trasition ease-in-out duration-300 border-4"
            />
            <h1 class="text-center text-xl font-bold my-4">{{ $t("ServicePage.Deposit.Deposit1.title") }}</h1>
            <p class="p-4 text-center">
              {{ $t("ServicePage.Deposit.Deposit1.content") }}
            </p>

            <div
              class="flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-lg items-end justify-self-end text-white"
            >
              <label for="readmore" class="">ເບິ່ງລາຍລະອຽດ</label>
              <span class="text-xl hover:text-[30px]">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>

          <div class="w-auto lg:w-[700px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl" >
            <img
              src="../assets/image/deposit_limit.png"
              class="w-full h-[400px] oboject-cover rounded-t-xl trasition ease-in-out duration-300 border-4"
            />
            <h1 class="text-center text-xl font-bold my-4">{{ $t("ServicePage.Deposit.Deposit2.title") }}</h1>
            <p class="p-4 text-center">{{ $t("ServicePage.Deposit.Deposit2.content") }}</p>

            <div
              class="flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-lg items-end justify-self-end text-white"
            >
              <label for="readmore" class="">ເບິ່ງລາຍລະອຽດ</label>
              <span class="text-xl hover:text-[30px]">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>