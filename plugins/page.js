import axios from '~/plugins/axios'

export default {
  mixins: {
    computed: {
      page () {
        return this.$store.getters.getPage(this.id)
      }
    }
  },
  async ({ store }, { id }) {
    return axios.get('/api/page/' + id)
      .then((res) => {
        store.commit('initPage', {
          id: id,
          page: res.data
        })
        // Force the first (top level) page to be resolved AFTER the child
        // Causes an error on SSR
        return new Promise(resolve => setTimeout(() => {
          resolve({
            id: id
          })
        }, id === 0 ? 500 : 0))
      })
  }
}
