<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import { localStorage, sessionStorage, stores, firebase } from 'svelte-library';

	/* Types */
	import type { FirebaseOptions } from 'firebase/app';
	import type { SparkData } from 'svelte-library/dist/types/ISparkStore';
	import type { DeviceStore } from 'svelte-library/dist/types/IDeviceStore';
	import { persistedStore } from '../lib/utils';

	const { sparkStore, deviceStore } = stores;
	const { initFirebase } = firebase;

	type PageData = {
		package: {
			name: string;
			version: string;
		};
		firebaseConfig: FirebaseOptions;
		deviceType: DeviceStore;
		sparkStore: SparkData;
	};

	export let data: PageData;

	onMount(async () => {
		localStorage.init(data.package.name, data.package.version);
		await sessionStorage.init(data.package.name, data.package.version);
		sparkStore.set(persistedStore(data.sparkStore));
		deviceStore.set(data.deviceType);
		await initFirebase(data.firebaseConfig);
	});
</script>

<div class="container">
	<slot />
</div>
