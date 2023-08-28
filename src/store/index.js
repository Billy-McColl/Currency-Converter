// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'
import currency from './modules/currency' // Import the currency module

// Initialize Vuex
Vue.use(Vuex)

// Create and export the store
export default new Vuex.Store({
	modules: {
		currency, // Add the currency module
	},
})
