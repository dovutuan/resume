<script setup>
import {defineComponent} from 'vue';

defineComponent({name: 'FooterComponent'});
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-6 text-center">
      <p class="mb-4">© 2025 Đỗ Vũ Tuấn. All rights reserved.</p>
      <div class="flex justify-center gap-6">
        <a href="#" class="hover:text-purple-400 transition-colors">
          <i class="fab fa-github text-xl"></i>
        </a>
        <a href="#" class="hover:text-purple-400 transition-colors">
          <i class="fab fa-linkedin text-xl"></i>
        </a>
        <a href="#" class="hover:text-purple-400 transition-colors">
          <i class="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" class="hover:text-purple-400 transition-colors">
          <i class="fas fa-envelope text-xl"></i>
        </a>
      </div>
    </div>
  </footer>
</template>