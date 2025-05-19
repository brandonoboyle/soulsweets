<script lang="ts">
	import '../app.css';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import fb from '$lib/assets/social/facebook.svg';
	import ig from '$lib/assets/social/instagram.svg';
	import tw from '$lib/assets/social/twitter.svg';
	let { children } = $props();

	let isInfoDropdownOpen = $state(false);
	let isMobileMenuOpen = $state(false);
	let dropdownRef: HTMLElement;
	let mobileMenuRef = $state<HTMLElement | undefined>(undefined);

	function toggleInfoDropdown() {
		isInfoDropdownOpen = !isInfoDropdownOpen;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
				isInfoDropdownOpen = false;
			}
			if (mobileMenuRef && !mobileMenuRef.contains(event.target as Node)) {
				isMobileMenuOpen = false;
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
			<a href="/" class="text-primary-700 text-2xl pl-3 font-bold">
				<p class="text-surface-50">
					<span class="font-mr-de-haviland text-primary-500 pr-3 text-4xl">Soul</span>Sweets
				</p></a
			>

			<!-- Mobile Menu Button -->
			<button
				class="text-primary-900 hover:text-primary-600 md:hidden"
				onclick={(e) => {
					e.stopPropagation();
					toggleMobileMenu();
				}}
				aria-label="Toggle mobile menu"
			>
				<svg
					class="h-10 w-10"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>

			<!-- Desktop Navigation -->
			<div class="hidden gap-2 md:flex md:gap-6 md:text-lg">
				<div class="relative" bind:this={dropdownRef}>
					<button
						onclick={toggleInfoDropdown}
						class="text-primary-900 hover:text-primary-600 flex items-center"
					>
						
						Menu
						<svg
							class="h-6 w-6 transition-transform"
							class:rotate-90={isInfoDropdownOpen}
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

			<!-- Mobile Navigation Menu -->
			{#if isMobileMenuOpen}
				<div
					bind:this={mobileMenuRef}
					class="bg-secondary-200 fixed inset-0 z-50 md:hidden"
					transition:slide={{ duration: 200 }}
				>
					<div class="flex h-full flex-col">
						<div class="flex justify-between p-4">
							<a href="/" class="text-primary-700 text-2xl pl-3 font-bold">
								<p class="text-surface-50">
									<span class="font-mr-de-haviland text-primary-500 pr-3 text-4xl">Soul</span>Sweets
								</p>
							</a>
							<button
								class="text-primary-900 hover:text-primary-600"
								onclick={(e) => {
									e.stopPropagation();
									toggleMobileMenu();
								}}
								aria-label="Close mobile menu"
							>
								<svg
									class="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<nav class="flex flex-col p-4">
							<div class="">
								<button
									onclick={(e) => {
										e.stopPropagation();
										toggleInfoDropdown();
									}}
									class="text-primary-900 hover:text-primary-600 flex w-full items-center pl-3 py-1 text-lg"
								>
									<span>Menu</span>
									<svg
										class="h-6 w-6 transition-transform"
										class:rotate-90={isInfoDropdownOpen}
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
								</button>
								{#if isInfoDropdownOpen}
								<!-- Mobile menu dropdown -->
									<div class="pl-4 bg-secondary-100 rounded-md">
										<a
											href="/cakes"
											onclick={() => {
												isInfoDropdownOpen = false;
												isMobileMenuOpen = false;
											}}
											class="text-primary-900 hover:text-primary-600 block py-2 text-lg">Cakes</a
										>
										<a
											href="/brownies"
											onclick={() => {
												isInfoDropdownOpen = false;
												isMobileMenuOpen = false;
											}}
											class="text-primary-900 hover:text-primary-600 block py-2 text-lg">Brownies</a
										>
										<a
											href="/cupcakes"
											onclick={() => {
												isInfoDropdownOpen = false;
												isMobileMenuOpen = false;
											}}
											class="text-primary-900 hover:text-primary-600 block py-2 text-lg">Cupcakes</a
										>
									</div>
								{/if}
							</div>
							<div class="flex flex-col pl-3">
							<a
								href="/about"
								onclick={() => (isMobileMenuOpen = false)}
								class="text-primary-900 hover:text-primary-600 py-2 text-lg">About</a
							>
							<a
								href="/policy"
								onclick={() => (isMobileMenuOpen = false)}
								class="text-primary-900 hover:text-primary-600 py-2 text-lg">Policy</a
							>
							<a
								href="/care"
								onclick={() => (isMobileMenuOpen = false)}
								class="text-primary-900 hover:text-primary-600 py-2 text-lg">Care</a
							>
							<a
								href="/contact"
								onclick={() => (isMobileMenuOpen = false)}
								class="text-primary-900 hover:text-primary-600 py-2 text-lg">Contact</a
							>
							</div>
						</nav>
					</div>
				</div>
			{/if}
		</nav>
	</header>

	<main class="container mx-auto flex-grow px-4 py-8">
		{@render children()}
	</main>

	<footer class="from-secondary-200 to-secondary-100 bg-gradient-to-r p-8">
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
