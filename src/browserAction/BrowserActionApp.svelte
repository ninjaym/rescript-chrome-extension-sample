<script>
	import {
		count as _count,
		incrementCount,
		decrementCount
	} from './BrowserActionApp.bs'
    
	let count;
	
	_count.subscribe(value => {
		count = value;
	});
</script>

<main class="py-10">
	<div class="p-2 max-w-sm text-gray-900 flex items-center justify-center">
		<button class="border border-gray-400 px-2 hover:border-green-500 hover:text-green-500" on:click={decrementCount}>-</button>
		<span class="px-2 font-bold w-10 flex justify-center">{count}</span>
		<button class="border border-gray-400 px-2 hover:border-green-500 hover:text-green-500" on:click={incrementCount}>+</button>
	</div>
</main>

<style>
	main {
		color: black
	}
</style>

