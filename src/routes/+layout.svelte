<script lang="ts">
	import '../app.css';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import fb from '$lib/assets/social/facebook.svg';
	import ig from '$lib/assets/social/instagram.svg';
	import tw from '$lib/assets/social/twitter.svg';
	let { children } = $props();

	let isInfoDropdownOpen = $state(false);
	let dropdownRef: HTMLElement;

	function toggleInfoDropdown() {
		isInfoDropdownOpen = !isInfoDropdownOpen;
	}

	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
				isInfoDropdownOpen = false;
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="flex min-h-screen flex-col">
	<header class="from-secondary-200 to-secondary-100 bg-gradient-to-r shadow-md">
		<nav class="container mx-auto flex items-center justify-between px-4 py-3">
			<a href="/" class="text-primary-700 text-2xl font-bold">
				<p class="text-surface-50">
					<span class="font-mr-de-haviland pr-3 text-4xl text-primary-500">Soul</span>Sweets
				</p></a
			>
			<div class="flex gap-2 md:gap-6 md:text-lg">
				<div class="relative" bind:this={dropdownRef}>
					<button
						onclick={toggleInfoDropdown}
						class="text-primary-900 hover:text-primary-600 flex items-center"
					>
						<svg
							class="h-4 w-4 transition-transform"
							class:-rotate-90={isInfoDropdownOpen}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
						Menu
					</button>
					{#if isInfoDropdownOpen}
						<div
							class="ring-opacity-5 bg-primary-50 ring-tertiary-900 absolute left-0 z-50 mt-2 w-48 rounded-md ring-1 drop-shadow-2xl"
							transition:slide={{ duration: 200 }}
						>
							<div class="">
								<a
									href="/cakes"
									onclick={() => (isInfoDropdownOpen = false)}
									class="text-primary-900 hover:bg-primary-100 block rounded-t-md px-4 py-2 text-sm"
									>Cakes</a
								>
								<a
									href="/brownies"
									onclick={() => (isInfoDropdownOpen = false)}
									class="text-primary-900 hover:bg-primary-100 block px-4 py-2 text-sm">Brownies</a
								>
								<a
									href="/cupcakes"
									onclick={() => (isInfoDropdownOpen = false)}
									class="text-primary-900 hover:bg-primary-100 block rounded-b-md px-4 py-2 text-sm"
									>Cupcakes</a
								>
							</div>
						</div>
					{/if}
				</div>
				<a href="/about" class="text-primary-900 hover:text-primary-600">About</a>
				<a href="/policy" class="text-primary-900 hover:text-primary-600">Policy</a>
				<a href="/care" class="text-primary-900 hover:text-primary-600">Care</a>
				<a href="/contact" class="text-primary-900 hover:text-primary-600">Contact</a>
			</div>
		</nav>
	</header>

	<main class="container mx-auto flex-grow px-4 py-8">
		{@render children()}
	</main>

	<footer class="bg-tertiary-200 p-8">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div>
					<h3 class="text-primary-800 mb-3 text-lg font-bold">Soul Sweets</h3>
					<p class="text-primary-700">The same little blurb here</p>
				</div>
				<div>
					<h3 class="text-primary-800 mb-3 text-lg font-bold">Hours</h3>
					<p class="text-primary-700">Monday-Friday: 7am-6pm</p>
					<p class="text-primary-700">Saturday: 8am-5pm</p>
					<p class="text-primary-700">Sunday: 8am-3pm</p>
				</div>
				<div>
					<a href="/contact"><h3 class="text-primary-800 mb-3 text-lg font-bold">Contact Us</h3></a>
					<div class="flex gap-4">
						<a href="https://www.instagram.com/soul.sweets.bakery"
							><img src={ig} alt="Instagram" class="h-6 w-6" /></a
						>
						<img src={fb} alt="Facebook" class="h-6 w-6" />

						<img src={tw} alt="Twitter" class="h-6 w-6" />
					</div>
				</div>
			</div>
			<div class="text-primary-600 mt-8 text-center">
				<p>&copy; {new Date().getFullYear()} Soul Sweets Bakery. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
