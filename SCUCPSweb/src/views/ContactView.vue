<script setup>
import Title from '../components/Title.vue';
import { ref, onMounted } from "vue";
import axiosClient from "../axiosClient";

onMounted(() => {
  axiosClient.get(`News`, {headers: [
    {"Access-Control-Allow-Origin": "*"},
    {'Access-Control-Allow-Credentials':true}
  ]}).then(({ data }) => {
    console.log(data);
  });
});
</script>

<template>
  <div class="flex flex-col items-center pt-30">
    <div class="container flex flex-col w-full">
        <Title>
           ສຳນັກງານໃຫຍ່
        </Title>
      <div class="flex flex-col lg:flex-row justify-center mx-10 mt-20">
        <div class="flex flex-col w-92 mr-10">
          <h1 class="text-xl font-bold mb-4">
            ພວກເຮົາຢູ່ບ່ອນນີ້ເພື່ອທ່ານສະເໝີ
          </h1>
          <p class="text-lg mb-4">
            ຫາກທ່ານຢາກຮູ້ຂໍ້ມູນເພີ່ມເຕີ່ມກຽວກັບ ບໍລິການ, ຜະລິດຕະພັນ ແລະ
            ການເງິນຕ່າງ. ສາມາດຕິດຕໍ່ພວກເຮົາໄດ້ຕະຫຼອດເວລາ
          </p>
          <div class="flex flex-col">
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <span class="text-xl font-bold">
                <i class="bi bi-geo-alt-fill"></i>
              </span>
              <h1 class="text-lg font-bold ml-2">
                ບ.ສຸຂຸມມາ(ຫຼັກສອງ), ເມືອງ ສຸຂຸມມາ ແຂວງ ຈຳປາສັກ
              </h1>
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <span class="text-xl font-bold">
                <i class="bi bi-telephone-fill"></i>
              </span>
              <h1 class="text-lg font-bold ml-2">+856 03121859</h1>
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg mt-4 px-1"
            >
              <span class="text-xl font-bold">
                <i class="bi bi-envelope"></i>
              </span>
              <h1 class="text-lg font-bold ml-2">hq@scu-cp.com</h1>
            </a>
          </div>
          <hr class="my-4" />
          <div
            class="flex flex-row justify-between items-center md:my-0 lg:w-1/2"
          >
            <div class="h-10 flex items-center">
              <label for="contact" class="text-lg text-center">
                ຊ່ອງທາງການຕິດຕາມ:
              </label>
            </div>

            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg px-1"
            >
              <img
                src="../assets/icons/youtube.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg px-1"
            >
              <img
                src="../assets/icons/facebook.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg px-1"
            >
              <img
                src="../assets/icons/instagram.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
            </a>
            <a
              href="https://www.facebook.com/champaphatthana/"
              class="flex flex-row rounded-lg px-1"
            >
              <img
                src="../assets/icons/linkedin.png"
                alt=""
                class="h-8 w-8 object-cover"
              />
            </a>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60720.76073560548!2d102.6326528!3d17.9765248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687ed455e1df%3A0x24af4d39ae4445b0!2z4Lib4Lij4Liw4LiV4Li54LiK4Lix4Lii!5e0!3m2!1sth!2sla!4v1684593079939!5m2!1sth!2sla"
            width="400"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="h-fit flex justify-center w-full bg-gray-100 mt-10 pb-10">
      <div class="container flex flex-col">
        <div class="w-fit mb-5 self-center mt-5">
          <label for="team" class="text-[50px] font-bold">ໜ່ວຍບໍລິການ</label>
          <hr class="h-1 bg-blue-500 rounded-sm mt-4" />
        </div>

        <div
          class="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 justify-center mt-10"
        >
          <div
            class="flex flex-col justify-center items-center mx-40 mt-10 lg:mt-0"
            v-for="item in new Array(6)"
            :key="item"
          >
            <div
              class="flex justify-center h-[400px] w-[400px] bg-[#4898EF] rounded-tl-lg rounded-br-lg drop-shadow-xl"
              :class="`bg-[url('https://images.pexels.com/photos/16656524/pexels-photo-16656524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover`"
            >
              <div
                class="flex flex-col container w-full px-2 pt-2 h-[100px] bg-gradient-to-r from-[#5a05d9] to-[#1E85DD] self-end rounded-t-xl"
              >
                <h4 class="text-ll font-bold text-center">Hongsa1</h4>
                <div class="flex flex-row my-4">
                  <div class="flex my-2 mx-2">
                    <span class="text-sm font-bold">
                      <i class="bi bi-geo-alt-fill"></i>
                    </span>

                    <label for="phone" class="text-sm ml-1 text-end"
                      >ເມືອງ ສອງຄອນ</label
                    >
                  </div>

                  <div class="flex my-2 mx-2">
                    <span class="text-sm font-bold">
                      <i class="bi bi-telephone-fill"></i>
                    </span>

                    <label for="phone" class="text-sm ml-1 text-end"
                      >02091646464</label
                    >
                  </div>

                  <div class="flex my-2 mx-2">
                    <span class="text-sm font-bold">
                      <i class="bi bi-envelope"></i>
                    </span>

                    <label for="phone" class="text-sm ml-1 text-end"
                      >hq@scu-cp.com</label
                    >
                  </div>
                </div>
                <div class="flex flex-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>