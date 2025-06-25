<script setup>
import {defineComponent} from 'vue';

defineComponent({name: 'LanguageComponent'});
</script>

<template>
  <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
    <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <i class="fas fa-language text-green-600"></i>
      Ngôn ngữ
    </h2>

    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span class="font-medium text-gray-700">Tiếng Việt</span>
        <span class="text-sm text-gray-500">Bản ngữ</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="font-medium text-gray-700">Tiếng Anh</span>
        <span class="text-sm text-gray-500">IELTS 7.0</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="font-medium text-gray-700">Tiếng Nhật</span>
        <span class="text-sm text-gray-500">N3</span>
      </div>
    </div>
  </section>
</template>