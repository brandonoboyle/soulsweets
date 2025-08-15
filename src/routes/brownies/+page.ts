import { createClient } from '@prismicio/client';
import { getImageUrl } from '$lib/utils/imagePreloader';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const brownie = await client.getSingle('brownie_insert');

	// Extract image URL for preloading
	const imageUrl = getImageUrl(brownie.data.brownie_insert);

	return {
		brownie,
		imageUrl
	};
};
