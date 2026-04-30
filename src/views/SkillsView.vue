<script setup>
import SkillItem from '@/components/SkillItem.vue';
</script>

<template>
    <section id="skills" class="container py-16">
        <!-- TITLE -->
        <h2 class="text-red text-2xl md:text-3xl uppercase">My Skills</h2>

        <!-- GROUP: LANGUAGES -->
        <div class="mt-10 skill-section">
            <div class="group-label">
                <h3 class="uppercase text-xl text-red mb-6">Languages</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillItem img="/images/skills/html-5.png" label="HTML 5" />
                <SkillItem img="/images/skills/css-3.png" label="CSS 3" />
                <SkillItem img="/images/skills/js.png" label="JavaScript" />
                <SkillItem img="/images/skills/typescript.png" label="TypeScript" />
                <SkillItem img="/images/skills/php.png" label="PHP" />
                <SkillItem img="/images/skills/csharp.png" label="C#" />
            </div>
        </div>

        <!-- STYLING -->
        <div class="mt-12 skill-section">
            <div class="group-label">
                <h3 class="uppercase text-xl text-red mb-6">Styling</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillItem img="/images/skills/sass.png" label="SASS" />
                <SkillItem img="/images/skills/tailwind.png" label="Tailwind CSS" />
                <SkillItem img="/images/skills/bootstrap.png" label="Bootstrap" />
            </div>
        </div>

        <!-- GROUP: FRAMEWORKS -->
        <div class="mt-12 skill-section">
            <div class="group-label">
                <h3 class="uppercase text-xl text-red mb-6">Frameworks & Libraries</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillItem img="/images/skills/laravel.png" label="Laravel" />
                <SkillItem img="/images/skills/react.png" label="React" />
                <SkillItem img="/images/skills/asp.png" label="ASP.NET Core" />
                <SkillItem img="/images/skills/jquery.png" label="jQuery" />
            </div>
        </div>

        <!-- STATE MANAGEMENT -->
        <div class="mt-12 skill-section">
            <div class="group-label">
                <h3 class="uppercase text-xl text-red mb-6">State Management</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillItem img="/images/skills/redux.png" label="Redux" />
                <SkillItem img="/images/skills/react.png" label="React Context API" />
            </div>
        </div>

        <!-- GROUP: DATABASES -->
        <div class="mt-12 skill-section">
            <div class="group-label">
                <h3 class="uppercase text-xl text-red mb-6">Databases</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillItem img="/images/skills/mysql.png" label="MySQL" />
                <SkillItem img="/images/skills/sql_server.png" label="SQL Server" />
            </div>
        </div>

        <!-- GROUP: TOOLS -->
        <div class="mt-12 skill-section">
            <div class="group-label">
                <h3 class="uppercase text-xl text-red mb-6">Tools</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillItem img="/images/skills/git.png" label="Git" />
                <SkillItem img="/images/skills/postman.png" label="Postman" />
                <SkillItem img="/images/skills/vite.jpg" label="Vite" />
                <SkillItem img="/images/skills/docker.jpg" label="Docker" />
                <SkillItem img="/images/skills/figma.png" label="Figma" />
            </div>
        </div>


        <!-- GROUP: CMS -->
        <div class="mt-12 skill-section">
            <div class="group-label">
                <h3 class="uppercase text-xl text-red mb-6">CMS & Platforms</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillItem img="/images/skills/wordpress.png" label="WordPress" />
                <SkillItem img="/images/skills/woocommerce.png" label="WooCommerce" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.text-red {
    color: #fa541c;
}

/* H3 label */
.group-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
}

.group-label::before {
    content: '';
    display: block;
    width: 3px;
    height: 20px;
    margin-bottom: 23px;
    background: #fa541c;
    border-radius: 2px;
    flex-shrink: 0;
}

.group-label span {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #fa541c;
}

.group-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #f0e8e4;
}

/* Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 10px;
}

/* Kartica */
.skill-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    background: #ffffff;
    border: 1.5px solid #f0ece8;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.skill-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #fa541c;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.25s ease;
}

.skill-card:hover {
    border-color: rgba(250, 84, 28, 0.25);
    box-shadow: 0 6px 20px rgba(250, 84, 28, 0.08);
    transform: translateY(-2px);
}

.skill-card:hover::before {
    transform: scaleY(1);
}

.skill-card img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    flex-shrink: 0;
}

.skill-card span {
    font-size: 13.5px;
    font-weight: 600;
    color: #374151;
    line-height: 1.2;
}
</style>
