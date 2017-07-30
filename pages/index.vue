<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Home Page - Pages Below:
    </h1>
    <ul class="users">
      <li v-for="(page, index) in pages" :key="index" class="user">
        <nuxt-link :to="{ name: 'page-index', params: { page: index }}">
          {{ page.linkLabel }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/pages')
    return { pages: data }
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
