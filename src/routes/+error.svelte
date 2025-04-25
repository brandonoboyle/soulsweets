<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center min-h-[70vh]">
	<div class="text-center p-8 max-w-lg">
		<div class="text-8xl text-pink-600 mb-6">🍰</div>
		<h1 class="text-3xl font-bold text-pink-800 mb-4">
			{$page.status}: {$page.error?.message || 'Something went wrong'}
		</h1>
		<p class="text-pink-700 mb-6">
			We can't seem to find the page you're looking for. Our bakers might have taken it out of the oven too soon!
		</p>
		<a
			href="/"
			class="inline-block px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition duration-300"
		>
			Back to Home
		</a>
	</div>
</div> 