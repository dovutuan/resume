<script setup>
import {defineComponent} from 'vue';
import {experiences} from '@/constants/experience';

defineComponent({name: 'ExperienceComponent'});
</script>

<template>
  <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
    <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
      <i class="fas fa-briefcase text-green-600"></i>
      Kinh nghiệm làm việc
    </h2>

    <div class="space-y-4">
      <div v-for="(experience, ie) of experiences"
           :key="ie"
           class="relative pl-3 border-l-4 border-green-200">
        <div class="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full"></div>
        <div class="bg-gray-50 rounded-lg p-3">
          <h3 class="text-xl font-semibold text-gray-800">{{ experience.specialize }}</h3>
          <p class="text-green-600 font-medium mb-2">{{ experience.company }}</p>
          <p class="text-gray-500 text-sm mb-4">{{ experience.time }}</p>
          <p class="text-gray-600 space-y-2 text-sm whitespace-break-spaces">{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>