<script setup>
import { ref } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const featured = projects.slice(0, 2)
const others = projects.slice(2)

const showOthers = ref(false)
const selectedProject = ref(null)

const toggleOthers = () => {
    showOthers.value = !showOthers.value
}
</script>

<template>
    <div id="projects" class="bg-slate-50">
        <div class="container py-16">

            <!-- TITLE -->
            <h2 class="text-red text-3xl uppercase mb-12">
                Projects
            </h2>

            <!-- FEATURED -->
            <div class="space-y-16">
                <ProjectCard v-for="project in featured" :key="project.id" v-bind="project" featured
                    @open="selectedProject = project" />
            </div>

            <!-- CTA BUTTON — always visible toggle -->
            <div class="relative mt-24 flex flex-col items-center">

                <!-- Decorative line above -->
                <div class="flex items-center gap-4 w-full max-w-xl mb-10">
                    <div class="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                    <span class="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium whitespace-nowrap">
                        {{ showOthers ? 'Earlier Work' : 'More Work' }}
                    </span>
                    <div class="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                </div>

                <!-- Main CTA -->
                <button @click="toggleOthers" class="cta-btn" :class="{ 'is-open': showOthers }">
                    <span class="cta-bg-base"></span>
                    <span class="cta-bg-hover"></span>

                    <span class="cta-content">
                        <span class="cta-number">{{ showOthers ? '−' : `+${others.length}` }}</span>
                        <span class="cta-divider"></span>
                        <span class="cta-text">
                            <span class="cta-label">
                                {{ showOthers ? 'Hide Older Projects' : 'Explore Older Projects' }}
                            </span>
                            <span class="cta-sublabel">From 2018 – 2021</span>
                        </span>
                        <span class="cta-arrow" :class="{ 'is-flipped': showOthers }">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </span>
                    </span>
                </button>

                <!-- Decorative dots -->
                <div class="flex gap-2 mt-8">
                    <span v-for="i in others.length" :key="i"
                        class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        :class="showOthers ? 'bg-red-300' : 'bg-gray-300'"
                        :style="`transition-delay: ${i * 60}ms`"></span>
                </div>
            </div>

            <!-- OLDER PROJECTS — featured style -->
            <Transition name="section-reveal">
                <div v-if="showOthers" class="mt-20 space-y-16">

                    <!-- Section header -->
                    <div class="flex items-center gap-4">
                        <div class="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                        <span class="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium whitespace-nowrap">
                            Earlier Work · 2018 – 2021
                        </span>
                        <div class="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                    </div>

                    <TransitionGroup name="project-stagger" tag="div" class="space-y-16">
                        <ProjectCard v-for="(project, index) in others" :key="project.id" v-bind="project" featured
                            :style="`--stagger: ${index}`" @open="selectedProject = project" />
                    </TransitionGroup>
                </div>
            </Transition>

        </div>
    </div>

    <!-- MODAL -->
    <Transition name="modal">
        <div v-if="selectedProject"
            class="z-to-max fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-20 overflow-y-auto"
            @click.self="selectedProject = null">

            <div class="modal-card bg-white max-w-3xl w-full rounded-2xl shadow-2xl max-h-[85vh] overflow-hidden flex flex-col mb-12">
                <!-- IMAGE -->
                <div class="relative w-full h-52 flex-shrink-0 overflow-hidden">
                    <img :src="selectedProject.image" :alt="selectedProject.title"
                        class="w-full h-full object-cover object-top" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    <!-- Close -->
                    <button @click="selectedProject = null"
                        class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    <!-- Title overlay -->
                    <div class="absolute bottom-4 left-6 right-16">
                        <h3 class="text-white text-xl font-bold leading-tight">{{ selectedProject.title }}</h3>
                        <p class="text-white/70 text-xs mt-0.5">{{ selectedProject.date }}</p>
                    </div>
                </div>

                <!-- SCROLL BODY -->
                <div class="p-6 overflow-y-auto">

                    <!-- Stack -->
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span v-for="(item, index) in selectedProject.stack" :key="index"
                            class="px-3 py-1 text-xs font-semibold rounded-full border shadow-sm">
                            {{ item }}
                        </span>
                    </div>

                    <!-- Details content -->
                    <div class="text-gray-700 text-sm leading-relaxed" v-html="selectedProject.details || selectedProject.description" />

                    <!-- Links -->
                    <div class="flex gap-6 mt-8 pt-6 border-t border-gray-100">
                        <a :href="selectedProject.github" target="_blank"
                            class="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500 transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                            View Code
                        </a>
                        <a :href="selectedProject.demo" target="_blank"
                            class="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500 transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
/* ─── CTA Button ─────────────────────────────────────────── */
.cta-btn {
    position: relative;
    display: inline-flex;
    align-items: stretch;
    border-radius: 1rem;
    border: 1.5px solid #e2e8f0;
    background: white;
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.04),
        0 2px 4px -2px rgb(0 0 0 / 0.04),
        0 0 0 0 rgb(239 68 68 / 0);
    cursor: pointer;
    transition:
        box-shadow 0.35s ease,
        border-color 0.35s ease,
        transform 0.2s ease;
    min-width: 340px;
}

.cta-btn:hover {
    border-color: #fca5a5;
    box-shadow:
        0 20px 40px -8px rgb(0 0 0 / 0.1),
        0 0 0 4px rgb(239 68 68 / 0.06);
    transform: translateY(-2px);
}

.cta-btn:active {
    transform: translateY(0);
}

.cta-bg-base {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, #fff 0%, #fafafa 100%);
    transition: opacity 0.3s;
}

.cta-bg-hover {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, #fff5f5 0%, #fff 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
}

.cta-btn:hover .cta-bg-hover {
    opacity: 1;
}

.cta-content {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0;
}

.cta-number {
    font-size: 2rem;
    font-weight: 800;
    color: #ef4444;
    letter-spacing: -0.03em;
    padding: 1.25rem 1.5rem;
    line-height: 1;
    flex-shrink: 0;
    transition: color 0.3s;
}

.cta-btn:hover .cta-number {
    color: #dc2626;
}

.cta-divider {
    width: 1.5px;
    align-self: stretch;
    background: #e2e8f0;
    flex-shrink: 0;
    margin: 0.75rem 0;
    transition: background 0.3s;
}

.cta-btn:hover .cta-divider {
    background: #fca5a5;
}

.cta-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.1rem 1.4rem;
    gap: 0.15rem;
}

.cta-label {
    font-size: 0.9rem;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: -0.01em;
    transition: color 0.3s;
}

.cta-btn:hover .cta-label {
    color: #dc2626;
}

.cta-sublabel {
    font-size: 0.72rem;
    color: #9ca3af;
    font-weight: 500;
    letter-spacing: 0.02em;
}

/* ─── Arrow flip on open ─────────────────────────────────── */
.cta-arrow {
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: #cbd5e1;
    transition: color 0.3s, transform 0.35s ease;
}

.cta-arrow svg {
    width: 1.2rem;
    height: 1.2rem;
}

.cta-arrow.is-flipped {
    transform: rotate(180deg);
}

.cta-btn:hover .cta-arrow {
    color: #ef4444;
}

.cta-btn:not(.is-open):hover .cta-arrow {
    transform: translateY(3px);
}

.cta-btn.is-open:hover .cta-arrow {
    transform: rotate(180deg) translateY(3px);
}

/* ─── Section reveal ─────────────────────────────────────── */
.section-reveal-enter-active {
    transition: all 0.5s ease;
}

.section-reveal-enter-from {
    opacity: 0;
    transform: translateY(24px);
}

/* ─── Staggered project cards ────────────────────────────── */
.project-stagger-enter-active {
    transition: all 0.55s ease;
    transition-delay: calc(var(--stagger) * 120ms);
}

.project-stagger-enter-from {
    opacity: 0;
    transform: translateY(32px);
}
/* ─── Modal transition ───────────────────────────────────── */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
    transform: scale(0.95) translateY(16px);
}

.modal-card {
    transition: transform 0.3s ease;
}

.z-to-max {
    z-index: 999999;
}
</style>