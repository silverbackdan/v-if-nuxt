export default {
  async ({ store }, { storeid, data }) {
    // Force the first (top level) page to be resolved AFTER the child
    // Causes an error on SSR
    return new Promise(resolve => setTimeout(() => {
      resolve({
        page: data
      })
    }, storeid === 'home' ? 500 : 0))
  }
}
