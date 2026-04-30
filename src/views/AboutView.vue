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
                    I'm a full-stack developer with close to 3 years of production experience,
                    focused on backend integrations, automated workflows, and systems that hold
                    up under real load.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    At <strong>OTA Sync</strong>, I worked on a cloud-based Property Management
                    System used by <strong>5,000+ users across 40+ markets</strong> building
                    integrations with OpenGDS, PriceLabs and Minimax, developing automated
                    email and reporting systems, and cutting client onboarding time by
                    <strong>60%</strong> through Airbnb and Booking.com data importers.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    Before that, at <strong>Frontmen Studio</strong>, I worked on browser-based
                    casino slot games owning the full frontend game layer from server spin
                    outcomes to reels render, win animations and audio sync. I resolved
                    production-level bugs like race conditions, broken Promise chains and
                    animation layering conflicts across regulated markets (DE, ES, UK).
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    Outside of work, I build my own projects, a real-time blog platform with
                    SignalR and CQRS, an e-learning platform with Stripe payment flows, and a
                    custom event ticketing system with QR-based fraud prevention and
                    transactional seat locking.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    My focus is on building things that actually work in production: reliable,
                    maintainable, and built to solve real business problems.
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
