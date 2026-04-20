<template>
    <div class="bg-slate-50">
        <div id="experience" class="container flex">
            <div class="py-14">
                <h2 class="text-red xs:text-2xl xs:mb-7 md:text-3xl uppercase">
                    Experience
                </h2>

                <div class="flex xs:flex-col md:flex-row">
                    <div class="relative xs:w-full md:w-1/4 flex flex-col gap-3 md:pr-8">
                        <div v-for="company in ['OTA Sync', 'Frontmen Studio']" :key="company"
                            @click="toggleArrow(company)"
                            class="relative cursor-pointer rounded-xl border-2 px-5 py-5 transition-all duration-200 overflow-hidden"
                            :class="selectedTitle === company
                                ? 'border-red bg-orange-50 translate-x-1'
                                : 'border-gray-100 bg-white hover:border-orange-200 hover:translate-x-1'">
                            <!-- Leva linija -->
                            <div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-200"
                                :class="selectedTitle === company ? 'bg-red' : 'bg-transparent'"></div>

                            <!-- Naziv -->
                            <p class="font-semibold text-lg"
                                :class="selectedTitle === company ? 'text-red' : 'text-gray-800'">
                                {{ company }}
                            </p>

                            <!-- Rola -->
                            <p class="text-sm text-gray-400 mt-1">
                                {{ company === 'OTA Sync' ? 'Full Stack Developer' : 'Frontend Developer' }}
                            </p>

                            <!-- Datum badge -->
                            <span
                                class="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-700 transition-all duration-200"
                                :class="selectedTitle === company ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'">
                                {{ company === 'OTA Sync' ? 'Nov 2022 – Jan 2024' : 'Sep 2021 – Nov 2022' }}
                            </span>
                        </div>
                    </div>
                    <div class="xs:pt-10 md:pt-0 pl-2 xs:w-full md:w-3/4">
                        <div class="md:text-xl xs:text-l" v-if="selectedTitle == 'Frontmen Studio'">
                            <div>
                                <p class="leading-[1.8] space-y-4 mt-3">
                                    Worked on development and maintenance of browser-based casino slot games within a
                                    modular, config-driven engine built on Angular 1.5 and Pixi.js. Responsible for the
                                    complete frontend game layer, from processing server spin outcomes to rendering
                                    reels, synchronizing animations and audio, and stabilizing features across
                                    production titles.
                                </p>
                            </div>
                            <div>
                                <ul class="list-disc ml-5 mt-4 space-y-3 leading-[1.7]">
                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Built and maintained slot games:</span>
                                        Dino Zone, Moonlight Wolves, Silk Road Riches, Super Stack A Cat, Fortune Teller
                                        6, Aztec Blox, Wild West Zone.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Implemented complex game features:</span>
                                        SwitchingStacks reel-swap (backend bonusInfo -> client mapping -> Spine
                                        animation), StickyWilds with live respin counters, Free Spins trigger/retrigger,
                                        and turbo/slam-stop spin control.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Owned the full spin flow:</span>
                                        UI event (SlotInterfaceService) -> game state logic (SlotService) -> server
                                        communication (LeanderLegaCommunicationService) -> reels render, win-line
                                        highlights and audio sync, coordinated via Promises and GSAP timelines.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Resolved production issues:</span>
                                        Race conditions causing duplicate spin requests (spinInProgress flags), autoplay
                                        counter going negative during sticky-wild features (stopOnFeature guards),
                                        broken Promise chains from missing .bind() calls, and animation layering
                                        conflicts.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Localization & regulated markets:</span>
                                        Adapted games for DE, ES and UK. Market-conditional UI via PHP config
                                        preprocessing, RTP rule adjustments and jurisdiction-specific autoplay
                                        restrictions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:text-xl xs:text-l" v-if="selectedTitle == 'OTA Sync'">
                            <div>
                                <p class="leading-[1.8] space-y-4 mt-3">
                                    Worked on a cloud-based Property Management System (PMS) used by <span
                                        class="font-semibold">5,000+ users across 40+ markets</span>, enabling hotels
                                    and apartment owners to manage reservations, pricing, expenses and guest
                                    communication from a single platform. Core focus was on API integrations, automated
                                    workflows, and internal module development.
                                </p>
                            </div>
                            <div>
                                <ul class="list-disc ml-5 mt-4 space-y-4 leading-[1.8]">
                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">OpenGDS Integration:</span> Connected the
                                        PMS to the global travel agency network. Built PHP cURL connectors, designed
                                        mapping tables for properties, room types and pricing plans, and implemented
                                        webhook handlers for real-time reservation sync.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">PriceLabs API Integration:</span> Built a
                                        bidirectional REST flow between the PMS and PriceLabs dynamic pricing engine.
                                        PMS pushes listings and calendars, PriceLabs fires signed webhooks with updated
                                        rates, which are then validated and applied in bulk.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Minimax Integration:</span> Developed an
                                        adapter layer that maps internal invoices to Minimax accounting REST format,
                                        handles OAuth2 token refresh, and stores external IDs, removing the need for
                                        manual double bookkeeping.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Expenses Module:</span> Built a full
                                        expense tracking system with manual and recurring (daily, monthly, yearly)
                                        entries, cron-based auto-generation with duplicate prevention, room-level cost
                                        allocation, and PDF/Excel export.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Automated Emails:</span>
                                        Implemented configurable guest notification templates with placeholder
                                        substitution, rule-based scheduling (X days before/after arrival or departure),
                                        per-channel filtering, and delivery via InfoBip API.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Content Import from Airbnb &
                                            Booking.com:</span>
                                        Built scraping pipelines using WebScrapingAPI. Extracts
                                        room data, descriptions, occupancy info and images, converts to base64, and maps
                                        directly into internal DB tables, reducing onboarding time by 60%.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
let selectedTitle = ref(null);

selectedTitle.value = "OTA Sync";

const toggleArrow = (title) => {
    selectedTitle.value = title;
};
</script>

<style scoped>
.title-color {
    color: #fa541c;
}

.left-before::before {
    transition: all 0.2s ease 0s;
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 3.2px;
    height: 100%;
    background: linear-gradient(rgb(247, 151, 141), rgb(221, 134, 114));
}

.arrow {
    transition: all 0.2s ease 0s;
    content: "";
    position: absolute;
    bottom: 32px;
    left: 0;
    width: 100%;
    height: 3.2px;
    background: linear-gradient(90deg, rgb(247, 151, 141), rgb(133, 94, 85));
}
</style>
