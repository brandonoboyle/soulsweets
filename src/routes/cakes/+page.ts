import { createClient } from '@prismicio/client';
import { getImageUrl } from '$lib/utils/imagePreloader';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	
	const [cakeBase, cakeFlavours, cakeToppings] = await Promise.all([
		client.getSingle('cake_base'),
		client.getSingle('cake_flavours'),
		client.getSingle('cake_toppings')
	]);

	// Extract image URLs for preloading
	const imageUrls: string[] = [];
	const baseImageUrl = getImageUrl(cakeBase.data.cake_base);
	const flavoursImageUrl = getImageUrl(cakeFlavours.data.cake_flavours);
	const toppingsImageUrl = getImageUrl(cakeToppings.data.cake_toppings);
	
	if (baseImageUrl) imageUrls.push(baseImageUrl);
	if (flavoursImageUrl) imageUrls.push(flavoursImageUrl);
	if (toppingsImageUrl) imageUrls.push(toppingsImageUrl);

	return {
		cakeBase,
		cakeFlavours,
		cakeToppings,
		imageUrls
	};
};
