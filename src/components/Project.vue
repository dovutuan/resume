<script setup>
import {defineComponent} from 'vue';
import {projects} from '@/constants/project';

defineComponent({name: 'ProjectComponent'});
</script>

<template>
  <section class="bg-white rounded-2xl p-6 card-shadow hover-lift">
    <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
      <i class="fas fa-code text-green-600"></i>
      Dự án nổi bật
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
      <div
          v-for="(project, ip) in projects"
          :key="ip"
          class="border border-gray-200 rounded-xl p-3 hover:border-green-300 transition-colors">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <i :class="project.icon" class="text-green-600"></i>
          </div>
          <h3 class="text-lg font-semibold">{{ project.name }}</h3>
        </div>

        <div class="grid grid-cols-2 text-sm text-gray-600 mb-4 gap-y-1 font-bold">
          <div>Khách hàng:</div>
          <div>{{ project.customer }}</div>
          <div>Team size:</div>
          <div>{{ project.size }}</div>
          <div>Thời gian:</div>
          <div>{{ project.time }}</div>
          <div>Vị trí:</div>
          <div>{{ project.position }}</div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="(backend, ib) in project.backends"
                :key="ib"
                class="px-3 py-1 bg-blue-100 text-blue-950 rounded-full text-sm">
            {{ backend }}
          </span>
          <span v-for="(frontend, ife) in project.frontends"
                :key="ife"
                class="px-3 py-1 bg-green-100 text-green-950 rounded-full text-sm">
            {{ frontend }}
          </span>
          <span v-for="(db, idb) in project.databases"
                :key="idb"
                class="px-3 py-1 bg-yellow-100 text-yellow-950 rounded-full text-sm">
            {{ db }}
          </span>
          <span v-for="(tool, it) in project.tools"
                :key="it"
                class="px-3 py-1 bg-red-100 text-red-950 rounded-full text-sm">
            {{ tool }}
          </span>
          <span v-for="(iac, ii) in project.iacs"
                :key="ii"
                class="px-3 py-1 bg-lime-100 text-lime-950 rounded-full text-sm">
            {{ iac }}
          </span>
          <span v-for="(cloud, ci) in project.clouds"
                :key="ci"
                class="px-3 py-1 bg-sky-100 text-sky-950 rounded-full text-sm">
            {{ cloud }}
          </span>
        </div>

        <p class="text-gray-600 text-sm whitespace-break-spaces">{{ project.description }}</p>
      </div>
    </div>


    <!--    <div class="grid md:grid-cols-2 gap-6">-->
    <!--      <div v-for="(project, ip) in projects"-->
    <!--           :key="ip"-->
    <!--           class="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors">-->
    <!--            <div class="flex items-center gap-3 mb-4">-->
    <!--              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">-->
    <!--                <i :class="project.icon" class="text-green-600"></i>-->
    <!--              </div>-->
    <!--              <h3 class="text-lg font-semibold">{{ project.name }}</h3>-->
    <!--            </div>-->
    <!--        <div class="flex flex-wrap gap-2 mb-4">-->
    <!--          <span v-for="(backend, ib) in project.backends" class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>-->
    <!--          <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>-->
    <!--          <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">MongoDB</span>-->
    <!--        </div>-->
    <!--        <p class="text-gray-600 mb-4">-->
    <!--          Nền tảng thương mại điện tử đầy đủ tính năng với admin dashboard,-->
    <!--          thanh toán online và quản lý kho hàng.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>