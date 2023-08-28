// src/assets/api/index.js

import axios from 'axios'

// Load API key from environment variable
const API_KEY = process.env.API_KEY
const BASE_URL = `https://api.exchangerate-api.com/v4/latest/`

export const fetchExchangeRates = async baseCurrency => {
	try {
		const response = await axios.get(
			`${BASE_URL}${baseCurrency}?api_key=${API_KEY}`
		)
		return response.data.rates
	} catch (error) {
		// Error handling: You could dispatch a Vuex action here to handle the error globally.
		console.error('Failed to fetch exchange rates', error)
		throw new Error('Failed to fetch exchange rates')
	}
}
