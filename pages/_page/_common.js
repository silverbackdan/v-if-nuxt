import axios from '~/plugins/axios'

export default {
  mixins: {
    computed: {
      page () {
        return this.$store.getters.getPage(this.storeid)
      }
    }
  },
  async ({ error, store }, { page, subpage }) {
    let getUrl = '/api/page/' + page
    let id = ':' + page
    if (subpage !== undefined) {
      getUrl += '/' + subpage
      id += ':' + subpage
    }
    return axios.get(getUrl)
      .then((res) => {
        store.commit('initPage', {
          id: id,
          page: res.data
        })
        return {
          storeid: id,
          pageid: page
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Page not found' })
      })
  }
}
