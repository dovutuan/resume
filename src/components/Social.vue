<script setup>
import {defineComponent} from 'vue';
import {socials} from '@/constants/social';

defineComponent({name: 'SocialComponent'});
</script>

<template>
  <div class="absolute top-2 right-2 flex gap-4 z-10">
    <a v-for="(social, is) in socials"
       :key="is"
       :href="social.href"
       target="_blank"
       class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all animate-bounce-in stagger-4 animate-icon">
      <i :class="social.icon"></i>
    </a>
  </div>
</template>