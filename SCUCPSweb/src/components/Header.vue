<template>
<header>
    <div class="flex flex-col items-center w-full h-[100px] bg-blue-400 shadow-xl">
      <nav class="container h-full flex flex-row justify-between ">
         <div class="my-auto">
          <img src="../assets/LOGO/Logo.png" class="h-20 mr-3">
         </div>
        <div class="h-fit flex flex-row my-auto">
         <div class="flex flex-row p-2 bg-white rounded-lg">
          <span class="text-black text-4xl">
          <i class="fa-solid fa-user"></i>
         </span>
          <label class="ml-4 text-black text-xl my-auto">{{ username }}</label>
         </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default{
  name: 'header',
  props: {
    username: String
  }
}
</script>
