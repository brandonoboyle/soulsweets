import { createClient } from '@prismicio/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const delivery = await client.getSingle('delivery_insert');

	return {
		delivery
	};
}; 