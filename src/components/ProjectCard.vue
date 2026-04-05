<script setup>
defineProps({
    title: String,
    date: String,
    description: String,
    details: String,
    stack: Array,
    image: String,
    github: String,
    demo: String,
    hoverOffset: Number,

    reverse: Boolean,
    featured: Boolean,
    compact: Boolean
})

const emit = defineEmits(['open'])

const getTechClass = (tech) => {
    const t = tech.toLowerCase()

    if (t.includes('html')) return 'bg-red-50 text-red border-red-200'
    if (t.includes('css')) return 'bg-blue-50 text-blue-600 border-blue-200'

    if (t.includes('react')) return 'bg-blue-50 text-blue-600 border-blue-200'
    if (t.includes('redux')) return 'bg-purple-50 text-purple-600 border-purple-200'

    if (t.includes('laravel')) return 'bg-red-50 text-red border-red-200'
    if (t.includes('php')) return 'bg-indigo-50 text-indigo-600 border-indigo-200'

    if (t.includes('asp')) return 'bg-purple-50 text-purple-700 border-purple-300'
    if (t.includes('net')) return 'bg-purple-50 text-purple-700 border-purple-300'

    if (t.includes('javascript')) return 'bg-yellow-50 text-yellow-700 border-yellow-200'
    if (t.includes('jquery')) return 'bg-yellow-50 text-yellow-700 border-yellow-200'

    if (t.includes('mysql') || t.includes('sql')) return 'bg-sky-100 text-sky-500 border-sky-200'

    if (t.includes('tailwind')) return 'bg-cyan-50 text-cyan-700 border-cyan-200'
    if (t.includes('bootstrap')) return 'bg-indigo-50 text-indigo-600 border-indigo-200'

    if (t.includes('wordpress') || t.includes('woocommerce')) return 'bg-blue-50 text-blue-700 border-blue-200'

    if (t.includes('ajax')) return 'bg-gray-100 text-gray-700 border-gray-200'

    return 'bg-gray-50 text-gray-700 border-gray-200'
}
</script>

<template>
    <!-- FEATURED -->
    <div v-if="featured"
        class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col md:flex-row gap-8 p-6 md:p-8"
        :class="reverse ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'">



        <!-- IMAGE -->
        <div class="w-full md:w-[40%] overflow-hidden rounded-xl project_image h-[260px] md:h-[320px]">
            <a :href="demo">
                <img :src="image" :alt="title"
                    class="w-full object-cover transition-transform duration-[2000ms] ease-in-out"
                    :style="`transform: translateY(0%); --hover-offset:${hoverOffset}%`" />
            </a>
        </div>

        <!-- TEXT -->
        <div class="w-full md:w-[60%] flex flex-col justify-center">
            <h3 class="text-xl font-bold mb-2">
                {{ title }} <span class="text-gray-500 text-sm">({{ date }})</span>
            </h3>

            <div class="text-gray-700 text-sm leading-[1.8] space-y-3 mb-4" v-html="description" />

            <!-- STACK -->
            <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="(item, index) in stack" :key="index"
                    class="px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-[1px]"
                    :class="getTechClass(item)">
                    {{ item }}
                </span>
            </div>

            <!-- LINKS -->
            <div class="flex gap-6 text-sm font-medium flex-col md:flex-row">
                <a :href="github" target="_blank" class="flex items-center gap-2 hover:text-red transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    Code
                </a>

                <a :href="demo" target="_blank" class="flex items-center gap-2 hover:text-red transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                    </svg>
                    Live Demo
                </a>

                <button v-if="details" @click="$emit('open')" class="details-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="8" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Details
                </button>
            </div>
        </div>
    </div>

    <!-- COMPACT -->
    <div v-else-if="compact" @click="$emit('open')"
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer">
        <img :src="image" :alt="title"
            class="w-full h-52 md:h-56 object-cover object-top transition duration-500 hover:scale-105" />

        <div class="p-4">
            <h4 class="font-semibold text-sm mb-1">{{ title }}</h4>
            <p class="text-xs text-gray-500 mb-2">{{ date }}</p>
            <p class="text-xs text-gray-600 line-clamp-3 mb-3" v-html="description" />

            <div class="flex flex-wrap gap-1">
                <span v-for="(item, index) in stack" :key="index"
                    class="px-2.5 py-1 text-[11px] font-medium rounded-full transition hover:bg-gray-100"
                    :class="getTechClass(item)">
                    {{ item }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project_image img {
    transform: translateY(0%);
    transition: transform 2s ease;
}

.project_image:hover img {
    transform: translateY(calc(var(--hover-offset) * -1));
}

/* ─── Details button ─────────────────────────────────────── */
.details-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    background: none;
    border: none;
    padding: 0;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;
}

.details-btn:hover {
    color: #ef4444;
}
</style>