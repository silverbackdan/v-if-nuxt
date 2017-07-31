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
        return {
          id: id
        }
      })
  }
}
