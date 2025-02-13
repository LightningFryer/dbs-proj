import { turso } from '$lib/db';
import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await turso.execute('SELECT hotel, adults FROM "hotel-table" LIMIT 10;');
	const rows = res.rows;
	return { rows };
}) satisfies PageLoad;
