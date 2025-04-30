<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex min-h-[70vh] items-center justify-center">
	<div class="max-w-lg p-8 text-center">
		<div class="mb-6 text-8xl text-pink-600">🍰</div>
		<h1 class="mb-4 text-3xl font-bold text-pink-800">
			{$page.status}: {$page.error?.message || 'Something went wrong'}
		</h1>
		<p class="mb-6 text-pink-700">We can't seem to find the page you're looking for</p>
		<a
			href="/"
			class="inline-block rounded-full bg-pink-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-pink-700"
		>
			Back to Home
		</a>
	</div>
</div>
