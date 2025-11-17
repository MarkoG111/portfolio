<template>
  <div class="mb-20 mt-10 container flex">
    <div id="contact" class="sm:container">
      <div class="contact-heading">
        <h2 class="text-red md:text-3xl xs:text-2xl uppercase">Contact</h2>
        <h3 class="text-red uppercase mt-4 md:text-xl xs:text-l">Let's get in touch</h3>
      </div>

      <div class="form flex xs:flex-col md:flex-row md:w-[1350px]">
        <div class="mt-2 w-1/5">
          <ul class="space-y-6">
            <li>
              <a href="https://github.com/MarkoG111" target="_blank" class="relative flex items-center gap-3 text-lg font-medium text-gray-900 tracking-wide 
             transition-all duration-200 hover:text-white px-3 py-1
             before:absolute before:top-0 before:left-0 before:h-full before:w-0
             before:bg-gradient-to-r before:from-[#fa5441] before:to-[#3d0101]
             before:-z-10 before:transition-all before:duration-300 hover:before:w-[50%]">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2.02c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 0 0 3.1 17.7c-1.09-.75.08-.74.08-.74a2.54 2.54 0 0 1 1.84 1.24 2.6 2.6 0 0 0 3.54 1 2.62 2.62 0 0 1 .78-1.63c-2.67-.31-5.47-1.34-5.47-5.95A4.66 4.66 0 0 1 6.06 7.2a4.3 4.3 0 0 1 .12-3.17s1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.17A4.66 4.66 0 0 1 19 11.37c0 4.63-2.81 5.62-5.49 5.92a2.94 2.94 0 0 1 .84 2.3V23.1c0 .31.21.68.82.57A12 12 0 0 0 12 .297Z" />
                </svg>
                GitHub
              </a>
            </li>

            <!-- TWITTER -->
            <li>
              <a href="https://twitter.com/" target="_blank" class="relative flex items-center gap-3 text-lg font-medium text-gray-900 tracking-wide 
             transition-all duration-200 hover:text-white px-3 py-1
             before:absolute before:top-0 before:left-0 before:h-full before:w-0
             before:bg-gradient-to-r before:from-[#fa5441] before:to-[#3d0101]
             before:-z-10 before:transition-all before:duration-300 hover:before:w-[50%]">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16.11 3c-2.63 0-4.77 2.14-4.77 4.77 0 .37.05.74.13 1.09C7.69 8.64 4.07 6.73 1.64 3.9A4.77 4.77 0 0 0 2.96 10a4.44 4.44 0 0 1-2.16-.6v.06a4.78 4.78 0 0 0 3.83 4.68c-.6.16-1.26.2-1.93.07a4.77 4.77 0 0 0 4.44 3.3A9 9 0 0 1 1 19.54a12.73 12.73 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.41-.02-.61A9.22 9.22 0 0 0 23 3Z" />
                </svg>
                Twitter
              </a>
            </li>

            <!-- LINKEDIN -->
            <li>
              <a href="https://www.linkedin.com/in/marko-ga%C4%8Danovi%C4%87-4a133016a/" target="_blank" class="relative flex items-center gap-3 text-lg font-medium text-gray-900 tracking-wide 
             transition-all duration-200 hover:text-white px-3 py-1
             before:absolute before:top-0 before:left-0 before:h-full before:w-0
             before:bg-gradient-to-r before:from-[#fa5441] before:to-[#3d0101]
             before:-z-10 before:transition-all before:duration-300 hover:before:w-[50%]">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zm-.02 7h4v12h-4v-12zm7 0h3.8v1.8h.1c.5-.9 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.2h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.6h-4v-12z" />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:w-4/5 xs:w-full">
          <form ref="contactForm" @submit.prevent="sendEmail">
            <!-- USERNAME -->
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-800">
                Full Name
              </label>

              <input v-model="username" :class="[
                'w-full p-4 rounded-lg border text-sm bg-gray-50 transition-all duration-200 focus:outline-none',
                errors.username
                  ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                  : 'border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400'
              ]" placeholder="John Doe" />

              <p v-if="errors.username" class="text-red font-medium text-sm mt-1">
                {{ errors.username }}
              </p>
            </div>

            <!-- EMAIL -->
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-800">
                Your Email
              </label>

              <input v-model="email" :class="[
                'w-full p-4 rounded-lg border text-sm bg-gray-50 transition-all duration-200 focus:outline-none',
                errors.email
                  ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                  : 'border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400'
              ]" placeholder="email@example.com" />

              <p v-if="errors.email" class="text-red font-medium text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>

            <!-- MESSAGE -->
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-800">
                Your message
              </label>

              <textarea v-model="message" placeholder="Leave a message..." class="w-full h-32 p-4 rounded-lg border border-gray-300 text-sm bg-gray-50
           focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
           transition-all duration-200 resize-none"></textarea>
            </div>

            <button class="bg-[#fa541c] text-white px-7 py-3 text-sm font-medium rounded-lg 
         hover:bg-black transition-all duration-200">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div id="footer" class="fixed bottom-0 w-full bg-[#fa541c] text-white p-2 text-center hidden">
    <a href="/cv/Marko_Gačanović_CV.pdf" download class="font-bold underline underline-offset-4">Download CV</a>
  </div>
</template>


<script setup>
import { ref, reactive, onMounted } from "vue";
import emailjs from "emailjs-com";

// refs for input fields
const username = ref("");
const email = ref("");
const message = ref("");

// ref for the form DOM element (required by emailjs.sendForm)
const contactForm = ref(null);

// reactive error object
const errors = reactive({
  username: null,
  email: null,
});

// simple validation rules
const rules = {
  username: {
    regex: /^[A-Za-zČĆŽŠĐčćžšđ]+(?:[ -][A-Za-zČĆŽŠĐčćžšđ]+)*(?:[ -][A-Za-zČĆŽŠĐčćžšđ]+)?$/,
    msg: "Eneter valid full name",
  },
  email: {
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,10}$/,
    msg: "Enter valid email",
  },
};

// validation function
function validate() {
  errors.username = !rules.username.regex.test(username.value)
    ? rules.username.msg
    : null;

  errors.email = !rules.email.regex.test(email.value)
    ? rules.email.msg
    : null;

  return !errors.username && !errors.email;
}

function resetForm() {
  username.value = "";
  email.value = "";
  message.value = "";
}

// send email
function sendEmail() {
  if (!validate()) return;

  emailjs.sendForm(
    "service_sehuo4m",
    "template_4qxo3jf",
    contactForm.value,
    "IEn0FnwWsRy4R8oT4"
  )
    .then(() => {
      alert("Email successfully sent!");
      resetForm();
    })
    .catch(err => console.error("FAILED:", err));
}

// footer visibility
onMounted(() => {
  const footer = document.getElementById("footer");

  window.addEventListener("scroll", () => {
    const reachedBottom =
      window.scrollY + window.innerHeight >= document.body.scrollHeight;

    footer.style.display = reachedBottom ? "block" : "none";
  });
});
</script>
