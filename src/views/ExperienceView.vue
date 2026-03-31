<template>
  <div class="bg-slate-50">
    <div id="experience" class="container flex">
      <div class="py-14">
        <h2 class="text-red xs:text-2xl xs:mb-7 md:text-3xl uppercase">
          Experience
        </h2>

        <div class="flex xs:flex-col md:flex-row">
          <div class="relative pl-2 xs:w-full md:w-1/4 md:pr-12">
            <div
              class="md:py-16 xs:py-10 md:pl-3 xs:pr-3 xs:pl-3 flex items-center transition-all duration-200 ease cursor-pointer relative flex-wrap"
              @click="toggleArrow('OTA Sync')" :class="{ 'title-color': selectedTitle === 'OTA Sync' }">
              <div class="title md:text-xl xs:text-l">
                <i :class="{ 'fas fa-hand-point-right mr-2': selectedTitle === 'OTA Sync' }"></i>
                <span class="md:font-normal md:text-2xl">OTA Sync</span>
                <div class="left-before"></div>
                <div :class="{ arrow: selectedTitle === 'OTA Sync' }"></div>
              </div>
            </div>
            <div
              class="md:py-16 xs:py-10 md:pl-3 xs:pr-3 xs:pl-3 flex items-center transition-all duration-200 ease cursor-pointer relative flex-wrap"
              @click="toggleArrow('Frontmen Studio')" :class="{ 'title-color': selectedTitle === 'Frontmen Studio' }">
              <div class="title md:text-xl xs:text-l">
                <i :class="{ 'fas fa-hand-point-right mr-2': selectedTitle === 'Frontmen Studio' }"></i>
                <span class="md:font-normal md:text-2xl">Frontmen Studio</span>
                <div class="left-before"></div>
                <div :class="{ arrow: selectedTitle === 'Frontmen Studio' }"></div>
              </div>
            </div>
          </div>
          <div class="xs:pt-10 md:pt-0 pl-2 xs:w-full md:w-3/4">
            <div class="md:text-xl xs:text-l" v-if="selectedTitle == 'Frontmen Studio'">
              <div class="mb-8">
                <p class="italic">September 2021 - November 2022</p>
              </div>
              <div>
                <p class="leading-[1.8] space-y-4 mt-3">
                  Developed and maintained multiple <span class="font-semibold">browser-based casino slot games</span>, focusing on
                  <span class="font-semibold">graphics</span>, <span class="font-semibold">animation</span>, <span class="font-semibold">game logic</span>, and
                  <span class="font-semibold">performance optimization</span>. Collaborated closely with
                  <span class="font-semibold">designers</span> and <span class="font-semibold">backend engineers</span> to deliver visually consistent and
                  stable gameplay experiences.
                </p>
              </div>
              <div>
                <ul class="list-disc ml-5 mt-4 space-y-3 leading-[1.7]">
                    <li class="p-2 rounded-lg border border-gray-100">
                        <span class="font-semibold text-red">Built and maintained slot games:</span>
                        Dino Zone, Moonlight Wolves, Silk Road Riches, Super Stack A Cat, Fortune Teller 6, Aztec Blox, Wild West Zone.
                    </li>

                    <li class="p-2 rounded-lg border border-gray-100">
                        <span class="font-semibold text-red">Implemented game mechanics:</span>
                        Re-spins, free spins, turbo mode, auto-play, and bonus multipliers using JavaScript (ES6+), Pixi.js, and GSAP.
                    </li>

                    <li class="p-2 rounded-lg border border-gray-100">
                        <span class="font-semibold text-red">Synced gameplay systems:</span>
                        Coordinated animations and sound with server-driven outcomes via a custom communication layer.
                    </li>

                    <li class="p-2 rounded-lg border border-gray-100">
                        <span class="font-semibold text-red">Optimized performance:</span>
                        Reduced frame drops and ensured smooth cross-browser and cross-device gameplay.
                    </li>

                    <li class="p-2 rounded-lg border border-gray-100">
                        <span class="font-semibold text-red">Resolved production issues:</span>
                        Fixed timing bugs, animation layering conflicts, turbo delays, and invalid autoplay states under tight deadlines.
                    </li>

                    <li class="p-2 rounded-lg border border-gray-100">
                        <span class="font-semibold text-red">Handled localization & compliance:</span>
                        Delivered stable integrations for DE, ES, and UK markets on the Leander platform.
                    </li>
                </ul>
              </div>
            </div>
            <div class="md:text-xl xs:text-l" v-if="selectedTitle == 'OTA Sync'">
              <div class="mb-8">
                <p class="italic">November 2022 - January 2024</p>
              </div>
              <div>
                <p class="leading-[1.8] space-y-4 mt-3">
                  Worked on the development of an advanced <span class="font-semibold">Property Management System (PMS)</span> and
                  <span class="font-semibold">Channel Management platform</span> for hotels and apartments, enabling property owners to
                  synchronize data across multiple <span class="font-semibold">Online Travel Agencies (OTAs)</span>.
                  Responsible for <span class="font-semibold">API integrations</span>, <span class="font-semibold">automated reporting</span>, and the
                  development of
                  complex internal modules, including <span class="font-semibold">reservation management</span>, <span class="font-semibold">room
                    availability</span>,
                  and <span class="font-semibold">guest invoicing</span>.
                </p>
              </div>
              <div>
                <ul class="list-disc ml-5 mt-4 space-y-4 leading-[1.8]">
                  <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                    <span class="font-semibold text-red">OpenGDS Integration:</span> Implemented full data exchange between the PMS and the
                    <span class="font-semibold">OpenGDS network</span> for hotels, rooms, pricing, and reservations.
                    Designed mapping tables (<em>gds_properties</em>, <em>gds_room_types</em>,
                    <em>gds_pricing_plans</em>) to link
                    internal PMS IDs with external GDS IDs, ensuring reliable synchronization.
                    Built <span class="font-semibold">PHP cURL connectors</span> for data import/export and <span class="font-semibold">webhook
                      handlers</span> for
                    real-time push updates.
                  </li>

                  <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                    <span class="font-semibold text-red">Expenses Module:</span> Developed a complete <span class="font-semibold">Expense Management system</span> supporting
                    both
                    manual and recurring (daily, monthly, yearly) expenses. Integrated <span class="fontspanibold">cron jobs</span> for
                    automatic
                    generation of recurring entries, along with <span class="font-semibold">PDF/Excel exports</span> and advanced
                    filtering options.
                  </li>

                  <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                    <span class="font-semibold text-red">Reports and Automated Emails:</span> Built a system for <span class="font-semibold">automated report generation</span>
                    and
                    <span class="font-semibold">email distribution</span> (Lost & Found, expenses, reservations, performance stats).
                    Created <span class="font-semibold">customizable email templates</span> and scheduling logic for automatic delivery.
                  </li>

                  <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                    <span class="font-semibold text-red">Minimax Integration:</span> Integrated PMS data with <span class="font-semibold">Minimax accounting software</span>,
                    enabling
                    automatic export of invoices and financial data to streamline bookkeeping and reduce manual work.
                  </li>

                  <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                    <span class="font-semibold text-red">PriceLabs API Integration:</span> Connected the PMS pricing engine with the
                    <span class="font-semibold">PriceLabs API</span> for automatic synchronization of room rates and restrictions using
                    <span class="font-semibold">dynamic pricing algorithms</span>.
                  </li>

                  <li class="p-1 rounded-lg shadow-sm border border-gray-100">
                    <span class="font-semibold text-red">Web Scraping Automation:</span> Built <span class="font-semibold">data-scraping pipelines</span> for importing hotel
                    and room
                    details directly from <span class="font-semibold">Booking.com</span> and <span class="font-semibold">Airbnb</span>, reducing onboarding
                    time by
                    more than <span class="font-semibold">60%</span>.
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

