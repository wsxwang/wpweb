import Vue from 'vue'
import Vuex from 'vuex'

import session from "./session"

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        session
    },
    strict: debug,
})