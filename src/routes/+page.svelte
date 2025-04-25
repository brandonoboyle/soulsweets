<script lang="ts">
	import { slide } from 'svelte/transition';
	import logo from '$lib/assets/logo.png';
	import goodies from '$lib/assets/pics/goodies.png';
</script>

<div class="space-y-16">
	<!-- Hero Section -->
	<section class="relative">
		<div class=" overflow-hidden rounded-lg drop-shadow-xl">
			<div class="bg-gradient-to-r from-secondary-50 to-secondary-100 container mx-auto flex flex-col items-center px-4 py-20 text-center">
				<img src={logo} alt="Soul Sweets Logo" class="mb-6 rounded-full" />
				<!-- <h1 class="text-4xl md:text-6xl font-bold text-surface-800 mb-6">Soul Sweets</h1> -->
				<p class="text-xl text-tertiary-900 max-w-2xl mb-8">A nice little blurb here maybe</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="/menu"
						class="bg-primary-600 text-surface-50 hover:bg-primary-700 rounded-full px-8 py-3 font-medium transition duration-300"
					>
						View Our Menu
					</a>
					<a
						href="/contact"
						class="bg-surface-50 text-primary-700 border-primary-300 rounded-full border px-8 py-3 font-medium transition duration-300 hover:bg-pink-50"
					>
						Personal Order
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Products -->
	<section>
		<div class="container mx-auto">
			<h2 class="mb-8 text-center text-3xl font-bold text-primary-900">Recent Creations</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ name: 'Strawberry Cupcakes', desc: 'Fresh strawberry cupcakes topped with buttercream frosting.', img: 'cupcake.jpg' }, { name: 'Chocolate Croissants', desc: 'Buttery, flaky croissants filled with rich chocolate.', img: 'croissant.jpg' }, { name: 'Lemon Tart', desc: 'Tangy lemon curd in a buttery shortbread crust.', img: 'tart.jpg' }] as product}
					<div
						class="flex flex-col rounded-lg bg-primary-50 p-6 shadow-md transition duration-300 hover:drop-shadow-xl"
					>
						<div
							class="mb-4 flex h-52 items-center justify-center rounded bg-secondary-50 text-primary-800"
						>
							<span class="text-6xl">🍰</span>
						</div>
						<h3 class="mb-2 text-xl font-bold text-primary-700">{product.name}</h3>
						<p class="mb-4 flex-grow text-primary-600">{product.desc}</p>
						<a href="/menu" class="font-medium text-primary-600 hover:text-primary-800">Learn more →</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- About Section -->
	<!-- <section class="rounded-lg bg-pink-50 py-16 border-2">
		<div class="container mx-auto px-4">
			<div class="flex flex-col items-center gap-12 md:flex-row">
				<div class="md:w-1/2">
					<div class="flex h-64 items-center justify-center rounded-lg bg-pink-200 text-pink-800">
						<span class="text-8xl">👩‍🍳</span>
					</div>
				</div>
				<div class="space-y-4 md:w-1/2">
					<h2 class="text-3xl font-bold text-pink-800">Our Story</h2>
					<p class="text-pink-700">
						Soul Sweets began with a passion for creating delicious treats that bring joy to our
						community. Every item in our bakery is made from scratch using only the finest
						ingredients and traditional recipes with a modern twist.
					</p>
					<p class="text-pink-700">
						Our team of dedicated bakers starts each day before dawn to ensure you get the freshest
						pastries possible.
					</p>
					<a
						href="/about"
						class="mt-4 inline-block rounded-full bg-pink-600 px-6 py-2 text-white transition duration-300 hover:bg-pink-700"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	</section> -->

	<!-- Testimonials -->
	<section>
		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-bold text-primary-800">Testimonials?</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each [{ name: 'Sarah M.', quote: "The best cupcakes I've ever had! Soul Sweets is now my go-to for all celebrations." }, { name: 'John D.', quote: 'Their sourdough bread is amazing. I stop by every weekend to get a fresh loaf.' }] as testimonial}
					<div class="rounded-lg bg-tertiary-100 p-6" transition:slide>
						<p class="mb-4 text-primary-700 italic">"{testimonial.quote}"</p>
						<p class="font-bold text-primary-800">— {testimonial.name}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="rounded-lg bg-secondary-100 py-12 text-surface-50">
		<div class="container mx-auto px-4 text-center">
			<h2 class="mb-4 text-3xl font-bold">Ready to Order?</h2>
			<p class="mx-auto mb-8 max-w-2xl">
				Visit our menu or order online for special events and celebrations!
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="rounded-full bg-white px-8 py-3 font-medium text-primary-600 transition duration-300 hover:bg-primary-100"
				>
					Find Our Location
				</a>
				<a
					href="/menu"
					class="rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition duration-300 hover:bg-pink-700"
				>
					Order Special Items
				</a>
			</div>
		</div>
	</section>
</div>
