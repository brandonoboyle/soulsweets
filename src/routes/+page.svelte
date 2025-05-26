<script lang="ts">
	import { slide } from 'svelte/transition';
	import logo from '$lib/assets/image.png';
	import type { RecentDocument } from '../prismicio-types';
	import { PrismicRichText, PrismicImage } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import cakes from '$lib/assets/pics/cakes.jpg';
	import brownies from '$lib/assets/pics/brownies.jpg';
	import cupcakes from '$lib/assets/pics/cupcakes.jpg';
	import { fadeIn } from '$lib/actions/fadeIn';

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
			currentIndex =
				(currentIndex - 1 + data.recent.data.card.length) % data.recent.data.card.length;
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
	<h2 class="text-primary-800 mb-4 text-center text-xl md:text-4xl">
		A taste of <span class="font-marck-script text-primary-500 text-3xl md:text-5xl">Home</span>, a
		touch of <span class="font-marck-script text-tertiary-500 text-3xl md:text-5xl">Soul</span>
	</h2>

	<section use:fadeIn={{ delay: 400 }}>
		<!-- Recent Creations -->
		<div class="container mx-auto">
			<div class="relative pt-4">
				<div
					class="touch-pan-y overflow-hidden"
					on:touchstart={handleTouchStart}
					on:touchmove={handleTouchMove}
					on:touchend={handleTouchEnd}
				>
					<div
						class="flex transition-transform duration-300 ease-in-out"
						style="transform: translateX(-{currentIndex * (isMobile ? 100 : 33.333)}%)"
					>
						{#each data.recent.data.card as card, i}
							<div class="w-full flex-shrink-0 px-4 md:w-1/3">
								<div
									class="bg-primary-100 flex h-full flex-col rounded-lg p-6 shadow-md transition duration-300"
								>
									<div
										class="bg-secondary-100 text-primary-800 mb-4 flex items-center justify-center overflow-hidden rounded"
									>
										<PrismicImage field={card.item} class="h-full w-full object-cover" />
									</div>
									<div class="text-primary-800 mx-4 flex-grow text-center text-pretty">
										<PrismicRichText field={card.description} />
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Navigation Dots -->
				<div class="mt-4 flex justify-center gap-2">
					{#each data.recent.data.card as _, i}
						<button
							class="h-3 w-3 rounded-full transition-colors duration-300 {currentIndex === i
								? 'bg-primary-500'
								: 'bg-primary-200'}"
							on:click={() => (currentIndex = i)}
							aria-label="Go to slide {i + 1}"
						></button>
					{/each}
				</div>

				<!-- Navigation Buttons - Hidden on Mobile -->
				<button
					class="bg-primary-500 hover:bg-primary-600 absolute top-1/2 left-0 hidden -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-colors md:block"
					on:click={prevSlide}
					disabled={currentIndex === 0}
				>
					←
				</button>
				<button
					class="bg-primary-500 hover:bg-primary-600 absolute top-1/2 right-0 hidden -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-colors md:block"
					on:click={nextSlide}
					disabled={isMobile
						? currentIndex === data.recent.data.card.length - 1
						: currentIndex >= data.recent.data.card.length - 3}
				>
					→
				</button>
			</div>
		</div>
		<!-- <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
		</div> -->
	</section>

	<section>
		<div class="container mx-auto">
			<h2
				class="text-primary-800 bg-secondary-100 font-marck-script mb-12 rounded-full px-6 py-4 text-center text-4xl shadow-lg md:text-7xl"
			>
				<span class="text-primary-500">Cakes</span> &
				<span class="text-tertiary-500">Desserts</span>
			</h2>
			<!-- Cakes -->
			<div
				class="bg-secondary-100 mb-16 flex flex-col items-center gap-8 rounded-lg p-8 pt-8 shadow-md md:flex-row"
			>
				<div class="md:w-1/2">
					<img src={cakes} alt="Delicious Cakes" class="rounded-lg shadow-xl" />
				</div>
				<div class="space-y-2 px-4 md:w-1/2">
					<h3 class="text-primary-600 font-mr-de-haviland text-7xl font-bold md:text-8xl">Cakes</h3>
					<p class="text-primary-800 max-w-lg pb-4 text-xl md:text-2xl">
						Moist, fluffy, & soft Soul Sweets cakes are made with love for moments that matter!
						Choose your flavor, size, and design, and let me take care of the rest.
					</p>
					<a
						href="/order"
						class="text-primary-600 hover:text-primary-700 bg-tertiary-50 inline-block rounded-full px-6 py-2 text-2xl font-medium shadow-md"
					>
						View Order Form
					</a>
				</div>
			</div>

			<!-- Brownies -->
			<div
				class="bg-tertiary-100 mb-16 flex flex-col items-center gap-8 rounded-lg p-8 shadow-md md:flex-row-reverse"
			>
				<div class="md:w-1/2">
					<img src={brownies} alt="Decadent Brownies" class="rounded-lg shadow-xl" />
				</div>
				<div class="space-y-4 px-4 md:w-1/2">
					<h3 class="text-primary-600 font-mr-de-haviland text-7xl font-bold md:text-8xl">
						Brownies
					</h3>
					<p class="text-primary-800 max-w-lg pb-4 text-xl md:text-2xl">
						Soft, rich & fudgy brownies made with real Belgian chocolate and Dutch processed cocoa
						powder. Every bite is packed with a deep, smooth chocolate flavor.
					</p>
					<a
						href="/order"
						class="text-primary-600 hover:text-primary-700 bg-tertiary-50 inline-block rounded-full px-6 py-2 text-2xl font-medium"
					>
						View Order Form
					</a>
				</div>
			</div>

			<!-- Cupcakes -->
			<div
				class="bg-secondary-100 mb-16 flex flex-col items-center gap-8 rounded-lg p-8 shadow-md md:flex-row"
			>
				<div class="md:w-1/2">
					<img src={cupcakes} alt="Delightful Cupcakes" class="rounded-lg shadow-xl" />
				</div>
				<div class="space-y-4 px-4 md:w-1/2">
					<h3 class="text-primary-600 font-mr-de-haviland text-7xl font-bold md:text-8xl">
						Cupcakes
					</h3>
					<p class="text-primary-800 max-w-lg pb-4 text-xl md:text-2xl">
						Fluffy, soft & full of flavour Soul Sweets cupcakes are made from scratch and available
						in a variety of flavors and designs.
					</p>
					<a
						href="/order"
						class="text-primary-600 hover:text-primary-800 bg-tertiary-50 inline-block rounded-full px-6 py-2 text-2xl font-medium"
					>
						View Order Form
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<!-- <section class="bg-primary-50 rounded-lg border-2 py-16">
		<div class="container mx-auto px-4">
			<div class="flex flex-col items-center gap-12 md:flex-row">
				<div class="md:w-1/2">
					<div
						class="bg-primary-200 text-primary-800 flex h-64 items-center justify-center rounded-lg"
					>
						<span class="text-8xl">Your Photo</span>
					</div>
				</div>
				<div class="space-y-4 md:w-1/2">
					<h2 class="text-primary-800 text-3xl font-bold">
						I’m Kiara Marfurt-Breakenridge, the creator of Soul Sweets bakery.
					</h2>
					<p class="text-primary-700">
						Growing up and even now, the kitchen has always been the heart of everything In my
						family. Cooking and baking is how we show love, celebrate, and spend time together.
					</p>
					<p class="text-primary-700">
						For as long as I can remember I’ve been drawn to baking, my mum says I got it from my
						grandfather, who once owned a bakery in Old Montreal. I never got the chance to meet
						him, but I like to think I carry a small part of him with me, especially when I’m in the
						kitchen.
					</p>
					<p class="text-primary-700">
						No matter what paths I’ve taken in life I always find myself coming back to baking, It’s
						what I truly love to do. In November 2023, I decided to start Soul Sweets a home based
						bakery in Russell, Ontario where I specialize in cakes, cupcakes, brownies, and other
						sweet treats. Everything is made fresh, using quality ingredients and a whole lot of
						soul.
					</p>
					<a
						href="/about"
						class="bg-primary-600 hover:bg-secondary-700 mt-4 inline-block rounded-full px-6 py-2 text-white transition duration-300"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	</section> -->

	<!-- Testimonials -->
	<section use:fadeIn={{ delay: 600 }}>
		<div class="container mx-auto">
			<h2
				class="text-secondary-500 bg-secondary-100 font-marck-script mx-auto mb-12 rounded-full px-6 py-4 text-center text-4xl font-bold shadow-lg md:text-7xl"
			>
				Happy Customers
			</h2>
			<div class="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
				{#each [{ name: 'Sarah M.', quote: "The best cupcakes I've ever had! Soul Sweets is now my go-to for all celebrations." }, { name: 'John D.', quote: 'Their brownies are amazing! I would eat them every day if I could.' }] as testimonial}
					<div
						class="from-secondary-200 to-secondary-100 text-tertiary-50 rounded-lg bg-gradient-to-r p-6 shadow-md"
						transition:slide
					>
						<p class="text-primary-700 mb-4 italic">"{testimonial.quote}"</p>
						<p class="text-primary-800 font-bold">— {testimonial.name}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
