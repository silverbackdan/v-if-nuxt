<template>
  <div>
    Select a subpage to navigate to
    <ul>
      <li v-for="(subpage, index) in page.children" :key="index" class="subpage">
        <nuxt-link :to="{ name: 'page-index-subpage', params: { page: pageid, subpage: index }}">
          {{ subpage.linkLabel }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['page', 'pageid']
  }
</script>
