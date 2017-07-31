<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ page.name }}
    </h1>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'index-news', params: { news: 1 }}" style="color: blue;">My news post</nuxt-link>
      </li>
    </ul>
    <nuxt-child :key="$route.fullPath" />
  </section>
</template>

<script>
  import Page from '~/plugins/page'
  export default {
    asyncData (ctx) {
      return Page.async(ctx, {
        storeid: 'home',
        data: {
          name: 'Home page'
        }
      })
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
