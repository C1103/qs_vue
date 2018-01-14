import Cookie from 'js-cookie'
const app = {
  state: {// 状态
    language: 'en'
  },
  mutations: { //改变
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookie.set('language', language)
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    }
  } 
}
export default app
