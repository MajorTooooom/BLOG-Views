// store/index.js
export const state = () => ({
  num: 0, count: 10086
})

export const mutations = {
  increment(state) {
    state.num++
  },
  decrement(state) {
    state.num--
  },
  addcount(state) {
    state.count++
  }
}
