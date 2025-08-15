<script lang="ts">
	import { onMount } from 'svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import type { ImageField } from '@prismicio/client';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	interface Props {
		field: ImageField;
		class?: string;
		alt?: string;
		threshold?: number;
		aspectRatio?: 'square' | 'video' | 'photo';
	}

	let { 
		field, 
		class: className = '',
		alt = '',
		threshold = 0.1,
		aspectRatio = 'photo'
	}: Props = $props();

	let imageContainer: HTMLElement;
	let isIntersecting = false;
	let isLoaded = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isIntersecting = true;
					observer.unobserve(imageContainer);
				}
			},
			{ threshold }
		);

		if (imageContainer) {
			observer.observe(imageContainer);
		}

		return () => observer.disconnect();
	});

	function handleLoad() {
		isLoaded = true;
	}
</script>

<div bind:this={imageContainer} class="relative {className}">
	{#if isIntersecting}
		<div class="transition-opacity duration-300 {isLoaded ? 'opacity-100' : 'opacity-0'}">
			<PrismicImage 
				{field} 
				{alt}
				class="w-full h-full object-cover rounded-lg"
				on:load={handleLoad}
			/>
		</div>
		{#if !isLoaded}
			<div class="absolute inset-0">
				<ImagePlaceholder {aspectRatio} />
			</div>
		{/if}
	{:else}
		<ImagePlaceholder {aspectRatio} />
	{/if}
</div>
