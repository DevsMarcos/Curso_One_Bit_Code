<script setup>
    defineProps(['avatar_url', 'login', 'name', 'company', 'bio'])
</script>

<template>
    <img v-bind:src="avatar_url">
    <strong>@{{ login }}</strong>
    <h2>{{ name }}</h2>
    <h3>{{ company }}</h3>
    <span>{{ bio }}</span>
</template>

<style scoped>
img {
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  display: block;
  margin: 1rem auto;
  width: 8rem;
  height: 8rem;
}

h1, h2 {
  color: #f64348;
  margin: 1rem auto .25rem;
}

h3 {
  margin: 1rem auto .25rem;
}

span{
  display: block;
  margin: 1rem auto;
}
</style>