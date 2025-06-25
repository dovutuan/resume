<script setup>
import {defineComponent} from 'vue';
import {education} from '@/constants/education';

defineComponent({name: 'EducationComponent'});
</script>

<template>
  <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
    <h2 class="text-xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
      <i class="fas fa-graduation-cap text-green-600"></i>
      Học vấn
    </h2>

    <div class="space-y-4">
      <div class="border-l-4 border-green-200 pl-4">
        <p class="text-green-600 font-medium my-1">{{ education.school }}</p>
        <h3 class="font-semibold text-sm text-gray-800 my-1">{{ education.major }}</h3>
        <p class="text-gray-600 text-sm my-1">{{ education.year }}</p>
        <p class="text-gray-600 text-sm my-1">GPA: {{ education.gpa }}</p>
      </div>
    </div>
  </section>
</template>