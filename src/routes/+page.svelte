<script lang="ts">
	import { slide } from 'svelte/transition';
	import logo from '$lib/assets/image.png';
	import type { RecentDocument } from '../prismicio-types';
	import type { ReviewDocument } from '../prismicio-types';
	import { PrismicRichText, PrismicImage } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import cakes from '$lib/assets/pics/cakes.jpg';
	import brownies from '$lib/assets/pics/brownies.jpg';
	import cupcakes from '$lib/assets/pics/cupcakes.jpg';
	import { fadeIn } from '$lib/actions/fadeIn';

	export let data: { recent: RecentDocument; reviews: ReviewDocument[] };

	let currentIndex = 0;
	let reviewsIndex = 0;
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

	function nextReviewSlide() {
		if (isMobile) {
			reviewsIndex = (reviewsIndex + 1) % data.reviews[0].data.review.length;
		} else {
			reviewsIndex = Math.min(reviewsIndex + 2, data.reviews[0].data.review.length - 2);
		}
	}

	function prevReviewSlide() {
		if (isMobile) {
			reviewsIndex =
				(reviewsIndex - 1 + data.reviews[0].data.review.length) %
				data.reviews[0].data.review.length;
		} else {
			reviewsIndex = Math.max(reviewsIndex - 2, 0);
		}
	}

	function handleTouchStart(e: TouchEvent, target: 'recent' | 'reviews') {
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

	function handleTouchEnd(e: TouchEvent, target: 'recent' | 'reviews') {
		touchEndX = e.changedTouches[0].clientX;
		touchEndY = e.changedTouches[0].clientY;
		handleSwipe(target);
		isSwiping = false;
	}

	function handleSwipe(target: 'recent' | 'reviews') {
		const swipeThreshold = 50;
		const diffX = touchStartX - touchEndX;
		const diffY = Math.abs(touchStartY - touchEndY);

		// Only trigger swipe if the movement is more horizontal than vertical
		if (Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > diffY) {
			if (diffX > 0) {
				if (target === 'recent') {
					nextSlide();
				} else {
					nextReviewSlide();
				}
			} else {
				if (target === 'recent') {
					prevSlide();
				} else {
					prevReviewSlide();
				}
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
					on:touchstart={(e) => handleTouchStart(e, 'recent')}
					on:touchmove={handleTouchMove}
					on:touchend={(e) => handleTouchEnd(e, 'recent')}
				>
					<div
						class="flex transition-transform duration-300 ease-in-out"
						style="transform: translateX(-{currentIndex * (isMobile ? 100 : 33.333)}%)"
					>
						{#each data.recent.data.card as card, i}
							<div class="w-full flex-shrink-0 px-4 md:w-1/3">
								<div
									class="bg-primary-100 flex h-full flex-col rounded-lg p-2 shadow-md transition duration-300"
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

	<!-- Testimonials -->
	<section use:fadeIn={{ delay: 600 }}>
		<div class="container mx-auto">
			<h2
				class="text-secondary-500 bg-secondary-100 font-marck-script mx-auto mb-12 rounded-full px-6 py-4 text-center text-4xl font-bold shadow-lg md:text-7xl"
			>
				Happy Customers
			</h2>
			<div class="relative pt-4">
				<div
					class="touch-pan-y overflow-hidden"
					on:touchstart={(e) => handleTouchStart(e, 'reviews')}
					on:touchmove={handleTouchMove}
					on:touchend={(e) => handleTouchEnd(e, 'reviews')}
				>
					<div
						class="flex transition-transform duration-300 ease-in-out"
						style="transform: translateX(-{reviewsIndex * (isMobile ? 100 : 50)}%)"
					>
						{#if data.reviews && data.reviews[0]?.data?.review}
							{#each data.reviews[0].data.review as review, i}
								<div class="w-full flex-shrink-0 px-4 md:w-1/2">
									<div
										class="from-secondary-200 to-secondary-100 text-tertiary-50 rounded-lg bg-gradient-to-r p-6 shadow-md"
										transition:slide
									>
										<div class="text-primary-800 mb-4 text-xl font-bold underline">
											<PrismicRichText field={review.name} />
										</div>
										<div class="text-primary-700 italic">
											<PrismicRichText field={review.quote} />
										</div>
									</div>
								</div>
							{/each}
						{/if}
					</div>
				</div>

				<!-- Navigation Dots -->
				<div class="mt-4 flex justify-center gap-2">
					{#each data.reviews[0].data.review as _, i}
						<button
							class="h-3 w-3 rounded-full transition-colors duration-300 {reviewsIndex === i
								? 'bg-primary-500'
								: 'bg-primary-200'}"
							on:click={() => (reviewsIndex = i)}
							aria-label="Go to slide {i + 1}"
						></button>
					{/each}
				</div>

				<!-- Navigation Buttons - Hidden on Mobile -->
				<button
					class="bg-primary-500 hover:bg-primary-600 absolute top-1/2 left-0 hidden -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-colors md:block"
					on:click={prevReviewSlide}
					disabled={reviewsIndex === 0}
				>
					←
				</button>
				<button
					class="bg-primary-500 hover:bg-primary-600 absolute top-1/2 right-0 hidden -translate-y-1/2 rounded-full p-2 text-white shadow-lg transition-colors md:block"
					on:click={nextReviewSlide}
					disabled={isMobile
						? reviewsIndex === data.reviews[0].data.review.length - 1
						: reviewsIndex >= data.reviews[0].data.review.length - 2}
				>
					→
				</button>
			</div>
		</div>
	</section>
</div>
