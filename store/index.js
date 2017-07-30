import Vue from 'vue'

export const state = () => ({
  pages: {}
})

export const getters = {
  getPage: (state) => (id) => {
    return state.pages[id]
  }
}

export const mutations = {
  initPage (state, { id, page }) {
    Vue.set(state.pages, id, page)
  }
}
