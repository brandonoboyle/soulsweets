<script lang="ts">
	import { slide } from 'svelte/transition';
	import logo from '$lib/assets/logo.png';
	import goodies from '$lib/assets/pics/goodies.png';
	import type { RecentDocument } from '../prismicio-types';
	import { PrismicRichText, PrismicImage } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	export let data: { recent: RecentDocument };
	
	let currentIndex = 0;
	let touchStartX = 0;
	let touchStartY = 0;
	let touchEndX = 0;
	let touchEndY = 0;
	let isMobile = false;
	let isSwiping = false;

	onMount(() => {
		isMobile = window.innerWidth < 768;
		window.addEventListener('resize', () => {
			isMobile = window.innerWidth < 768;
		});
	});

	function nextSlide() {
		if (isMobile) {
			currentIndex = (currentIndex + 1) % data.recent.data.card.length;
		} else {
			currentIndex = Math.min(currentIndex + 3, data.recent.data.card.length - 3);
		}
	}

	function prevSlide() {
		if (isMobile) {
			currentIndex = (currentIndex - 1 + data.recent.data.card.length) % data.recent.data.card.length;
		} else {
			currentIndex = Math.max(currentIndex - 3, 0);
		}
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
		isSwiping = false;
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isSwiping) {
			const currentX = e.touches[0].clientX;
			const currentY = e.touches[0].clientY;
			const deltaX = Math.abs(currentX - touchStartX);
			const deltaY = Math.abs(currentY - touchStartY);

			// If the movement is more horizontal than vertical, prevent scrolling
			if (deltaX > deltaY) {
				e.preventDefault();
				isSwiping = true;
			}
		}
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].clientX;
		touchEndY = e.changedTouches[0].clientY;
		handleSwipe();
		isSwiping = false;
	}

	function handleSwipe() {
		const swipeThreshold = 50;
		const diffX = touchStartX - touchEndX;
		const diffY = Math.abs(touchStartY - touchEndY);

		// Only trigger swipe if the movement is more horizontal than vertical
		if (Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > diffY) {
			if (diffX > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		}
	}
</script>

<div class="space-y-16">
	<!-- Hero Section -->
	<section class="relative">
		<div
			class="from-secondary-100 to-secondary-50 flex overflow-hidden rounded-3xl bg-gradient-to-r shadow-xl"
		>
			<!-- Below is the Carousel div -->
			<!-- <div class="flex w-1/2 border-2">
				<div class="carousel">
					<li>
						<img src={goodies} alt="Goodies" />
					</li>
				</div>
			</div> -->
			<div class="container mx-auto flex flex-col items-center px-4 py-20 text-center">
				<img src={logo} alt="Soul Sweets Logo" class="mb-6 rounded-full shadow-xl" />
				<!-- <h1 class="text-4xl md:text-6xl font-bold text-surface-800 mb-6">Soul Sweets</h1> -->
				<p class="text-tertiary-900 mb-8 max-w-2xl text-xl">A nice little blurb here maybe</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="/menu"
						class="bg-primary-500 text-surface-50 hover:bg-secondary-600 rounded-full px-8 py-3 font-medium transition duration-300"
					>
						View Our Menu
					</a>
					<a
						href="/contact"
						class="bg-surface-50 text-primary-700 border-primary-300 hover:bg-primary-100 rounded-full border px-8 py-3 font-medium transition duration-300"
					>
						Personal Order
					</a>
				</div>
			</div>
		</div>
	</section>

	<section>
		<!-- Recent Creations -->
		<div class="container mx-auto">
			<h2 class="text-primary-800 mb-8 text-center text-3xl font-bold">Recent Creations</h2>
			<div class="relative">
				<div 
					class="overflow-hidden touch-pan-y"
					on:touchstart={handleTouchStart}
					on:touchmove={handleTouchMove}
					on:touchend={handleTouchEnd}
				>
					<div class="flex transition-transform duration-300 ease-in-out" style="transform: translateX(-{currentIndex * (isMobile ? 100 : 33.333)}%)">
						{#each data.recent.data.card as card, i}
							<div class="w-full md:w-1/3 flex-shrink-0 px-4">
								<div class="bg-primary-100 flex flex-col rounded-lg p-6 shadow-md transition duration-300 h-full">
									<div class="bg-secondary-100 text-primary-800 mb-4 flex items-center justify-center rounded overflow-hidden">
										<PrismicImage field={card.item} class="w-full h-full object-cover" />
									</div>
									<div class="text-primary-800 text-center text-pretty mx-4 flex-grow">
										<PrismicRichText field={card.description} />
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
				
				<!-- Navigation Buttons - Hidden on Mobile -->
				<button 
					class="absolute left-0 top-1/2 -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full shadow-lg hover:bg-primary-600 transition-colors hidden md:block"
					on:click={prevSlide}
					disabled={currentIndex === 0}
				>
					←
				</button>
				<button 
					class="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full shadow-lg hover:bg-primary-600 transition-colors hidden md:block"
					on:click={nextSlide}
					disabled={isMobile ? currentIndex === data.recent.data.card.length - 1 : currentIndex >= data.recent.data.card.length - 3}
				>
					→
				</button>
			</div>
		</div>
	</section>

	<!-- Featured Products -->
	<!-- <section>
		<div class="container mx-auto">
			<h2 class="text-primary-900 mb-8 text-center text-3xl font-bold">Dessert Menu</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ name: 'Cakes', desc: 'Extravagant, decadent cakes for every occasion.', img: 'cupcake.jpg' }, { name: 'Cupcakes', desc: 'Wonderful assortments to share', img: 'croissant.jpg' }, { name: 'Brownies', desc: 'Soft, chewy, and delicious made to your liking', img: 'tart.jpg' }] as product}
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
	</section> -->

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
		<div class="container mx-auto">
			<h2 class="text-primary-800 mb-8 text-center text-3xl font-bold">Testimonials?</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each [{ name: 'Sarah M.', quote: "The best cupcakes I've ever had! Soul Sweets is now my go-to for all celebrations." }, { name: 'John D.', quote: 'Their sourdough bread is amazing. I stop by every weekend to get a fresh loaf.' }] as testimonial}
					<div
						class="from-secondary-200 to-secondary-100 text-tertiary-50 rounded-lg bg-gradient-to-r p-6"
						transition:slide
					>
						<p class="text-primary-700 mb-4 italic">"{testimonial.quote}"</p>
						<p class="text-primary-800 font-bold">— {testimonial.name}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section
		class="from-secondary-200 to-secondary-50 text-primary-50 rounded-lg bg-gradient-to-r py-12"
	>
		<div class="container mx-auto px-4 text-center">
			<h2 class="text-primary-800 mb-4 text-3xl font-bold">Ready to Order?</h2>
			<p class="text-primary-800 mx-auto mb-8 max-w-2xl">
				Visit our menu or order online for special events and celebrations!
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="text-primary-800 hover:bg-primary-100 bg-primary-100 rounded-full px-8 py-3 font-medium transition duration-300"
				>
					View Selection
				</a>
				<a
					href="/menu"
					class="border-surface-50 text-primary-800 hover:bg-secondary-400 rounded-full border-2 bg-secondary-100 px-8 py-3 font-medium transition duration-300"
				>
					Custom Order
				</a>
			</div>
		</div>
	</section>
</div>

<style>
</style>
