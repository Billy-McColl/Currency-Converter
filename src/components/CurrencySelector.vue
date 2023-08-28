<template>
	<div class="currency-selector">
		<!-- Amount to Convert -->
		<input
			type="number"
			v-model="amountToConvert"
			placeholder="Amount to Convert"
		/>

		<!-- Base Currency Dropdown -->
		<select v-model="selectedBaseCurrency">
			<option v-for="currency in currencies" :key="currency">
				{{ currency }}
			</option>
		</select>

		<!-- Target Currency Dropdown -->
		<select v-model="selectedTargetCurrency">
			<option v-for="currency in currencies" :key="currency">
				{{ currency }}
			</option>
		</select>

		<!-- Enter Button -->
		<button @click="convertCurrency">Enter</button>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		data() {
			return {
				amountToConvert: 1, // Initialize with 1
				currencies: [
					'USD',
					'EUR',
					'GBP',
					'CAD',
					'JPY',
					'AUD',
					'CHF',
					'CNY',
					'SEK',
					'NZD',
					'KRW',
					'SGD',
					'HKD',
					'NOK',
					'TRY',
					'INR',
					'RUB',
					'BRL',
					'ZAR',
					'AED',
					'ARS',
					'COP',
					'CLP',
					'IDR',
					'MYR',
					'PHP',
					'THB',
					'VND',
					'EGP',
					'ILS',
					'KWD',
					'QAR',
					'SAR',
					'CZK',
					'DKK',
					'HUF',
					'PLN',
					'RON',
					'ISK',
					'HRK',
					'BGN',
					'SGD',
					'HKD',
					'THB',
					'MXN',
					'ZAR',
					'PHP',
					'MYR',
					'NZD',
					'SEK',
					'IDR',
					'BRL',
					'SAR',
					'RUB',
					'TRY',
					'KES',
					'KRW',
					'NOK',
					'EGP',
					'CZK',
					'PKR',
					'XDR',
					'DZD',
					'AED',
					'CLF',
					'BHD',
					'COP',
					'BND',
					'AOA',
					'UYU',
					'QAR',
					'CRC',
					'DOP',
					'PEN',
					'OMR',
					'MAD',
					'LYD',
					'NPR',
					'SYP',
					'JOD',
					'BAM',
					'GYD',
					'YER',
					'MUR',
					'BWP',
					'TOP',
					'BBD',
					'ETB',
					'PGK',
					'SDG',
					'TTD',
					'TZS',
					'ALL',
					'GHS',
					'UZS',
					'AFN',
					'MKD',
					'XCD',
					'NAD',
					'BOB',
					'ZWD',
					'VUV',
					'SLL',
					'KRW',
					'LRD',
					'LSL',
					'MDL',
					'KZT',
					'BGN',
					'MWK',
					'AMD',
					'BIF',
					'DJF',
					'KHR',
					'CVE',
					'GNF',
					'PYG',
					'HTG',
					'SRD',
					'MNT',
					'KMF',
					'JPY',
					'AWG',
					'NIO',
					'LRD',
					'MKD',
					'SRD',
					'SZL',
					'TJS',
					'BTN',
					'WST',
					'ANG',
					'TMT',
					'GGP',
					'IMP',
					'JEP',
					'SVC',
					'TVD',
					'ZWL',
				],
			}
		},
		computed: {
			...mapGetters({
				baseCurrency: 'currency/getBaseCurrency',
				targetCurrency: 'currency/getTargetCurrency',
			}),
			selectedBaseCurrency: {
				get() {
					return this.baseCurrency
				},
				set(value) {
					this.setBaseCurrency(value)
				},
			},
			selectedTargetCurrency: {
				get() {
					return this.targetCurrency
				},
				set(value) {
					this.setTargetCurrency(value)
				},
			},
		},
		methods: {
			...mapMutations({
				setBaseCurrency: 'currency/SET_BASE_CURRENCY',
				setTargetCurrency: 'currency/SET_TARGET_CURRENCY',
				setAmount: 'currency/SET_AMOUNT',
			}),
			convertCurrency() {
				// Dispatch action to fetch latest exchange rates
				this.$store.dispatch('currency/fetchExchangeRate')
			},
		},

		watch: {
			amountToConvert(newVal) {
				this.setAmount(newVal)
			},
			baseCurrency(newVal) {
				this.setBaseCurrency(newVal)
			},
			targetCurrency(newVal) {
				this.setTargetCurrency(newVal)
			},
		},
	}
</script>

<style scoped>
	/* Add your CSS styling here */
</style>
