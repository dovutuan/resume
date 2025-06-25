<script setup>
import {defineComponent, onMounted, onUnmounted, ref} from 'vue';

defineComponent({name: 'ScrollTopComponent'});

const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed w-12 h-12 bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-opacity-75 transition-opacity">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>