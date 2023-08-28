<template>
	<div id="app">
		<!-- Currency Selector Component -->
		<CurrencySelector />
		<!-- Currency Display Component -->
		<CurrencyDisplay />
	</div>
</template>

<script>
	import CurrencySelector from './components/CurrencySelector.vue'
	import CurrencyDisplay from './components/CurrencyDisplay.vue'

	export default {
		name: 'App',
		components: {
			CurrencySelector,
			CurrencyDisplay,
		},
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
