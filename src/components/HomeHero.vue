<template>
  <SiteNavigation ref="siteNavigation" />

  <div class="bg-[#FA5441] overflow-hidden">
    <div class="container flex xs:flex-col md:flex-row md:mt-32 xs:mt-20 fade-in">
      <!-- TEXT BLOCK -->
      <div class="md:pt-7 lg:pt-36 xs:pt-14 md:text-left xs:text-center">

        <!-- IME -->
        <h1 class="md:text-6xl xs:text-4xl font-bold leading-tight">
          Marko Gačanović
        </h1>

        <!-- POZICIJA -->
        <h2 class="md:text-3xl xs:text-xl md:mt-3 text-black/80 font-medium">
          Full-Stack Developer
        </h2>

        <!-- SIGNATURE PORUKA -->
        <p class="md:text-xl xs:text-base md:mt-5 xs:mt-4 max-w-lg text-black/90 md:leading-relaxed xs:leading-snug">
          Building scalable web platforms, automation workflows & data-driven systems.
        </p>

        <!-- DUGMIĆI -->
        <div class="md:mt-10 xs:mt-8 flex xs:justify-center md:justify-start">
          <button @click="scrollToSection('contact')"
            class="border-2 border-black font-semibold xs:py-2 xs:px-6 md:py-4 md:px-12 hover:bg-black hover:text-white transition">
            Hire Me
          </button>

          <button @click="scrollToSection('projects')"
            class="border-2 border-black font-semibold xs:py-2 xs:px-6 xs:ml-3 md:py-4 md:px-12 hover:bg-black hover:text-white transition">
            My Works
          </button>
        </div>
      </div>

      <!-- SLIKA -->
      <div class="md:ml-0 lg:ml-36 xs:mx-auto xs:mt-12 md:mt-0 fade-in delay-200">
        <img class="xxl:w-96 xl:w-80 md:w-[22rem] xs:w-64 marko-img" src="/images/profile/Marko_b.png" />
      </div>

    </div>
  </div>
</template>

<script>
import SiteNavigation from '@/components/SiteNavigation.vue';

export default {
  components: { SiteNavigation },
  methods: {
    scrollToSection(section) {
      this.$refs.siteNavigation.scrollTo(section);
    }
  },
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.7s ease-out forwards;
}

.fade-in.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 1280px) and (max-width: 1536px) {
  .marko-img {
    width: 21rem;
  }
}
</style>
