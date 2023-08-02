import { useFetch } from 'svelte-library';
import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
	const res = await useFetch(
		'/path/api/mocks/mock-api-path',
		{ headers: { 'content-type': '' } },
		fetch
	);

	return { dummyData: res.data };
}
