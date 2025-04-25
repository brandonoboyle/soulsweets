<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<header class="from-secondary-50 to-secondary-100 bg-gradient-to-r shadow-md">
		<nav class="container mx-auto flex items-center justify-between px-4 py-3">
			<a href="/" class="text-primary-700 text-2xl font-bold">Soul Sweets</a>
			<div class="flex gap-6">
				<a href="/" class="text-primary-900 hover:text-primary-600">Home</a>
				<a href="/menu" class="text-primary-900 hover:text-primary-600">Menu</a>
				<a href="/about" class="text-primary-900 hover:text-primary-600">About</a>
				<a href="/contact" class="text-primary-900 hover:text-primary-600">Contact</a>
			</div>
		</nav>
	</header>

	<main class="container mx-auto flex-grow px-4 py-8">
		{@render children()}
	</main>

	<footer class="bg-tertiary-200 py-8">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div>
					<h3 class="mb-3 text-lg font-bold text-primary-800">Soul Sweets</h3>
					<p class="text-primary-700">The same little blurb here</p>
				</div>
				<div>
					<h3 class="mb-3 text-lg font-bold text-primary-800">Hours</h3>
					<p class="text-primary-700">Monday-Friday: 7am-6pm</p>
					<p class="text-primary-700">Saturday: 8am-5pm</p>
					<p class="text-primary-700">Sunday: 8am-3pm</p>
				</div>
				<div>
					<a href="/contact"><h3 class="text-primary-800 mb-3 text-lg font-bold">Contact Us</h3></a>
				</div>
			</div>
			<div class="mt-8 text-center text-primary-600">
				<p>&copy; {new Date().getFullYear()} Soul Sweets Bakery. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
