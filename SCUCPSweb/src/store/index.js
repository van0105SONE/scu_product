import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import state from "./state.js";
import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'

const store = createStore({
    state, 
    actions,
    mutations,
    getters,
    plugins: [createPersistedState()]
})

export default store;