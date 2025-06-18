<script lang="ts">
	import '../app.css';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import fb from '$lib/assets/social/facebook.svg';
	import ig from '$lib/assets/social/instagram.svg';
	import tt from '$lib/assets/social/tiktok.svg';
	let { children } = $props();

	let isInfoDropdownOpen = $state(false);
	let isMobileMenuOpen = $state(false);
	let dropdownRef = $state<HTMLElement | undefined>(undefined);
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
	<header class="from-secondary-200 to-secondary-100 sticky top-0 z-40 bg-gradient-to-r shadow-md">
		<nav class="container mx-auto flex items-center justify-between px-4 py-8">
			<button
				class="text-primary-900 hover:text-primary-600"
				onclick={(e) => {
					e.stopPropagation();
					toggleMobileMenu();
				}}
				aria-label="Toggle menu"
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
			<a
				href="/"
				class="text-primary-700 absolute left-1/2 -translate-x-1/2 transform text-4xl font-bold"
			>
				<p class="text-surface-50">
					<span class="font-mr-de-haviland text-primary-500 pr-3 text-5xl tracking-wide">Soul</span>Sweets
				</p>
			</a>
			<div class="w-10"></div>

			{#if isMobileMenuOpen}
				<div
					bind:this={mobileMenuRef}
					class="bg-secondary-200/95 fixed inset-x-0 top-0 z-50 backdrop-blur-sm"
					transition:slide={{ duration: 200 }}
				>
					<div class="flex flex-col max-h-[80vh] overflow-y-auto">
						<div class="border-primary-200/20 flex items-center justify-between border-b p-6">
							<button
								class="text-primary-900 hover:text-primary-600 hover:bg-primary-100/20 rounded-full p-2 transition-colors"
								onclick={(e) => {
									e.stopPropagation();
									toggleMobileMenu();
								}}
								aria-label="Close menu"
							>
								<svg
									class="h-8 w-8"
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
							<h1 class="text-primary-700 font-bold">
								<a href="/" class="transition-opacity hover:opacity-80">
									<p class="text-surface-50 text-4xl">
										<span class="font-mr-de-haviland text-primary-500 pr-3 text-5xl tracking-wide">Soul</span
										>Sweets
									</p>
								</a>
							</h1>
							<div class="w-8"></div>
						</div>
						<nav class="flex flex-col space-y-2 px-6">
							<a
								href="/order"
								onclick={() => (isMobileMenuOpen = false)}
								class="text-primary-900 hover:text-primary-600 hover:bg-primary-100/20 rounded-md px-4 py-3 text-lg transition-colors"
								>Order</a
							>
							<div class="flex flex-col space-y-2">
								<a
									href="/about"
									onclick={() => (isMobileMenuOpen = false)}
									class="text-primary-900 hover:text-primary-600 hover:bg-primary-100/20 rounded-md px-4 py-3 text-lg transition-colors"
									>About</a
								>
								<a
									href="/policy"
									onclick={() => (isMobileMenuOpen = false)}
									class="text-primary-900 hover:text-primary-600 hover:bg-primary-100/20 rounded-md px-4 py-3 text-lg transition-colors"
									>Policy</a
								>
								<a
									href="/care"
									onclick={() => (isMobileMenuOpen = false)}
									class="text-primary-900 hover:text-primary-600 hover:bg-primary-100/20 rounded-md px-4 py-3 text-lg transition-colors"
									>Care</a
								>
								<a
									href="/contact"
									onclick={() => (isMobileMenuOpen = false)}
									class="text-primary-900 hover:text-primary-600 hover:bg-primary-100/20 rounded-md px-4 py-3 text-lg transition-colors"
									>Contact</a
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
					<p class="text-primary-700">From my Home, Heart and Soul</p>
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
						<a href="https://www.instagram.com/soul.sweets.bakery" class="flex items-center justify-center">
							<img src={ig} alt="Instagram" class="h-8 w-8" />
						</a>
						<a href="https://www.facebook.com/profile.php?id=61557920452172&mibextid=wwXIfr&rdid=Zbbz2KjCnb7TWgb1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BXNJM45rH%2F%3Fmibextid%3DwwXIfr" class="flex items-center justify-center">
							<img src={fb} alt="Facebook" class="h-8 w-8" />
						</a>
						<a href="#top" class="flex items-center justify-center">
							<img src={tt} alt="TikTok" class="h-8 w-8" />
						</a>
					</div>
				</div>
			</div>
			<div class="text-primary-600 mt-8 text-center">
				<p>&copy; {new Date().getFullYear()} Soul Sweets Bakery. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
