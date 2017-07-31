<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ page.header }}
    </h1>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'index-news', params: { news: 0 }}" style="color: blue;">My news post</nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </section>
</template>

<script>
  import Page from '~/plugins/page'
  export default {
    mixins: [Page.mixins],
    asyncData (ctx) {
      return Page.async(ctx, {
        id: 0,
        page: {
          header: 'News',
          isLive: true
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
