<template>
  <header-component/>

  <body-component/>

  <footer-component/>

  <scroll-top-component/>
</template>

<script setup>
import {onMounted} from 'vue';
import HeaderComponent from '@/components/Header.vue';
import BodyComponent from '@/components/Body.vue';
import FooterComponent from '@/components/Footer.vue';
import ScrollTopComponent from '@/components/ScrollTop.vue';

const setupSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
      }
    });
  });
};

const setupFadeInObserver = () => {
  const options = {threshold: 0.1, rootMargin: '0px 0px -100px 0px'};

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, options);

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
};

const setupSkillBarObserver = () => {
  const skillBars = document.querySelectorAll('.skill-bar');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }
    });
  }, {threshold: 0.5});

  skillBars.forEach(bar => observer.observe(bar));
};

onMounted(() => {
  setupSmoothScrolling();
  setupFadeInObserver();
  setupSkillBarObserver();
});
</script>

<style scoped>
@import "assets/style.css";
</style>
