<template>
  <div class="flex items-center gap-3">
    <img :src="img" :alt="label" class="w-12 h-12 object-contain" />
    <span class="font-bold text-gray-600">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  label: String
});
</script>
