<script lang="ts" setup>
const prisma = usePrismaClient();
const posts = await prisma.user.findMany();
console.log(posts);
</script>

<template>
 <h2>Posts will be rendered</h2>
</template>
