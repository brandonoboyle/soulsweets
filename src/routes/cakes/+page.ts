import { createClient } from '@prismicio/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	
	const [cakeBase, cakeFlavours, cakeToppings] = await Promise.all([
		client.getSingle('cake_base'),
		client.getSingle('cake_flavours'),
		client.getSingle('cake_toppings')
	]);

	return {
		cakeBase,
		cakeFlavours,
		cakeToppings
	};
};
