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
                <span class="md:font-normal text-2xl">OTA Sync</span>
                <div class="left-before"></div>
                <div :class="{ arrow: selectedTitle === 'OTA Sync' }"></div>
              </div>
            </div>
            <div
              class="md:py-16 xs:py-10 md:pl-3 xs:pr-3 xs:pl-3 flex items-center transition-all duration-200 ease cursor-pointer relative flex-wrap"
              @click="toggleArrow('Frontmen Studio')" :class="{ 'title-color': selectedTitle === 'Frontmen Studio' }">
              <div class="title md:text-xl xs:text-l">
                <i :class="{ 'fas fa-hand-point-right mr-2': selectedTitle === 'Frontmen Studio' }"></i>
                <span class="md:font-normal text-2xl">Frontmen Studio</span>
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
                <p class="leading-relaxed mt-3">
                  Developed and maintained multiple <strong>browser-based casino slot games</strong>, focusing on
                  <strong>graphics</strong>, <strong>animation</strong>, <strong>game logic</strong>, and
                  <strong>performance optimization</strong>. Collaborated closely with
                  <strong>designers</strong> and <strong>backend engineers</strong> to deliver visually consistent and
                  stable gameplay experiences.
                </p>
              </div>
              <div>
                <ul class="list-disc ml-5 mt-4 leading-relaxed">
                  <li>
                    Developed and maintained slot games such as
                    <strong>Dino Zone</strong>, <strong>Moonlight Wolves</strong>, <strong>Silk Road Riches</strong>,
                    <strong>Super Stack A Cat</strong>, <strong>Fortune Teller 6</strong>,
                    <strong>Aztec Blox</strong>, and <strong>Wild West Zone</strong>.
                  </li>
                  <li>
                    Implemented and stabilized <strong>core game features</strong>
                    (<em>re-spins</em>, <em>free spins</em>, <em>turbo modes</em>, <em>auto-play</em>,
                    <em>bonus multipliers</em>) using <strong>JavaScript (ES6+)</strong>, <strong>Pixi.js</strong>,
                    and <strong>GSAP/TweenMax</strong>.
                  </li>
                  <li>
                    Synchronized <strong>animations</strong> and <strong>sound effects</strong> with
                    <strong>server-side outcomes</strong> via a custom <strong>communication service layer</strong>.
                  </li>
                  <li>
                    <strong>Optimized rendering performance</strong>, reduced <strong>frame drops</strong>,
                    and ensured <strong>cross-browser</strong> and <strong>cross-device compatibility</strong>.
                  </li>
                  <li>
                    Fixed complex <strong>production bugs</strong> (<em>timing issues</em>, <em>animation layering</em>,
                    <em>turbo delay</em>, <em>negative autoplay values</em>) under
                    <strong>tight release deadlines</strong>.
                  </li>
                  <li>
                    Contributed to <strong>localization</strong> for regulated markets
                    (<strong>DE</strong>, <strong>ES</strong>, <strong>UK</strong>), ensuring
                    <strong>compliance</strong> and <strong>stability</strong> during integration
                    with the <strong>Leander platform</strong>.
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:text-xl xs:text-l" v-if="selectedTitle == 'OTA Sync'">
              <div class="mb-8">
                <p class="italic">November 2022 - January 2024</p>
              </div>
              <div>
                <p class="leading-relaxed mt-3">
                  Worked on the development of an advanced <strong>Property Management System (PMS)</strong> and
                  <strong>Channel Management platform</strong> for hotels and apartments, enabling property owners to
                  synchronize data across multiple <strong>Online Travel Agencies (OTAs)</strong>.
                  Responsible for <strong>API integrations</strong>, <strong>automated reporting</strong>, and the
                  development of
                  complex internal modules, including <strong>reservation management</strong>, <strong>room
                    availability</strong>,
                  and <strong>guest invoicing</strong>.
                </p>
              </div>
              <div>
                <ul class="list-disc ml-5 mt-4 leading-relaxed">
                  <li>
                    <b>OpenGDS Integration:</b> Implemented full data exchange between the PMS and the
                    <strong>OpenGDS network</strong> for hotels, rooms, pricing, and reservations.
                    Designed mapping tables (<em>gds_properties</em>, <em>gds_room_types</em>,
                    <em>gds_pricing_plans</em>) to link
                    internal PMS IDs with external GDS IDs, ensuring reliable synchronization.
                    Built <strong>PHP cURL connectors</strong> for data import/export and <strong>webhook
                      handlers</strong> for
                    real-time push updates.
                  </li>

                  <li>
                    <b>Expenses Module:</b> Developed a complete <strong>Expense Management system</strong> supporting
                    both
                    manual and recurring (daily, monthly, yearly) expenses. Integrated <strong>cron jobs</strong> for
                    automatic
                    generation of recurring entries, along with <strong>PDF/Excel exports</strong> and advanced
                    filtering options.
                  </li>

                  <li>
                    <b>Reports and Automated Emails:</b> Built a system for <strong>automated report generation</strong>
                    and
                    <strong>email distribution</strong> (Lost & Found, expenses, reservations, performance stats).
                    Created <strong>customizable email templates</strong> and scheduling logic for automatic delivery.
                  </li>

                  <li>
                    <b>Minimax Integration:</b> Integrated PMS data with <strong>Minimax accounting software</strong>,
                    enabling
                    automatic export of invoices and financial data to streamline bookkeeping and reduce manual work.
                  </li>

                  <li>
                    <b>PriceLabs API Integration:</b> Connected the PMS pricing engine with the
                    <strong>PriceLabs API</strong> for automatic synchronization of room rates and restrictions using
                    <strong>dynamic pricing algorithms</strong>.
                  </li>

                  <li>
                    <b>Web Scraping Automation:</b> Built <strong>data-scraping pipelines</strong> for importing hotel
                    and room
                    details directly from <strong>Booking.com</strong> and <strong>Airbnb</strong>, reducing onboarding
                    time by
                    more than <strong>60%</strong>.
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

