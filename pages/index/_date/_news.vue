<template>
  <div>
    <h3>{{ page.name }}</h3>

    <!-- THIS ELEMENT CAUSES THE SSR BUG, AFTER `nuxt build` and `nuxt start` -->
    <p v-if="page.isLive" style="color: green;"><b>post is live</b></p>

    <nuxt-link :to="{ name: 'index' }" style="color: blue;">Back to news list</nuxt-link>
  </div>
</template>

<script>
  import Page from '~/plugins/page'
  export default {
    asyncData (ctx) {
      return Page.async(ctx, {
        storeid: 'news-' + ctx.params.news,
        data: {
          name: 'A news post: ' + ctx.params.news,
          isLive: true
        }
      })
    }
  }
</script>
