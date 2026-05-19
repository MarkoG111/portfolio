<script setup></script>

<template>
    <div>
        <div id="about" class="xs:w-screen container md:mx-auto flex">
            <div class="py-14">
                <h2 class="text-red md:text-3xl xs:text-2xl uppercase">About</h2>

                <p class="text-gray-500 uppercase tracking-wider text-sm mb-2">
                    My Journey
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    I'm a full-stack developer with 3 years of production experience, building backend integrations, automated workflows, and game systems that run under real load.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    At <strong>OTA Sync</strong>, I worked on a cloud-based Property Management System used by <strong>5,000+ users</strong> across <strong>40+ markets</strong> building integrations with OpenGDS, PriceLabs, and Minimax, developing automated email and reporting pipelines, and cutting client onboarding time by 60% through Airbnb and Booking.com data importers.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    At <strong>Frontmen Studio</strong>, I owned the full frontend game loop for browser-based casino slot games on the Leander platform: processing server spin outcomes, coordinating GSAP/Pixi.js/Spine animation sequences, and resolving production issues including race conditions, broken Promise chains, and compliance requirements across UK, DE, and NL regulated markets.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    Outside of work I build my own projects: a real-time blog platform using SignalR and CQRS, an e-learning platform with Stripe payment flows, and a custom event ticketing system with QR-based fraud prevention and transactional seat locking.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    I'm currently looking for full-stack, backend, or frontend positions where there's room to grow, ideally somewhere with real integrations, solid codebase, and problems worth solving.
                </p>
                <p class="md:text-xl py-4">
                    <a href="/cv/Marko_Gacanovic_Fullstack.pdf" download
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
