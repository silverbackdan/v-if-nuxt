<template>
  <div>
    <h3>{{ page.name }}</h3>
    <p v-if="page.isLive" style="color: green;"><b>post is live</b></p>
    <nuxt-link :to="{ name: 'index' }" style="color: blue;">Back to news list</nuxt-link>
  </div>
</template>

<script>
  import Page from '~/plugins/page'
  export default {
    mixins: [Page.mixins],
    asyncData (ctx) {
      return Page.async(ctx, {
        id: ctx.params.news
      })
    }
  }
</script>
