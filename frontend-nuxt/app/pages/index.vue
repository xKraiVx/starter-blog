<template>
  <div>
    <h1>{{ homePageData?.title }}</h1>
    <p>This is the home page of my starter blog built with Nuxt.js.</p>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script setup>
const { data: homePageData, refresh } = await useFetch(
  getEndpoint("/home-page?populate=*"),
  {
    transform: (response) => {
      return response.data;
    },
  }
);
</script>
