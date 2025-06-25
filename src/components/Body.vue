<script setup>
import {defineComponent} from 'vue';
import SkillComponent from '@/components/Skill.vue';
import AboutComponent from '@/components/About.vue';
import EducationComponent from '@/components/Education.vue';
import ExperienceComponent from '@/components/Experience.vue';
import ProjectComponent from '@/components/Project.vue';

defineComponent({name: 'BodyComponent'});
</script>

<template>
  <main class="container mx-auto p-4">
    <div class="grid lg:grid-cols-4 gap-4">
      <!-- Left Column -->
      <div class="lg:col-span-3 space-y-4">
        <!-- About Section -->
        <about-component/>

        <!-- Experience Section -->
        <experience-component/>

        <!-- Projects Section -->
        <project-component/>
      </div>

      <!-- Right Column -->
      <div class="space-y-4">
        <!-- Education Section -->
        <education-component/>

        <!-- Skills Section -->
        <skill-component/>

        <!-- Certifications Section -->

        <!-- Languages Section -->
      </div>
    </div>
  </main>
</template>