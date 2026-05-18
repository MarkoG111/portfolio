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
                                    Built and maintained frontend systems for browser-based casino slot games on the Leander Games platform, a config-driven engine powering <span class="font-semibold">8+ titles</span> simultaneously, each with distinct mechanics, visual themes, and regulated market requirements.
                                </p>
                            </div>
                            <div>
                                <ul class="list-disc ml-5 mt-4 space-y-3 leading-[1.7]">
                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Game Flow & State Management:</span>
                                        Owned the complete frontend game loop across multiple titles: from user input and spin initiation through HTTP communication with the Leander server, outcome processing, game model updates, and final UI cleanup. Implemented race condition guards (spinInProgress flag, disableInterface/enableInterface pattern) to prevent duplicate spin requests and ensure consistent state across the full async sequence. Managed feature lifecycle transitions (Free Spins, Respins, bonus rounds) as distinct state machines within the main spin flow.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Config-Driven Game Engine:</span>
                                        Developed and extended a modular engine where game layouts, animations, UI logic, and component behavior were defined through PHP-generated JSON configurations. Implemented dynamic @reference bindings that evaluated live game state at runtime (@game, @iface, @slot), a named layer system for deterministic render ordering, and Portrait/Landscape override resolution, enabling new game variants to be shipped by modifying configuration rather than engine code.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Gameplay Features Implementation:</span>
                                        Implemented advanced slot mechanics across 8+ games, including Sticky Wilds with persistent state across respins, Swap Wolves symbol transformations with sequential audio sync, Free Spins lifecycles, Mystery symbol reveal systems, Cascade wins with growing multipliers, and Jackpot tiers. Mapped server-driven feature data (positions, flags, feature objects) into frontend game state via the Communication Service, then coordinated GSAP timelines, Pixi.js rendering, and Spine skeletal animations into synchronized visual sequences.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Animation & Rendering Synchronization:</span>
                                        Coordinated multi-layer animation sequences using GSAP TimelineMax and Pixi.js (WebGL), synchronizing reel spin/stop, symbol landing animations, win-line highlights, Big Win countups, and Spine character animations, all driven by Promise chains that guaranteed correct execution order. Integrated Howler audio at precise timeline positions to match sound events with visual triggers (scatter lands, anticipation builts, win celebrations).
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Production Stability & Debugging:</span>
                                        Diagnosed and resolved production issues including double-spin race conditions from rapid user input or autoplay misfires, broken Promise chains causing premature UI unlock or overlapping animations, early reel stop desynchronization between user input timing and server response timing, and autoplay compliance failures on regulated markets (UK, DE, NL). Used browser devtools, conditional breakpoints, and timestamp logging within Promise chains to isolate async timing issues.
                                    </li>

                                    <li class="p-2 rounded-lg border border-gray-100">
                                        <span class="font-semibold text-red">Backend Integration & Regulated Markets:</span>
                                        Maintained the Communication Service layer responsible for mapping raw Leander server responses into typed frontend outcome objects: symbols per reel, win lines, feature flags, scatter counts, anticipation data. Applied market-specific compliance rules across the full game flow for UK, DE, NL, and Ontario markets, including small win suppression (no animation/audio when win ≤ bet), autoplay restrictions, and conditional UI behavior driven by checkRegulatedMarket() checks.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:text-xl xs:text-l" v-if="selectedTitle == 'OTA Sync'">
                            <div>
                                <p class="leading-[1.8] space-y-4 mt-3">
                                    Worked on a large-scale cloud-based Property Management System (PMS) used by <span
                                    class="font-semibold">5000+ users</span> across <span class="font-semibold">40+ markets</span>, focused on real-time data synchronization, third-party integrations, and automation of core hotel operations.

                                    Owned backend-heavy features where data consistency, external API reliability, and async processing were critical to preventing issues like overbooking and financial mismatches.
                                </p>
                            </div>
                            <div>
                                <ul class="list-disc ml-5 mt-4 space-y-4 leading-[1.8]">
                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">OpenGDS Integration:</span> Built a bidirectional reservation synchronization system between the PMS and external distribution networks (GDS), handling both inbound webhooks for new/updated bookings and outbound updates for availability, pricing, and cancellations. Implemented mapping between internal entities and external IDs, ensured idempotent processing of reservation events, and maintained data consistency across platforms to prevent overbooking and state conflicts.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Minimax ERP Integration:</span> Built a backend adapter layer in PHP that translates internal invoice data into the Minimax REST API schema, automating invoice synchronization between the OTA Sync platform and external accounting software. Implemented OAuth2 authentication with token management, external ID tracking for reconciliation, and error handling for failed API calls. Replaced a previously manual bookkeeping process, eliminating double-entry data work for accounting teams.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Pantheon Integration:</span> Built backend integration with Pantheon e-fiscalization API to meet Montenegro's legal fiscalization requirements, transforming internal invoice data into structured payloads with line items, tax codes, and multi-method payment mapping (cash, card, wire transfer). Implemented discount normalization (fixed-to-percent conversion), per-line cost calculation, and external ID tracking in a dedicated reconciliation table. Errors in fiscalization have direct legal consequences, which drove stricter validation and error handling compared to standard API integrations.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Content Import Pipeline:</span>
                                            Built automated data ingestion pipelines for importing property content from Airbnb and Booking.com using WebScrapingAPI. Extracted and normalized unstructured data including room details, descriptions, occupancy, and media assets, implemented image processing and base64 conversion, and mapped results into internal data models. Reduced manual onboarding time by ~60% by eliminating the need for manual data entry.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">PriceLabs Integration:</span> Designed and implemented a full bidirectional integration between the PMS and PriceLabs dynamic pricing engine, owning the entire data flow from outbound synchronization (listings, calendars, reservations) to inbound webhook processing for real-time rate updates. Built secure webhook endpoints with signature validation, handled schema mismatches through custom mapping layers, and implemented bulk update strategies for efficient calendar synchronization. Addressed edge cases such as delayed webhooks, partial updates, and data conflicts to maintain consistency across systems, enabling fully automated, demand-driven pricing.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Automated Emails:</span>
                                        Built a multi-flow automated email system handling three distinct delivery paths: transactional owner notifications on every reservation event (with full financial breakdown and per-user room-type filtering), configurable guest emails with dynamic placeholder substitution and conditional cancel/confirm/offer links, and a cron-driven template engine with event-based scheduling (before/after arrival, departure, or receipt), filtering by channel, room type, and guest country. Integrated InfoBip for reliable transactional delivery and implemented multilingual support through batch translation lookups.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">Expenses Module:</span> Designed and implemented a full expense management module supporting manual and recurring entries with three cost allocation models: by property, by room type, and distributed across individual rooms. Built a cron-driven automation layer that evaluates template eligibility at runtime, calculates per-room cost splits, and tracks repetition counters to enforce configured limits. Modeled relationships across five tables (templates, expenses, rooms, room types, attachments) with soft-delete and full audit trail. Built reporting with dynamic SQL filters and Excel export via PhpSpreadsheet, consumed both interactively and through automated email reports.
                                    </li>

                                    <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                                        <span class="font-semibold text-red">UI Theme System:</span> Designed and implemented a persistent dark/light theme system with runtime CSS switching and state management via localStorage, ensuring consistent UI behavior and user preference retention across sessions.
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
