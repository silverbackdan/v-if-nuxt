<template>
  <div>
    {{ page.name }}
    <div v-if="page.isLive">
      This page page is live
    </div>
  </div>
</template>

<script>
  import _common from '../../_common'

  export default {
    name: 'subpage',
    mixins: [_common.mixins],
    asyncData ({ params, error, store }) {
      return _common.async({ params, error, store }, {
        page: params.page,
        subpage: params.subpage
      })
    },
    head () {
      return {
        title: `Sub Page: ${this.page.name}`
      }
    }
  }
</script>