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
			<option
				v-for="currency in currencies"
				:key="currency.code"
				:value="currency.code"
			>
				{{ currency.code }}
			</option>
		</select>

		<!-- Target Currency Dropdown -->
		<select v-model="selectedTargetCurrency">
			<option
				v-for="currency in currencies"
				:key="currency.code"
				:value="currency.code"
			>
				{{ currency.code }}
			</option>
		</select>

		<div>
			<!-- Enter Button -->
			<button @click="convertCurrency">Enter</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		data() {
			return {
				amountToConvert: 1,
				currencies: [
					{ code: 'USD', value: 1 },
					{ code: 'EUR', value: 1 },
					{ code: 'GBP', value: 1 },
					{ code: 'CAD', value: 1 },
					{ code: 'JPY', value: 1 },
					{ code: 'AUD', value: 1 },
					{ code: 'CHF', value: 1 },
					{ code: 'CNY', value: 1 },
					{ code: 'SEK', value: 1 },
					{ code: 'NZD', value: 1 },
					{ code: 'KRW', value: 1 },
					{ code: 'SGD', value: 1 },
					{ code: 'HKD', value: 1 },
					{ code: 'NOK', value: 1 },
					{ code: 'TRY', value: 1 },
					{ code: 'INR', value: 1 },
					{ code: 'RUB', value: 1 },
					{ code: 'BRL', value: 1 },
					{ code: 'ZAR', value: 1 },
					{ code: 'AED', value: 1 },
					{ code: 'ARS', value: 1 },
					{ code: 'COP', value: 1 },
					{ code: 'CLP', value: 1 },
					{ code: 'IDR', value: 1 },
					{ code: 'MYR', value: 1 },
					{ code: 'PHP', value: 1 },
					{ code: 'THB', value: 1 },
					{ code: 'VND', value: 1 },
					{ code: 'EGP', value: 1 },
					{ code: 'ILS', value: 1 },
					{ code: 'KWD', value: 1 },
					{ code: 'QAR', value: 1 },
					{ code: 'SAR', value: 1 },
					{ code: 'CZK', value: 1 },
					{ code: 'DKK', value: 1 },
					{ code: 'HUF', value: 1 },
					{ code: 'PLN', value: 1 },
					{ code: 'RON', value: 1 },
					{ code: 'ISK', value: 1 },
					{ code: 'HRK', value: 1 },
					{ code: 'BGN', value: 1 },
					{ code: 'MXN', value: 1 },
					{ code: 'KES', value: 1 },
					{ code: 'PKR', value: 1 },
					{ code: 'XDR', value: 1 },
					{ code: 'DZD', value: 1 },
					{ code: 'CLF', value: 1 },
					{ code: 'BHD', value: 1 },
					{ code: 'BND', value: 1 },
					{ code: 'AOA', value: 1 },
					{ code: 'UYU', value: 1 },
					{ code: 'CRC', value: 1 },
					{ code: 'DOP', value: 1 },
					{ code: 'PEN', value: 1 },
					{ code: 'OMR', value: 1 },
					{ code: 'MAD', value: 1 },
					{ code: 'LYD', value: 1 },
					{ code: 'NPR', value: 1 },
					{ code: 'SYP', value: 1 },
					{ code: 'JOD', value: 1 },
					{ code: 'BAM', value: 1 },
					{ code: 'GYD', value: 1 },
					{ code: 'YER', value: 1 },
					{ code: 'MUR', value: 1 },
					{ code: 'BWP', value: 1 },
					{ code: 'TOP', value: 1 },
					{ code: 'BBD', value: 1 },
					{ code: 'ETB', value: 1 },
					{ code: 'PGK', value: 1 },
					{ code: 'SDG', value: 1 },
					{ code: 'TTD', value: 1 },
					{ code: 'TZS', value: 1 },
					{ code: 'ALL', value: 1 },
					{ code: 'GHS', value: 1 },
					{ code: 'UZS', value: 1 },
					{ code: 'AFN', value: 1 },
					{ code: 'MKD', value: 1 },
					{ code: 'XCD', value: 1 },
					{ code: 'NAD', value: 1 },
					{ code: 'BOB', value: 1 },
					{ code: 'ZWD', value: 1 },
					{ code: 'VUV', value: 1 },
					{ code: 'SLL', value: 1 },
					{ code: 'LRD', value: 1 },
					{ code: 'LSL', value: 1 },
					{ code: 'MDL', value: 1 },
					{ code: 'KZT', value: 1 },
					{ code: 'MWK', value: 1 },
					{ code: 'AMD', value: 1 },
					{ code: 'BIF', value: 1 },
					{ code: 'DJF', value: 1 },
					{ code: 'KHR', value: 1 },
					{ code: 'CVE', value: 1 },
					{ code: 'GNF', value: 1 },
					{ code: 'PYG', value: 1 },
					{ code: 'HTG', value: 1 },
					{ code: 'SRD', value: 1 },
					{ code: 'MNT', value: 1 },
					{ code: 'KMF', value: 1 },
					{ code: 'AWG', value: 1 },
					{ code: 'NIO', value: 1 },
					{ code: 'SZL', value: 1 },
					{ code: 'TJS', value: 1 },
					{ code: 'BTN', value: 1 },
					{ code: 'WST', value: 1 },
					{ code: 'ANG', value: 1 },
					{ code: 'TMT', value: 1 },
					{ code: 'GGP', value: 1 },
					{ code: 'IMP', value: 1 },
					{ code: 'JEP', value: 1 },
					{ code: 'SVC', value: 1 },
					{ code: 'TVD', value: 1 },
					{ code: 'ZWL', value: 1 },
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
				this.$store.dispatch('currency/fetchExchangeRate')
			},
		},
		mounted() {
			this.convertCurrency()
		},
		watch: {
			amountToConvert(newVal) {
				this.setAmount(newVal)
			},
		},
	}
</script>

<style scoped>
	.currency-selector,
	.currency-display {
		border: 1px solid #e0e0e0;
		padding: 20px;
		margin: 10px 0;
		border-radius: 8px;
		background-color: #f9f9f9;
	}
	.currency-selector input,
	.currency-selector select,
	.currency-selector button,
	.currency-display h1 {
		font-size: 1em;
		margin: 5px 0;
	}

	.currency-selector button {
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		background-color: #008cba;
		color: white;
		cursor: pointer;
	}

	.currency-selector button:hover {
		background-color: #005f5f;
	}
</style>
