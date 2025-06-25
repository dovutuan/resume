<script setup>
import {defineComponent} from 'vue';
import {info} from '@/constants/info';

defineComponent({name: 'AboutComponent'});
</script>

<template>
  <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
    <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
      <i class="fas fa-user-circle text-green-600"></i>
      Giới thiệu
    </h2>
    <p class="text-gray-600 leading-relaxed text-sm whitespace-break-spaces">{{ info.description }}</p>
  </section>
</template>