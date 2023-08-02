<script lang="ts">
	import { goto } from '$app/navigation';

	import TestComponent from '$lib/components/TestComponent.svelte';
	import { BtnVariant, Button } from 'svelte-components';
	import { stores } from 'svelte-library';
	import type { PageData } from './$types';
	const { sparkStore, deviceStore } = stores;

	export let data: PageData;
</script>

<div class="p-3">
	<h3>update src/routes/+page.svelte file</h3>
	<p>{JSON.stringify(data.dummyData)}</p>
	<TestComponent />
	<p>Spark Store</p>
	<p>{JSON.stringify($sparkStore)}</p>
	<p>Device Store</p>
	<p class="text-red-500">{JSON.stringify($deviceStore)}</p>
	<Button variant={BtnVariant.Outlined} class="bg-red" on:click={() => goto('/path/nested')}
		>Goto /nested</Button
	>
</div>
