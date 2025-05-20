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
	<!-- Hero Section -->
	<section class="relative" use:fadeIn>
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
				<p class="text-primary-900 text-4xl">
					<span
						class="font-mr-de-haviland text-secondary-400 pr-3 text-6xl font-bold md:font-normal"
						>Soul</span
					> Sweets
				</p>
				<img src={logo} alt="Soul Sweets Logo" class="h-1/2 w-1/2 md:h-1/4 md:w-1/4" />
				<!-- <h1 class="text-4xl md:text-6xl font-bold text-surface-800 mb-6">Soul Sweets</h1> -->
				<p class="text-tertiary-900 mb-8 max-w-2xl text-xl md:text-2xl">
					With <span class="text-primary-700 font-bold">Kindness</span> &
					<span class="text-primary-700 font-bold">Gratitude</span>
				</p>
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

	<section use:fadeIn={{ delay: 100 }}>
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
						Indulge in our selection of handcrafted cakes, made with love and the finest
						ingredients. From classic flavors to unique combinations, each cake is a masterpiece
						waiting to be enjoyed.
					</p>
					<a
						href="/menu"
						class="text-primary-600 hover:text-primary-700 bg-tertiary-50 inline-block rounded-full px-6 py-2 text-2xl font-medium shadow-md"
					>
						View Cake Menu
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
					<h3 class="text-primary-600 font-mr-de-haviland text-7xl font-bold md:text-8xl">Brownies</h3>
					<p class="text-primary-800 max-w-lg pb-4 text-xl md:text-2xl">
						Experience the perfect balance of fudgy and cakey in our signature brownies. Each bite
						is packed with rich chocolate flavor and topped with premium ingredients.
					</p>
					<a
						href="/menu"
						class="text-primary-600 hover:text-primary-700 bg-tertiary-50 inline-block rounded-full px-6 py-2 text-2xl font-medium"
					>
						View Brownie Menu
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
					<h3 class="text-primary-600 font-mr-de-haviland text-7xl font-bold md:text-8xl">Cupcakes</h3>
					<p class="text-primary-800 max-w-lg pb-4 text-xl md:text-2xl">
						Our cupcakes are miniature works of art, featuring moist cake bases and perfectly piped
						frosting. Available in a variety of flavors and designs for any occasion.
					</p>
					<a
						href="/menu"
						class="text-primary-600 hover:text-primary-800 bg-tertiary-50 inline-block rounded-full px-6 py-2 text-2xl font-medium"
					>
						View Cupcake Menu
					</a>
				</div>
			</div>
		</div>
	</section>

	<section use:fadeIn={{ delay: 400 }}>
		<!-- Recent Creations -->
		<div class="container mx-auto">
			<h2
				class="text-secondary-500 bg-secondary-100 mx-auto mb-12 font-marck-script rounded-full px-6 py-4 text-center text-4xl font-bold shadow-lg md:text-7xl"
			>
				Recent Creations
			</h2>
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
				<div class="mt-4 flex justify-center gap-2 md:hidden">
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
	<section use:fadeIn={{ delay: 600 }}>
		<div class="container mx-auto">
			<h2
				class="text-secondary-500 bg-secondary-100 mx-auto mb-12 font-marck-script rounded-full px-6 py-4 text-center text-4xl font-bold shadow-lg md:text-7xl"
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

	<!-- Call to Action -->
	<section
		class="from-secondary-200 to-secondary-100 text-primary-50 rounded-lg bg-gradient-to-r py-12 shadow-lg"
		use:fadeIn={{ delay: 700 }}
	>
		<div class="container mx-auto px-4 text-center">
			<h2 class="text-primary-800 mb-4 text-4xl font-bold">Ready to Order?</h2>
			<p class="text-primary-800 mx-auto mb-8 max-w-2xl">
				Visit our menu or order online for special events and celebrations!
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="text-primary-800 hover:bg-primary-100 bg-primary-300 rounded-full px-8 py-3 font-medium transition duration-300"
				>
					View Selection
				</a>
				<a
					href="/menu"
					class="border-surface-50 text-primary-800 hover:bg-secondary-400 bg-secondary-100 rounded-full border-2 px-8 py-3 font-medium transition duration-300"
				>
					Custom Order
				</a>
			</div>
		</div>
	</section>
</div>
