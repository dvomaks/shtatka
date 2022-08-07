export const state = () => ({
  shtat: []
})

export const getters = {
  shtat: state => state.shtat
}

export const mutations = {
  SET_SHTAT (state, shtat) {
    state.shtat = shtat
  }
}

export const actions = {
  importFile({ commit }, file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        commit('SET_SHTAT', JSON.parse(fr.result))
        resolve(fr.result )
      }
      fr.onerror = reject;
      fr.readAsText(file);
    });
  }
}
