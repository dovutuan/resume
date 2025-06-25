<script setup>
import {defineComponent} from 'vue';
import {info} from '@/constants/info';
import {projects} from '@/constants/project';
import SocialComponent from '@/components/Social.vue';

defineComponent({name: 'HeaderComponent'});

const getExperienceYears = () => {
  const currentYear = new Date().getFullYear();
  return `${Math.max(0, currentYear - info.startYear)}+`;
};

const totalProjects = () => {
  return `${projects.length}+`;
};
</script>

<template>
  <header class="header text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Avatar & Basic Info -->
        <div class="text-center lg:text-left animate-fade-in">
          <div class="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full bg-white p-2 shadow-2xl animate-float">
            <div
                class="w-full h-full rounded-full from-purple-400 to-blue-500 flex items-center justify-center">
              <!--              <img class="animate-pulse" alt="logo" src="../assets/logo.png">-->
            </div>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-2">{{ info.name }}</h1>
          <p class="font-mono text-2xl lg:text-3xl text-blue-100 mb-4">{{ info.technology }}</p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
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
            <div class="text-3xl font-bold mb-2 animate-pulse">{{ getExperienceYears() }}</div>
            <div class="text-blue-100">Năm kinh nghiệm</div>
          </div>
          <div class="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in stagger-2">
            <div class="text-3xl font-bold mb-2 animate-pulse">{{ totalProjects() }}</div>
            <div class="text-blue-100">Dự án hoàn thành</div>
          </div>
          <!--          <div-->
          <!--              class="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in stagger-3 col-span-2 lg:col-span-1">-->
          <!--            <div class="text-3xl font-bold mb-2 animate-pulse">20+</div>-->
          <!--            <div class="text-sm text-blue-100">Công nghệ thành thạo</div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <social-component/>
  </header>
</template>