<template>
    <div class="skill-card">
        <img :src="img" :alt="label" />
        <span>{{ label }}</span>
    </div>
</template>

<script setup>
defineProps({
    img: String,
    label: String
});
</script>

<style scoped>
.skill-section {
    margin-top: 40px;
    padding: 24px;

    background: #f9fafb;
    border-radius: 16px;
}

.section-title {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #fa541c;
    letter-spacing: 0.05em;
}

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
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.skill-card span {
    font-size: 13.5px;
    font-weight: 600;
    color: #374151;
    line-height: 1.2;
}
</style>