<script lang="ts">
	interface Props {
		class?: string;
		aspectRatio?: 'square' | 'video' | 'photo';
		showShimmer?: boolean;
	}

	let { 
		class: className = '',
		aspectRatio = 'photo',
		showShimmer = true
	}: Props = $props();

	const aspectClasses = {
		square: 'aspect-square',
		video: 'aspect-video',
		photo: 'aspect-[4/3]'
	};
</script>

<div class="relative overflow-hidden rounded-lg bg-gray-200 {aspectClasses[aspectRatio]} {className}">
	{#if showShimmer}
		<div class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
			<div class="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
		</div>
	{/if}
	
	<div class="absolute inset-0 flex items-center justify-center">
		<svg class="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
			<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 12c.83 0 1.5-.67 1.5-1.5S9.83 9 9 9s-1.5.67-1.5 1.5S8.17 12 9 12zm4 4.5c0-.28-.22-.5-.5-.5h-6c-.28 0-.5.22-.5.5s.22.5.5.5h6c.28 0 .5-.22.5-.5zm5-6c0-.28-.22-.5-.5-.5H15c-.28 0-.5.22-.5.5s.22.5.5.5h2.5c.28 0 .5-.22.5-.5z"/>
		</svg>
	</div>
</div>

<style>
	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
	
	.animate-shimmer {
		animation: shimmer 2s infinite linear;
	}
</style>
