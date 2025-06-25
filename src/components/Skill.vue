<script setup>
import {defineComponent} from 'vue';
import {skills} from '@/constants/skill';

defineComponent({name: 'SkillComponent'});

const getSkillBarStyle = (year, is) => {
  const percent = Math.min(Math.round((year / 45) * 100), 100)
  const hue = (is * 60) % 360
  const backgroundColor = `hsl(${hue}, 90%, 55%)`

  return {
    width: `${percent}%`,
    backgroundColor
  }
}
</script>

<template>
  <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
    <h2 class="text-xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
      <i class="fas fa-cogs text-green-600"></i>
      Kỹ năng
    </h2>

    <div class="space-y-4">
      <div v-for="(skill, is) in skills" :key="is">
        <h3 class="font-bold text-gray-700 mb-4">{{ skill.type }}</h3>
        <div class="space-y-4">
          <div v-for="(item, ii) in skill.value" :key="ii">
            <div class="flex justify-between mb-1">
              <span class="text-sm text-gray-600">{{ item.name }}</span>
              <span class="text-sm text-gray-500">{{ item.yearOfExperience }} năm</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="h-2 rounded-full skill-bar" :style="getSkillBarStyle(item.yearOfExperience, is)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>