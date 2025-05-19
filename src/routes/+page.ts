import { createClient } from '@prismicio/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const recent = await client.getSingle('recent');

	return {
		recent
	};
}; 