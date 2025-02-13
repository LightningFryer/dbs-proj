<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	console.log(data.rows);
</script>

<div class="">
	<table class="table">
		<thead>
			<tr>
				<th>Hotel</th>
				<th>No. of Adults</th>
			</tr>
		</thead>
		<tbody>
			{#each data.rows as row}
				<tr>
					<!-- <th><input type="text" value={row[0] as string} class="input"/></th> -->
					<!-- <th><input type="text" value={row[1] as string} class="input"/></th> -->
					<th><p>{row[0] as string}</p></th>
					<th><p>{row[1] as string}</p></th>
					<th class="flex flex-row">
						<button class="btn">Update</button>
						<button class="btn">Delete</button>
					</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
