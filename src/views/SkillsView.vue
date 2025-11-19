<script setup>
import SkillItem from '@/components/SkillItem.vue';
</script>


<template>
  <section id="skills" class="container py-16">

    <!-- TITLE -->
    <h2 class="text-red text-2xl md:text-3xl uppercase">My Skills</h2>

    <!-- GROUP: LANGUAGES -->
    <div class="mt-10">
      <h3 class="uppercase text-xl text-red mb-6">Languages</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillItem img="/images/skills/html-5.png" label="HTML 5" />
        <SkillItem img="/images/skills/css-3.png" label="CSS 3" />
        <SkillItem img="/images/skills/sass.png" label="SASS" />
        <SkillItem img="/images/skills/js.png" label="JavaScript" />
        <SkillItem img="/images/skills/typescript.png" label="TypeScript" />
        <SkillItem img="/images/skills/php.png" label="PHP" />
        <SkillItem img="/images/skills/csharp.png" label="C#" />
      </div>
    </div>

    <!-- GROUP: FRAMEWORKS -->
    <div class="mt-14">
      <h3 class="uppercase text-xl text-red mb-6">Frameworks & Libraries</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillItem img="/images/skills/laravel.png" label="Laravel" />
        <SkillItem img="/images/skills/react.png" label="React" />
        <SkillItem img="/images/skills/redux.png" label="Redux" />
        <SkillItem img="/images/skills/asp.png" label="ASP .NET Core" />
        <SkillItem img="/images/skills/tailwind.png" label="Tailwind CSS" />
        <SkillItem img="/images/skills/jquery.png" label="jQuery" />
      </div>
    </div>

    <!-- GROUP: DATABASES + TOOLS -->
    <div class="mt-14">
      <h3 class="uppercase text-xl text-red mb-6">Databases & Tools</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillItem img="/images/skills/mysql.png" label="MySQL" />
        <SkillItem img="/images/skills/sql_server.png" label="SQL Server" />
        <SkillItem img="/images/skills/git.png" label="Git" />
        <SkillItem img="/images/skills/postman.png" label="Postman" />
      </div>
    </div>

  </section>
</template>

<script>
export default {
  components: {
    SkillItem: {
      props: ["img", "label"],
      template: `
        <div class="flex items-center gap-3">
          <img :src="img" :alt="label" class="w-12 h-12 object-contain" />
          <span class="font-bold text-gray-600">{{ label }}</span>
        </div>
      `
    }
  }
};
</script>

<style scoped>
.text-red {
  color: #fa541c;
}
</style>
