<script setup></script>

<template>
  <div id="projects" class="bg-slate-50">
    <div class="container">
      <div class="pt-14">
        <h2 class="text-red xs:text-2xl md:text-3xl uppercase">Projects</h2>
      </div>

      <div class="flex flex-col md:py-12 xs:py-4">
        <div class="projects_grid grid gap-50px grid-rows-auto grid-cols-1">
          <div
            class="project project-4 shadow-2xl flex md:flex-row xs:flex-col gap-50px md:h-[460px] xs:h-[600px] md:p-12 xs:p-4">
            <div
              class="project_image h-auto overflow-hidden md:w-3/5 xs:w-auto bg-hsla-46 bg-opacity-20 shadow-md md:order-1">
              <a href="#">
                <img src="/images/projects/marko-blog.png" alt="skoda" />
              </a>
            </div>
            <div
              class="project_text flex flex-col items-center justify-center text-center md:w-1/2 md:order-2 xs:order-1">
              <h3
                class="text-[#2d2e32] font-bold xs:text-m lg:text-1xl mb-2 flex items-center justify-center gap-3.2px">
                Marko's Blog &nbsp;<span class="font-normal xs:text-m lg:text-l"> (March 2025)</span>
              </h3>
              <p class="text-[#767676] xs:text-m lg:text-l font-semibold lg:ml-8 text-justify leading-relaxed">
                <b>Marko’s Blog</b> is a full-stack blogging platform built with <b>ASP.NET Core</b> and <b>React</b>.
                It enables users to create posts, leave comments, and receive real-time notifications powered by
                <b>SignalR</b>.
                The project follows <b>Clean Architecture</b> and <b>SOLID</b> principles, reflecting my focus on
                building scalable,
                secure, and maintainable software solutions.
              </p>
              <div class="flex flex-wrap gap-1 justify-center mt-1">
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  React / Redux
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  ASP .NET Core
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  MSSQL Server
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  Tailwind CSS
                </p>
              </div>
              <div class="flex items-center justify-evenly gap-14 mt-12">
                <a href="https://github.com/MarkoG111/marko_blog" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-brand-github">
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                </a>
                <a href="#" class="flex md:text-xl xs:text-m gap-2">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link">
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="flex flex-col md:py-12 xs:py-4">
        <div class="projects_grid grid gap-50px grid-rows-auto grid-cols-1">
          <div
            class="project project-2 shadow-2xl flex md:flex-row xs:flex-col gap-50px md:h-[460px] xs:h-[600px] md:p-12 xs:p-4">
            <div
              class="project_text flex flex-col items-center justify-center text-center md:w-1/2 xs:order-2 md:order-1">
              <h3
                class="text-[#2d2e32] font-bold xs:text-m lg:text-1xl mb-2 flex items-center justify-center gap-3.2px">
                Gačanović Academy &nbsp;
                <span class="font-normal xs:text-m lg:text-l">(April 2021)</span>
              </h3>
              <p class="text-[#767676] xs:text-m lg:text-l font-semibold lg:mr-8 text-justify leading-relaxed">
                <strong>Gačanović Academy</strong> is an online learning platform built with
                <strong>Laravel</strong>, designed to offer a seamless experience for purchasing and managing
                <strong>e-courses</strong> across various categories. Users can easily browse, search, and filter
                courses dynamically.
                Once registered, users can not only enroll in courses but also become <strong>authors</strong>,
                contributing to the platform’s growing library of educational content.
              </p>

              <div class="flex flex-wrap gap-1 justify-center mt-1">
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  JavaScript / jQuery
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  Laravel
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  MySQL
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  AJAX
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  Bootstrap 4
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  Stripe payment method
                </p>
              </div>
              <div class="flex items-center justify-evenly gap-14 mt-12">
                <a href="https://github.com/MarkoG111/gacanovic_academy" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-brand-github">
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                </a>
                <a href="#" class="flex md:text-xl xs:text-m gap-2">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link">
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="project_image h-auto overflow-hidden md:w-3/5 xs:w-auto bg-hsla-46 bg-opacity-20 shadow-md md:order-2 xs:order-1">
              <a href="#">
                <img src="/images/projects/gacanovic-academy.png" alt="gacanovic-academy" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:py-12 xs:py-4">
        <div class="projects_grid grid gap-50px grid-rows-auto grid-cols-1">
          <div
            class="project project-4 shadow-2xl flex md:flex-row xs:flex-col gap-50px md:h-[460px] xs:h-[600px] md:p-12 xs:p-4">
            <div
              class="project_text flex flex-col items-center justify-center text-center md:w-1/2 md:order-2 xs:order-1">
              <h3
                class="text-[#2d2e32] font-bold xs:text-m lg:text-1xl mb-2 flex items-center justify-center gap-3.2px">
                Škoda Rental &nbsp;<span class="font-normal xs:text-m lg:text-l"> (July 2020)</span>
              </h3>
              <p class="text-[#767676] xs:text-m lg:text-l font-semibold lg:ml-8 text-justify leading-relaxed">
                <strong>Škoda Rental</strong> is a dynamic car rental platform built with
                <strong>PHP (OOP, MVC)</strong> and <strong>MySQL</strong>, offering users a smooth and intuitive
                experience
                for renting vehicles. All data is <strong>fetched dynamically</strong> from the database, ensuring
                real-time availability.
                The platform also includes an <strong>admin panel</strong> that enables administrators to manage rental
                requests,
                approve or decline reservations, and monitor car availability efficiently.
              </p>
              <div class="flex flex-wrap gap-1 justify-center mt-1">
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  JavaScript / jQuery
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  PHP
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  OOP
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  MVC Architecture
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  MySQL
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  AJAX
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  Bootstrap 4
                </p>
              </div>
              <div class="flex items-center justify-evenly gap-14 mt-12">
                <a href="https://github.com/MarkoG111/skoda_rental" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-brand-github">
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                </a>
                <a href="#" class="flex md:text-xl xs:text-m gap-2">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link">
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="project_image h-auto overflow-hidden md:w-3/5 xs:w-auto bg-hsla-46 bg-opacity-20 shadow-md md:order-1">
              <a href="#">
                <img src="/images/projects/skoda.png" alt="skoda" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:py-12 xs:py-4">
        <div class="projects_grid grid gap-50px grid-rows-auto grid-cols-1">
          <div
            class="project project-3 shadow-2xl flex md:flex-row xs:flex-col gap-50px md:h-[460px] xs:h-[600px] md:p-12 xs:p-4">
            <div
              class="project_text flex flex-col items-center justify-center text-center md:w-1/2 md:order-1 xs:order-2">
              <h3
                class="text-[#2d2e32] font-bold xs:text-m lg:text-1xl mb-2 flex items-center justify-center gap-3.2px">
                Gigatronic Shop &nbsp;
                <span class="font-normal xs:text-m lg:text-l">(March 2020)</span>
              </h3>
              <p class="text-[#767676] xs:text-m lg:text-l font-semibold lg:mr-8 text-justify leading-relaxed">
                <strong>Gigatronic Shop</strong> is a full-featured <strong>eCommerce platform</strong> designed to
                provide
                a seamless and intuitive shopping experience. It includes <strong>user authentication</strong>,
                <strong>pagination</strong>, and a powerful <strong>admin panel</strong> for managing products,
                orders, and customers. The system also features <strong>dynamic polls</strong>, where registered users
                can participate in one active poll at a time, adding an interactive dimension to the platform.
              </p>
              <div class="flex gap-1 flex-wrap justify-center mt-1">
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  JavaScript / jQuery
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  PHP
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  MySQL
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  AJAX
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  Bootstrap 4
                </p>
              </div>
              <div class="flex items-center justify-evenly gap-14 mt-12">
                <a href="https://github.com/MarkoG111/gigatronic_shop" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-brand-github">
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                </a>
                <a href="#" class="flex md:text-xl xs:text-m gap-2">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link">
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="project_image h-auto overflow-hidden md:w-3/5 xs:w-auto bg-hsla-46 bg-opacity-20 shadow-md md:order-2 xs:order-1">
              <a href="#">
                <img src="/images/projects/gigatronic-shop.png" alt="gigatronic-shop" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:py-12 xs:py-4">
        <div class="projects_grid grid gap-50px grid-rows-auto grid-cols-1">
          <div
            class="project project-1 gap-50px shadow-2xl flex md:flex-row xs:flex-col md:h-[460px] xs:h-[500px] md:p-12 xs:p-4">
            <div class="project_image h-auto overflow-hidden md:w-3/5 xs:w-auto bg-hsla-46 bg-opacity-20 shadow-md ">
              <a href="#">
                <img src="/images/projects/township-gornji-milanovac.png" alt="screen_gornji_milanovac" />
              </a>
            </div>
            <div
              class="project_text flex flex-col items-center justify-center text-center md:w-1/2 xs:order-1 md:order-2">
              <h3
                class="text-[#2d2e32] font-bold xs:text-m lg:text-1xl mb-2 flex items-center justify-center gap-3.2px">
                Gornji Milanovac &nbsp;
                <span class="font-normal xs:text-m lg:text-l">(February 2019)</span>
              </h3>
              <p
                class="text-[#767676] xs:text-m lg:text-l font-semibold xs:leading-relaxed lg:ml-8 text-justify leading-relaxed">
                The <strong>Gornji Milanovac</strong> website is a <strong>modern single-page presentation</strong>
                that seamlessly combines visual appeal and functionality.
                Built with a focus on <strong>simplicity and performance</strong>, it provides visitors with an engaging
                and informative overview of the municipality in a clean and accessible design.
              </p>
              <div class="flex flex-wrap gap-1 justify-center mt-1">
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  JavaScript / jQuery
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  AJAX
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  JSON
                </p>
              </div>
              <div class="flex items-center justify-evenly gap-14 mt-12">
                <a href="https://github.com/MarkoG111/gornji_milanovac" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-brand-github">
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                </a>
                <a href="#" class="flex md:text-xl xs:text-m gap-2">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link">
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:py-12 xs:py-4">
        <div class="projects_grid grid gap-50px grid-rows-auto grid-cols-1">
          <div
            class="project project-3 shadow-2xl flex md:flex-row xs:flex-col gap-50px md:h-[460px] xs:h-[600px] md:p-12 xs:p-4">
            <div
              class="project_text flex flex-col items-center justify-center text-center md:w-1/2 md:order-1 xs:order-2">
              <h3
                class="text-[#2d2e32] font-bold xs:text-m lg:text-1xl mb-2 flex items-center justify-center gap-3.2px">
                K2 Elite &nbsp;
                <span class="font-normal xs:text-m lg:text-l">(March 2018)</span>
              </h3>
              <p class="text-[#767676] xs:text-m lg:text-l font-semibold lg:mr-8 text-justify leading-relaxed">
                K2 Elite is my first web project, a <strong>simple presentation</strong> website built exclusively in
                <strong>HTML</strong> and <strong>CSS</strong>, without frameworks or JavaScript. The site was developed
                for the local club K2 Elite from Gornji Milanovac and includes basic pages such as the homepage,
                information about the club, gallery, and location. <br />
                This project represents my <strong>first steps</strong> in web development and the foundation on which I
                later built my knowledge.
              </p>
              <div class="flex gap-1 flex-wrap justify-center mt-1">
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  HTML
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  CSS
                </p>
                <p class="bg-white shadow-md text-black font-semibold xl:p-3 xs:p-2 xs:text-m xl:text-l">
                  SEO
                </p>
              </div>
              <div class="flex items-center justify-evenly gap-14 mt-12">
                <a href="https://github.com/MarkoG111/k2_elite" target="_blank" class="flex md:text-xl xs:text-m gap-2">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-brand-github">
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                </a>
                <a href="#" class="flex md:text-xl xs:text-m gap-2">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link">
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="project_image h-auto overflow-hidden md:w-3/5 xs:w-auto bg-hsla-46 bg-opacity-20 shadow-md md:order-2 xs:order-1">
              <a href="#">
                <img src="/images/projects/k2-elite.png" alt="gigatronic-shop" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project_image img {
  transform: translateY(0%);
  transition: transform 9s ease-in-out 0s;
}

.project-1 .project_image img:hover {
  transform: translateY(-85%);
}

.project-2 .project_image img:hover {
  transform: translateY(-60%);
}

.project-3 .project_image img:hover {
  transform: translateY(-60%);
}

.project-4 .project_image img:hover {
  transform: translateY(-55%);
}
</style>
