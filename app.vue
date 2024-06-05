<script lang="ts" setup>
if (process.env.server) {
  async function main() {
    const prisma = usePrismaClient();
    const posts = await prisma.user.findMany();
    console.log(posts);
  }
  main();
}

const devtoolsClient = useNuxtDevTools();
</script>

<template>
  <div>
    <h1>Hello</h1>
  </div>
  <PostList></PostList>
  <button
    v-if="devtoolsClient"
    @click="devtoolsClient.devtools.navigate('/modules/components')"
  >
    <!-- Open the DevTools and navigate to the components tab -->
    Open DevTools
  </button>
  <NuxtPage />
</template>
