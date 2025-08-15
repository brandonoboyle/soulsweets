import { createClient } from '@prismicio/client';
import { getImageUrl } from '$lib/utils/imagePreloader';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const [recent, reviews] = await Promise.all([
		client.getSingle('recent'),
		client.getSingle('review')
	]);

	// Extract image URLs for preloading
	const imageUrls: string[] = [];
	
	// Get URLs from recent cards
	if (recent.data.card && Array.isArray(recent.data.card)) {
		recent.data.card.forEach((card) => {
			const url = getImageUrl(card.item);
			if (url) imageUrls.push(url);
		});
	}

	return {
		recent,
		reviews: [reviews],
		imageUrls
	};
}; 