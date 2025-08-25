import { createClient } from '@prismicio/client';
import { getImageUrl } from '$lib/utils/imagePreloader';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const [recent, reviews, displayCake, displayBrownie, displayCupcake] = await Promise.all([
		client.getSingle('recent'),
		client.getSingle('review'),
		client.getSingle('display_cake'),
		client.getSingle('display_brownie'),
		client.getSingle('display_cupcake')
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

	// Get URL from DisplayCake
	const displayCakeImageUrl = getImageUrl(displayCake.data.display_cake);
	if (displayCakeImageUrl) imageUrls.push(displayCakeImageUrl);

	// Get URL from DisplayBrownie
	const displayBrownieImageUrl = getImageUrl(displayBrownie.data.display_brownie);
	if (displayBrownieImageUrl) imageUrls.push(displayBrownieImageUrl);

	// Get URL from DisplayCupcake

	const displayCupcakeImageUrl = getImageUrl(displayCupcake.data.display_cupcake);
	if (displayCupcakeImageUrl) imageUrls.push(displayCupcakeImageUrl);

	return {
		recent,
		reviews: [reviews],
		displayCake,
		displayBrownie,
		displayCupcake,
		imageUrls
	};
};
