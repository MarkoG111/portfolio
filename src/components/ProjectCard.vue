<script setup>
defineProps({
    title: String,
    date: String,
    description: String,
    stack: Array,
    image: String,
    github: String,
    demo: String,
    reverse: Boolean,
    hoverOffset: Number
})
</script>

<template>
    <div class="shadow-2xl flex gap-12 md:h-[460px] xs:h-[600px] md:p-12 xs:p-4"
        :class="reverse ? 'md:flex-row-reverse xs:flex-col' : 'md:flex-row xs:flex-col'">

        <!-- IMAGE -->
        <div class="project_image h-auto overflow-hidden md:w-3/5 xs:w-auto bg-hsla-46 bg-opacity-20 shadow-md">
            <a :href="demo">
                <img :src="image" :alt="title" :style="`--hover-offset: ${hoverOffset}%`" />
            </a>
        </div>

        <!-- TEXT -->
        <div class="flex flex-col items-center justify-center text-center md:w-1/2">
            <h3 class=" text-[#2d2e32] font-bold xs:text-m lg:text-1xl mb-2 flex items-center justify-center gap-3.2px">
                {{ title }} 
                <span class="font-normal xs:text-m lg:text-l">&nbsp; ({{ date }}) </span>
            </h3>

            <p class="text-[#767676] xs:text-m lg:text-l font-semibold lg:mr-8 text-justify leading-relaxed"
                v-html="description">
            </p>

            <!-- STACK -->
            <div class="flex flex-wrap gap-1 justify-center mt-3">
                <p v-for="(item, index) in stack" :key="index"
                    class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                    {{ item }}
                </p>
            </div>

            <!-- LINKS -->
            <div class="flex items-center justify-evenly gap-14 mt-12">
                <a :href="github" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                    Code
                    <!-- Github icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                        </path>
                    </svg>
                </a>

                <a :href="demo" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project_image img {
    transform: translateY(0%);
    transition: transform 8s ease-in-out;
}

.project_image img:hover {
    transform: translateY(calc(var(--hover-offset) * -1));
}
</style>
