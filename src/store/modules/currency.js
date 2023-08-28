// src/store/modules/currency.js

// Import API function
import { fetchExchangeRates } from '@/assets/api'

// State variables for holding currency data and conversion rates
const state = {
	baseCurrency: 'USD',
	targetCurrency: 'EUR',
	exchangeRate: null,
	error: null, // To store any error messages
}

// Getters to fetch state data
const getters = {
	getBaseCurrency: state => state.baseCurrency,
	getTargetCurrency: state => state.targetCurrency,
	getExchangeRate: state => state.exchangeRate,
	getError: state => state.error, // Getter for error
}

// Mutations to modify the state
const mutations = {
	SET_BASE_CURRENCY(state, payload) {
		state.baseCurrency = payload
	},
	SET_TARGET_CURRENCY(state, payload) {
		state.targetCurrency = payload
	},
	SET_EXCHANGE_RATE(state, payload) {
		state.exchangeRate = payload
	},
	SET_ERROR(state, payload) {
		// Mutation for error
		state.error = payload
	},
}

// Actions to handle API requests and update state
const actions = {
	async fetchExchangeRate({ commit, state }) {
		commit('SET_ERROR', null) // Reset error state before making a new request
		try {
			const rates = await fetchExchangeRates(state.baseCurrency)
			const rate = rates[state.targetCurrency]
			commit('SET_EXCHANGE_RATE', rate)
		} catch (error) {
			console.error('Failed to fetch exchange rates', error)
			commit('SET_ERROR', 'Failed to fetch exchange rates') // Committing an error state
		}
	},
}

// Export the module
export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
}
