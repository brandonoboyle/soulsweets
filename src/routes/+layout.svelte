<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<header class="bg-gradient-to-r from-secondary-50 to-secondary-100 shadow-md">
		<nav class="container mx-auto px-4 py-3 flex justify-between items-center">
			<a href="/" class="text-2xl font-bold text-primary-700">Soul Sweets</a>
			<div class="flex gap-6">
				<a href="/" class="text-primary-900 hover:text-primary-600">Home</a>
				<a href="/menu" class="text-primary-900 hover:text-primary-600">Menu</a>
				<a href="/about" class="text-primary-900 hover:text-primary-600">About</a>
				<a href="/contact" class="text-primary-900 hover:text-primary-600">Contact</a>
			</div>
		</nav>
	</header>
	
	<main class="flex-grow container mx-auto px-4 py-8">
		{@render children()}
	</main>
	
	<footer class="bg-pink-100 py-8">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-lg font-bold text-pink-800 mb-3">Soul Sweets</h3>
					<p class="text-pink-700">Delicious treats baked with love.</p>
				</div>
				<div>
					<h3 class="text-lg font-bold text-pink-800 mb-3">Hours</h3>
					<p class="text-pink-700">Monday-Friday: 7am-6pm</p>
					<p class="text-pink-700">Saturday: 8am-5pm</p>
					<p class="text-pink-700">Sunday: 8am-3pm</p>
				</div>
				<div>
					<h3 class="text-lg font-bold text-pink-800 mb-3">Contact</h3>
					<p class="text-pink-700">123 Bakery Lane</p>
					<p class="text-pink-700">Sweet Town, ST 12345</p>
					<p class="text-pink-700">(555) 123-4567</p>
				</div>
			</div>
			<div class="mt-8 text-center text-pink-700">
				<p>&copy; {new Date().getFullYear()} Soul Sweets Bakery. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
