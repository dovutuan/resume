<script setup>
import {defineComponent} from 'vue';
import {info} from '@/constants/info';
import {socials} from '@/constants/social';

defineComponent({name: 'FooterComponent'});
</script>

<template>
  <footer class="bg-gray-600 text-white py-8">
    <div class="container mx-auto px-6 text-center">
      <div class="flex justify-center gap-6">
        <a v-for="(social, is) of socials"
           :key="is"
           :href="social.href"
           target="_blank"
           class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all animate-bounce-in stagger-4 animate-icon">
          <i :class="social.icon" class="text-xl"></i>
        </a>
      </div>
      <p class="mt-4">© {{new Date().getFullYear()}} {{ info.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>