<script lang="ts">
	import { slide } from 'svelte/transition';
	import logo from '$lib/assets/logo.png';
	import goodies from '$lib/assets/pics/goodies.png';
</script>

<div class="space-y-16">
	<!-- Hero Section -->
	<section class="relative">
		<div
			class="from-secondary-50 to-secondary-100 flex overflow-hidden rounded-lg bg-gradient-to-r drop-shadow-xl"
		>
		<!-- Below is the Carousel div -->
			<div class="flex w-1/2 border-2">
				<!-- <div class="carousel">
					<li>
						<img src={goodies} alt="Goodies" />
					</li>
				</div> -->
			</div>
			<div class="flex w-1/2 flex-col items-center px-4 py-20 text-center">
				<img src={logo} alt="Soul Sweets Logo" class="mb-6 rounded-full" />
				<!-- <h1 class="text-4xl md:text-6xl font-bold text-surface-800 mb-6">Soul Sweets</h1> -->
				<p class="text-tertiary-900 mb-8 max-w-2xl text-xl">A nice little blurb here maybe</p>
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
			<h2 class="text-primary-900 mb-8 text-center text-3xl font-bold">Recent Creations</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ name: 'Strawberry Cupcakes', desc: 'Fresh strawberry cupcakes topped with buttercream frosting.', img: 'cupcake.jpg' }, { name: 'Chocolate Croissants', desc: 'Buttery, flaky croissants filled with rich chocolate.', img: 'croissant.jpg' }, { name: 'Lemon Tart', desc: 'Tangy lemon curd in a buttery shortbread crust.', img: 'tart.jpg' }] as product}
					<div
						class="bg-primary-50 flex flex-col rounded-lg p-6 shadow-md transition duration-300 hover:drop-shadow-xl"
					>
						<div
							class="bg-secondary-50 text-primary-800 mb-4 flex h-52 items-center justify-center rounded"
						>
							<span class="text-6xl">🍰</span>
						</div>
						<h3 class="text-primary-700 mb-2 text-xl font-bold">{product.name}</h3>
						<p class="text-primary-600 mb-4 flex-grow">{product.desc}</p>
						<a href="/menu" class="text-primary-600 hover:text-primary-800 font-medium"
							>Learn more →</a
						>
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
			<h2 class="text-primary-800 mb-8 text-center text-3xl font-bold">Testimonials?</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each [{ name: 'Sarah M.', quote: "The best cupcakes I've ever had! Soul Sweets is now my go-to for all celebrations." }, { name: 'John D.', quote: 'Their sourdough bread is amazing. I stop by every weekend to get a fresh loaf.' }] as testimonial}
					<div class="bg-tertiary-100 rounded-lg p-6" transition:slide>
						<p class="text-primary-700 mb-4 italic">"{testimonial.quote}"</p>
						<p class="text-primary-800 font-bold">— {testimonial.name}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="bg-secondary-100 text-surface-50 rounded-lg py-12">
		<div class="container mx-auto px-4 text-center">
			<h2 class="mb-4 text-3xl font-bold">Ready to Order?</h2>
			<p class="mx-auto mb-8 max-w-2xl">
				Visit our menu or order online for special events and celebrations!
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="text-primary-600 hover:bg-primary-100 rounded-full bg-white px-8 py-3 font-medium transition duration-300"
				>
					View Selection
				</a>
				<a
					href="/menu"
					class="border-surface-50 text-primary-50 hover:bg-primary-700 rounded-full border-2 bg-transparent px-8 py-3 font-medium transition duration-300"
				>
					Custom Order
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	.carousel {
		list-style: none;
		margin: 5rem;
		padding: 1rem;
		border: 5px solid white;

		display: grid;
		gap: 2rem;
		grid-auto-flow: column;
		grid-auto-columns: 40%;

		overflow-x: auto;
		scroll-snap-type: x mandatory;

		@media (prefers-reduced-motion: no-preference) {
			scroll-behavior: smooth;
		}

		anchor-name: --carousel;

		scroll-marker-group: after;

		&::scroll-marker-group {
			display: flex;
			justify-content: center;
			gap: 0.5rem;
			padding: 1rem;
		}

		> li {
			scroll-snap-align: center;

			&::scroll-marker {
				content: ' ';
				width: 20px;
				height: 20px;
				aspect-ratio: 1 / 1;
				border-radius: 100%;
				border: 2px solid CanvasText;
			}

			&::scroll-marker:target-current {
				background: LinkText;
			}
		}

		&::scroll-button(*) {
			position: fixed;
			position-anchor: --carousel;
			margin: 1rem;
			font: inherit;
			background: dodgerblue;
			border: 0;
			border-radius: 4px;
			font-weight: 700;
		}

		&::scroll-button(right) {
			content: 'right';
			position-area: center right;
		}

		&::scroll-button(left) {
			content: 'left';
			position-area: center left;
		}
	}
</style>
