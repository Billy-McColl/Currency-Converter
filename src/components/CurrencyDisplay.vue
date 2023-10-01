<template>
	<div class="currency-display">
		<h1>{{ convertedAmount }}</h1>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				exchangeRate: 'currency/getExchangeRate',
			}),
			convertedAmount() {
				const baseAmount = 1 // Replace with the actual amount you want to convert
				if (
					this.exchangeRate === undefined ||
					this.exchangeRate === 0
				) {
					return 0 // Default value if exchangeRate is undefined or 0
				}
				return baseAmount * this.exchangeRate
			},
		},
	}
</script>

<style scoped>
	/* Add your CSS styling here */
</style>
