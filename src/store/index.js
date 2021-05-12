import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from "./getters"

import setting from "./modules/setting";
import config from "./modules/config";
import app from "./modules/app";
import tagView from "./modules/tagView";
import permission from "./modules/permission";
import user from "./modules/user";

export default createStore({
  plugins: [createPersistedState()],
  modules: {
    setting, config, app, tagView, permission, user
  },
  getters: getters,
})
