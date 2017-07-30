<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Page
    </h1>
    <h2 class="info">
      {{ page.name }} ({{ pageid }})
    </h2>
    <nuxt-child :page="page" :pageid="pageid" />

    <nuxt-link class="button" to="/">
      Home
    </nuxt-link>
  </section>
</template>

<script>
  import _common from './_common'

  export default {
    name: 'page',
    mixins: [_common.mixins],
    asyncData ({ params, error, store }) {
      return _common.async({ params, error, store }, {
        page: params.page
      })
    },
    head () {
      return {
        title: `Page: ${this.page.name}`
      }
    }
  }
</script>

<style scoped>
  .title
  {
    margin-top: 30px;
  }
  .info
  {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }
  .button
  {
    margin-top: 30px;
  }
</style>
