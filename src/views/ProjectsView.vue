<script setup>
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div id="projects" class="bg-slate-50">
    <div class="container py-12">

      <h2 class="text-red xs:text-2xl md:text-3xl uppercase pt-14">Projects</h2>

      <div class="flex flex-col py-10">
        <ProjectCard v-for="project in projects" :key="project.id" v-bind="project" />
      </div>

    </div>
  </div>
</template>
