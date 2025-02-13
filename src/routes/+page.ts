import { turso } from '$lib/db';
import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await turso.execute('SELECT hotel, arrival_date_year, arrival_date_month, stays_in_weekend_nights, stays_in_week_nights, adults, children, babies FROM hotel_table LIMIT 10;');
	const rows = res.rows;
	return { rows };
}) satisfies PageLoad;
