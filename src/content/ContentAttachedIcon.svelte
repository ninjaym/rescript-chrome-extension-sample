<script>
	import {
		count as _count,
		incrementCount
	} from './ContentAttachedIcon.bs'
    
	let count;
	
	_count.subscribe(value => {
		count = value;
		
	});
</script>

<div on:click={incrementCount} class="w-full h-full  rounded-full flex items-center justify-center cursor-pointer bg-gray-200">
	<span >{count}</span>
</div>


<style global>
@multiple-tailwind styles/tailwind-attached-icon.config.js;
@tailwind components;
@tailwind utilities;
</style>