<script lang="ts">
	import { turso } from '$lib/db';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="">
	<table class="table">
		<thead>
			<tr>
				<th>Hotel</th>
                <th>Year Booked</th>
                <th>Month Booked</th>
                <th>Weekend Nights Booked</th>
                <th>Weekeday Nights Booked</th>
                <th>No. of Adults</th>
                <th>No. of Children</th>
                <th>No. of Babies</th>
			</tr>
		</thead>
		<tbody>
			{#each data.rows as row}
				<tr>
					<th><input type="text" value={row[0] as string} class="input"/></th>
					<th><input type="text" value={row[1] as string} class="input"/></th>
					<th><input type="text" value={row[2] as string} class="input"/></th>
					<th><input type="text" value={row[3] as string} class="input"/></th>
					<th><input type="text" value={row[4] as string} class="input"/></th>
					<th><input type="text" value={row[5] as string} class="input"/></th>
					<th><input type="text" value={row[6] as string} class="input"/></th>
					<th><input type="text" value={row[7] as string} class="input"/></th>
					<th class="flex flex-row">
						<button class="btn">Update</button>
						<button class="btn">Delete</button>
					</th>
                </tr>
			{/each}
		</tbody>
	</table>
</div>