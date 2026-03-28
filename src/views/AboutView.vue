<script setup></script>

<template>
    <div>
        <div id="about" class="xs:w-screen container md:mx-auto flex">
            <div class="py-14">
                <h2 class="text-red md:text-3xl xs:text-2xl uppercase">About</h2>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    I’m a <strong>full-stack developer</strong> with <strong>more than 2 years of professional
                        experience</strong>,
                    building <strong>production-grade applications</strong> and delivering <strong>end-to-end
                        solutions</strong>
                    from backend architecture and APIs to UI development, performance optimization, and automation
                    workflows.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    I specialize in <strong>API integrations</strong>, <strong>real-time data synchronization</strong>,
                    and
                    <strong>automation systems</strong> that reduce manual work and improve reliability.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    My work includes developing a full <strong>Property Management System (PMS)</strong> with OTA
                    integrations,
                    pricing automation, reporting pipelines, and accounting system connections.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    My background in game development shaped my approach to performance, responsiveness, and user
                    experience.
                </p>

                <p class="md:text-xl py-4">
                    <a href="/cv/Marko_Gačanović_CV.pdf" download
                        class="download-link relative md:text-xl pl-6 text-red">Download CV</a>
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
