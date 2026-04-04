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
                    I’m a full-stack developer focused on building real-world systems, with hands-on experience across
                    backend development, APIs, and modern frontend applications.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    My journey started from building simple static websites with <strong>HTML & CSS</strong>, where I
                    learned how the
                    web works at its core. From there, I moved into dynamic interfaces using <strong>JavaScript and
                        AJAX</strong>, and
                    later into <strong>full backend systems</strong> with PHP & MySQL.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    Over time, I progressed to building more complex applications, starting with a <strong>Laravel-based
                        e-learning platform</strong>, where I implemented payment flows and course management.

                    I then expanded into <strong>ASP.NET Core and React</strong>, building real-time systems using
                    SignalR, and designing scalable backend architectures based on CQRS and clean architecture
                    principles.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    Recently, I’ve been working on solving real-world engineering problems such as secure ticket
                    validation, fraud prevention, and handling concurrency in event-based systems.
                </p>

                <p class="md:text-xl py-4 leading-relaxed max-w-4xl">
                    My focus today is on building reliable, scalable systems that solve actual business problems, not
                    just implementing features.
                </p>
                <p class="md:text-xl py-4">
                    <a href="/cv/Marko_Gačanović_CV.pdf" download
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
