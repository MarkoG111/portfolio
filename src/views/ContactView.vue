<template>
  <div class="mb-20 mt-10 container flex">
    <div id="contact" class="sm:container">
      <div class="contact-heading">
        <h2 class="text-red md:text-3xl xs:text-2xl uppercase">Contact</h2>
        <h3 class="text-red uppercase mt-4 md:text-xl xs:text-l">Let's get in touch</h3>
      </div>

      <div class="form flex xs:flex-col md:flex-row md:w-[1350px]">
        <div class="mt-2 w-1/5">
          <ul class="list-none ml-9">
            <li class="relative my-6 md:text-xl xs:text-l"><a href="https://github.com/MarkoG111" target="_blank"
                class="relative z-10 md:p-2 tracking-wider	text-black">GitHub</a></li>
            <li class="relative my-6 md:text-xl xs:text-l"><a href="https://twitter.com/" target="_blank"
                class="relative z-10 md:p-2 tracking-wider	text-black">Twitter</a></li>
            <li class="relative my-6 md:text-xl xs:text-l"><a
                href="https://www.linkedin.com/in/marko-ga%C4%8Danovi%C4%87-4a133016a/" target="_blank"
                class="relative z-10 md:p-2 tracking-wider	text-black">LinkedIn</a></li>
          </ul>
        </div>

        <div class="lg:w-4/5 xs:w-full">
          <form action="" method="POST" class="form-contact" @submit.prevent="sendEmail">
            <div class="relative z-0 xs:w-full md:w-80 lg:w-80 xxl:w-full mb-8 group">
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                Name</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path
                      d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>
                <input type="text" id="username" name="username" ref="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Johnny Doe" />
              </div>
            </div>

            <div class="relative z-0 xs:w-full md:w-80 lg:w-80 xxl:w-full mb-8 group">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                Email</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path
                      d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path
                      d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="text" id="email" name="email" ref="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-4 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com" />
              </div>
            </div>

            <div class="relative z-0 xs:w-full md:w-80 lg:w-80 xxl:w-full mb-6 group mt-14">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                message</label>
              <textarea id="message" rows="4" ref="message" name="message"
                class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a message..."></textarea>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <button type="submit" id="btnContact" name="btnContact"
                class="bg-[#fa541c] text-white bg-color focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-7 p-4 text-center">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div id="footer" class="fixed bottom-0 w-full bg-[#fa541c] text-white p-2 text-center hidden">
    <a href="/cv/Marko_Gačanović_CV.pdf" download class="font-bold underline underline-offset-4">Download CV</a>
  </div>
</template>

<style scoped>
#contact ul li a::before {
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

#contact ul li a:hover {
  color: #fff;
  box-shadow: inset 110px 0 0 0 transparent;
}

#contact ul li a:hover::before {
  opacity: 1;
  width: 100%;
}

#contact ul li::before {
  content: "";
  position: absolute;
  height: 18px;
  width: 6px;
  background: linear-gradient(90deg, rgb(250, 84, 65), #3d0101);
  top: 8px;
  left: -24px;
}

#contact ul li::after {
  content: "";
  position: absolute;
  height: 18px;
  width: 6px;
  background: linear-gradient(90deg, rgb(250, 84, 65), #3d0101);
  top: 8px;
  left: -24px;
  transform: rotate(90deg);
}

.border-danger {
  border: 1px solid red;
}
</style>

<script setup>
import emailjs from 'emailjs-com';
import { ref } from 'vue';

document.addEventListener("DOMContentLoaded", function () {
  let myFooter = document.getElementById("footer");

  window.addEventListener("scroll", function () {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      myFooter.style.display = "block";
    } else {
      myFooter.style.display = "none";
    }
  });
});

const username = ref('');
const email = ref('');
const message = ref('');

function sendEmail() {
  let errors = [];

  const fields = [
    {
      ref: username,
      regex: /^[A-Za-z][a-z]{1,19}(\s[A-Za-z][a-z]{1,19}){0,2}$/,
      example: "John Doe"
    },
    {
      ref: email,
      regex: /^[A-Za-z\d\.-]+@[a-zA-Z]{2,10}\.[a-zA-Z]{2,20}$/,
      example: "johnsmith@gmail.com"
    }
  ];

  fields.forEach(field => {
    const inputValue = field.ref.value;

    if (!field.regex.test(inputValue.value)) {
      errors.push(field);
    } else {
      inputValue.classList.remove('border-danger')
    }
  });

  if (errors.length > 0) {
    const errorMessages = document.querySelectorAll('.text-red-check');
    errorMessages.forEach(message => message.remove());

    errors.forEach(error => {
      const inputValue = error.ref.value;

      if (inputValue) {
        inputValue.classList.add('border', 'border-danger');
        const errorMessage = document.createElement('div');

        errorMessage.textContent = `Example: ${error.example}`;
        errorMessage.classList.add('text-red-check', 'text-sm', 'mt-1', 'pb-3', 'text-red');

        errorMessage.style.position = 'absolute';
        errorMessage.style.top = '100%';

        if (inputValue.parentElement) {
          inputValue.parentElement.appendChild(errorMessage);
        }
      }

      return false
    });
  } else {
    const errorMessages = document.querySelectorAll('.text-red-check');
    const form = document.querySelector(".form-contact");

    errorMessages.forEach(message => message.remove());

    emailjs.sendForm('service_sehuo4m', 'template_4qxo3jf', form, 'IEn0FnwWsRy4R8oT4').then((result) => {
      alert("Email successfully sent!");

      document.querySelector("#username").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      console.log('SUCCESS!', result.text);
    }, (error) => {
      console.log('FAILED...', error.text);
    });

    return true
  }
}
</script>