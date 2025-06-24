<script setup>
import {defineComponent} from 'vue';
import {info} from '@/constants/info';

defineComponent({name: 'HeaderComponent'});
</script>

<template>
  <header class="header text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Avatar & Basic Info -->
        <div class="text-center lg:text-left animate-fade-in">
          <div class="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full bg-white p-2 shadow-2xl animate-float">
            <div
                class="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
              <img class="animate-pulse" alt="logo" src="../assets/logo.png">
            </div>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-2">{{ info.name }}</h1>
          <p class="text-xl lg:text-2xl text-blue-100 mb-4">{{ info.technology }}</p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
            <div class="flex items-center gap-2">
              <i class="fas fa-envelope"></i>
              <span>{{ info.email }}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-phone"></i>
              <span>{{ info.phone }}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ info.address }}</span>
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div class="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in stagger-1">
            <div class="text-3xl font-bold mb-2 animate-pulse">5+</div>
            <div class="text-sm text-blue-100">Năm kinh nghiệm</div>
          </div>
          <div class="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in stagger-2">
            <div class="text-3xl font-bold mb-2 animate-pulse">50+</div>
            <div class="text-sm text-blue-100">Dự án hoàn thành</div>
          </div>
          <div
              class="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in stagger-3 col-span-2 lg:col-span-1">
            <div class="text-3xl font-bold mb-2 animate-pulse">20+</div>
            <div class="text-sm text-blue-100">Công nghệ thành thạo</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <div class="absolute top-6 right-6 flex gap-4">
      <a href="#"
         class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all animate-bounce-in stagger-4 animate-icon">
        <i class="fab fa-github text-white"></i>
      </a>
      <a href="#"
         class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all animate-bounce-in stagger-5 animate-icon">
        <i class="fab fa-linkedin text-white"></i>
      </a>
      <a href="#"
         class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all animate-bounce-in stagger-6 animate-icon">
        <i class="fab fa-twitter text-white"></i>
      </a>
    </div>
  </header>
</template>