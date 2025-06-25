<script setup>
import {defineComponent} from 'vue';

defineComponent({name: 'CertificationComponent'});
</script>

<template>
  <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
    <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <i class="fas fa-certificate text-green-600"></i>
      Chứng chỉ
    </h2>

    <div class="space-y-4">
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <i class="fab fa-aws text-orange-500"></i>
        <div>
          <div class="font-medium text-gray-800">AWS Solutions Architect</div>
          <div class="text-sm text-gray-500">2023</div>
        </div>
      </div>
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <i class="fab fa-google text-blue-500"></i>
        <div>
          <div class="font-medium text-gray-800">Google Cloud Professional</div>
          <div class="text-sm text-gray-500">2022</div>
        </div>
      </div>
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <i class="fab fa-docker text-blue-600"></i>
        <div>
          <div class="font-medium text-gray-800">Docker Certified Associate</div>
          <div class="text-sm text-gray-500">2021</div>
        </div>
      </div>
    </div>
  </section>
</template>