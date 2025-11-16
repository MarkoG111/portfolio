<script setup></script>

<template>
  <div>
    <div id="about" class="xs:w-screen container md:mx-auto flex">
      <div class="py-14">
        <h2 class="text-red md:text-3xl xs:text-2xl uppercase">About</h2>

        <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
          I’m a <strong>full-stack developer</strong> with <strong>more than 2 years of professional
            experience</strong>, I design and build <strong>production-grade web applications</strong>,
          <strong>OTA integrations</strong>, and <strong>interactive game systems</strong>. I deliver <strong>end-to-end
            solutions</strong> -
          from <strong>backend architecture</strong> and <strong>APIs</strong> to <strong>UI development</strong>,
          <strong>performance optimization</strong>, and <strong>automation workflows</strong>.
        </p>

        <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
          My career began in <strong>game development</strong>, where I learned the importance of performance,
          animation, and seamless user experience. That foundation shaped my transition into
          <strong>full-stack web engineering</strong>, where I apply the same precision and creativity to real-world
          business systems.
        </p>

        <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
          I’ve worked as a <strong>JavaScript Developer</strong> at Frontmen Studio and as a <strong>Full Stack
            Developer</strong>
          at OTA Sync, where I built a comprehensive Property Management System (PMS), automated reporting pipelines,
          real-time synchronization modules, and integrations with multiple third-party APIs.
        </p>

        <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
          I’m passionate about crafting <strong>clean, maintainable code</strong>, solving complex problems,
          and building reliable, scalable software that moves businesses forward. I'm always open to new challenges
          and collaborations - feel free to reach out.
        </p>

        <p class="md:text-xl py-4">
          <a href="/cv/Marko_Gačanović_CV.pdf" download class="download-link relative md:text-xl pl-6 text-red">Download CV</a>
        </p>
      </div>
    </div>


  </div>
</template>

<style scoped>
.download-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 40%;
  transform: transalteY(-50%);
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 10px solid rgb(247, 151, 141);
}
</style>
