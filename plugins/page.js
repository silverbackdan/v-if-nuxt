export default {
  mixins: {
    computed: {
      page () {
        return this.$store.getters.getPage(this.id)
      }
    }
  },
  async ({ store }, { page, id }) {
    store.commit('initPage', {
      id: id,
      page: page
    })
    return {
      id: id
    }
  }
}
