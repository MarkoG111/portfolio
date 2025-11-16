<template>
  <header id="nav" class="flex h-[110px] absolute w-full mx-auto" :class="active ? 'sticky-nav' : 'nav'">
    <div class="container header-container flex justify-between">

      <div class="logo md:flex mt-5">
        <a href="">
          <img class="logo-img md:max-w-28 xs:w-full sm:w-40" src="/images/logo/logo.png" />
        </a>
      </div>

      <nav class="flex justify-end items-center py-6 uppercase xl:mr-32">
        <ul class="md:flex hidden gap-6">

          <li v-for="item in navItems" :key="item.id" class="md:text-xl lg:text-xl">
            <a :class="{ activeLink: activeSection === item.id }" @click="scrollTo(item.id)">
              {{ item.label }}
            </a>
          </li>

          <span class="md:mt-7 lg:mt-0">|</span>
          <li class="md:text-xl lg:text-xl">
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
        </ul>

        <!-- MOBILE BUTTON -->
        <button class="md:hidden text-lg xs:ml-32 mb-5" @click="toggleMobileNav">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 18h16"></path>
          </svg>
        </button>
      </nav>

      <!-- MOBILE NAV -->
      <div class="mobile-nav" :class="{ 'open-menu': mobileNav, 'closed-menu': !mobileNav }">
        <span @click="toggleMobileNav">
          ✕
        </span>

        <ul>
          <li v-for="item in navItems" :key="item.id" class="text-2xl py-2.5 font-semibold">
            <a @click="scrollTo(item.id)" :class="{ activeLink: activeSection === item.id }">
              {{ item.label }}
            </a>
          </li>

          <li class="text-2xl py-2.5 font-semibold">
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
        </ul>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      mobileNav: false,
      activeSection: null,
      isScrollingByClick: false,
      scrollTimeout: null,

      navItems: [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
      ],
    };
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    scrollTo(id) {
      const sec = document.getElementById(id);
      if (!sec) return;

      this.isScrollingByClick = true;
      this.activeSection = id;

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      this.scrollTimeout = setTimeout(() => {
        this.isScrollingByClick = false;
      }, 1000);

      window.scrollTo({
        top: sec.offsetTop - 110,
        behavior: "smooth",
      });

      this.mobileNav = false;
    },

    // Detektuje trenutnu sekciju na osnovu scroll pozicije
    detectActiveSection() {
      if (this.isScrollingByClick) return;

      const scrollPos = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Ako smo skroz na vrhu
      if (window.scrollY < 80) {
        this.activeSection = null;
        return;
      }

      // Ako smo skoro na dnu stranice (zadnjih 100px), aktiviraj Contact
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        this.activeSection = 'contact';
        return;
      }

      // Prolazi kroz sve sekcije i nalazi koja je trenutno u viewportu
      for (let i = this.navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(this.navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          this.activeSection = this.navItems[i].id;
          return;
        }
      }
    },

    initObserver() {
      const options = {
        root: null,
        rootMargin: '-20% 0px -20% 0px', // Aktivira kad je sekcija između 20% od vrha/dna
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      };

      const observer = new IntersectionObserver((entries) => {
        if (this.isScrollingByClick) return;

        let maxRatio = 0;
        let mostVisibleSection = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection && maxRatio > 0.1) {
          this.activeSection = mostVisibleSection;
        }
      }, options);

      // Observuj sve sekcije
      this.navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });
    }
  },

  mounted() {
    const navbar = document.getElementById("nav");

    window.addEventListener("scroll", () => {
      this.active = window.scrollY > navbar.offsetTop;

      if (window.scrollY < 80) {
        this.activeSection = null;
      }

      this.detectActiveSection();
    });

    setTimeout(() => {
      this.initObserver();
    }, 500);
  },
};
</script>

<style scoped>
.sticky-nav {
  display: flex;
  width: 100%;
  transition: 400ms;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  z-index: 99;
  height: 110px;
}

.activeLink {
  color: white !important;
}

.activeLink::before {
  opacity: 1 !important;
  width: 100% !important;
}

.mobile-nav a, nav a {
  letter-spacing: 0.6px;
  color: #020202;
  margin: 0px -4px;
  padding: 5.5px;
  position: relative;
  z-index: 1;
}

.mobile-nav a:hover, nav a:hover {
  color: white;
  transform: scale(1.05);
  cursor: pointer;
}

.mobile-nav a::before, nav a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, rgb(250, 84, 65), #3d0101);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in, width 0.3s ease-in-out;
}

.mobile-nav a:hover::before, nav a:hover::before {
  opacity: 1;
  width: 100%;
}

.mobile-nav {
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all .3s ease-in-out;
  width: 100%;
  z-index: 30;
}

.open-menu {
  left: 0 !important;
}

.closed-menu {
  left: -100% !important;
}

.mobile-nav span {
  cursor: pointer;
  font-size: 3.3rem;
  position: absolute;
  right: 4rem;
  top: 2rem;
}

@media screen and (max-width: 380px) {
  .header-container {
    padding-left: 30px;
    padding-right: 0;
  }
}
</style>