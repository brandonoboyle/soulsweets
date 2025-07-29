import { createClient } from '@prismicio/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const client = createClient('soulsweets');
	const brownie = await client.getSingle('brownie_insert');

	return {
		brownie
	};
};
