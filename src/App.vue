<template>
  <div class="flex flex-col min-h-screen font-Onest">
    <div id="nav">
      <SiteNavigation />
    </div>
    <HomeHero />
    <AboutView />
    <ExperienceView />
    <SkillsView />
    <ProjectsView />
    <BlogView />
    <ContactView />
  </div>
</template>

<script setup>
import SiteNavigation from "./components/SiteNavigation.vue";
import HomeHero from "./components/HomeHero.vue";
import AboutView from "./views/AboutView.vue";
import ExperienceView from "./views/ExperienceView.vue";
import SkillsView from "./views/SkillsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import BlogView from "./views/BlogView.vue";
import ContactView from "./views/ContactView.vue";
</script>

<style scoped>
#nav {
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 9999;
}

body, html {
  overflow-x: hidden;
}
</style>
