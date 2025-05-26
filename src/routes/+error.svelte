<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex min-h-[70vh] items-center justify-center">
	<div class="max-w-lg p-8 text-center">
		<div class="text-primary-600 mb-6 text-8xl">🍰</div>
		<h1 class="text-primary-800 mb-4 text-3xl font-bold">
			{$page.status}: {$page.error?.message || 'Something went wrong'}
		</h1>
		<p class="text-primary-700 mb-6">We can't seem to find the page you're looking for</p>
		<a
			href="/"
			class="bg-primary-600 text-primary-50 hover:bg-primary-700 inline-block rounded-full px-6 py-3 font-medium transition duration-300"
		>
			Back to Home
		</a>
	</div>
</div>
