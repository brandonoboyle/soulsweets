import { createClient } from '@prismicio/client';
import { getImageUrl } from '$lib/utils/imagePreloader';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const delivery = await client.getSingle('delivery_insert');

	// Extract image URL for preloading
	const imageUrl = getImageUrl(delivery.data.delivery_insert);

	return {
		delivery,
		imageUrl
	};
}; 