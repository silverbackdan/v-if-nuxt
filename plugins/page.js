import axios from '~/plugins/axios'

export default {
  mixins: {
    computed: {
      page () {
        return this.$store.getters.getPage(this.id)
      }
    }
  },
  async ({ store, app }, { id }) {
    console.log('page init start', id)
    return axios.get('/api/page/' + id)
      .then((res) => {
        store.commit('initPage', {
          id: id,
          page: res.data
        })
        console.log('page init resolve', id)
        return {
          id: id
        }
      })
  }
}
// new Promise(resolve => setTimeout(() => {}, 1000))
