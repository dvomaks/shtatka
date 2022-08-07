export const state = () => ({
  shtat: []
})

export const getters = {
  shtat: state => state.shtat
}

export const mutations = {
  SET_SHTAT (state, shtat) {
    state.shtat = shtat
  },

  UPDATE_VOIN (state, voin) {
    state.shtat = [
      ...state.shtat.filter(el => el.num_shtat !== voin.num_shtat),
      voin
    ]
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
  },

  updateVoin ({ commit }, voin) {
    console.log('updateVoin')
    commit('UPDATE_VOIN', voin)
  }
}
