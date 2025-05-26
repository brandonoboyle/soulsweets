import { createClient } from '@prismicio/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const [recent, reviews] = await Promise.all([
		client.getSingle('recent'),
		client.getSingle('review')
	]);

	return {
		recent,
		reviews: [reviews]
	};
}; 