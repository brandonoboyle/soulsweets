import { createClient } from '@prismicio/client';
import { getImageUrl } from '$lib/utils/imagePreloader';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const cupcake = await client.getSingle('cupcake_insert');

	// Extract image URL for preloading
	const imageUrl = getImageUrl(cupcake.data.cupcake_insert);

	return {
		cupcake,
		imageUrl
	};
};
