import { sequence } from '@sveltejs/kit/hooks';
import { handleDeviecDetector } from 'sveltekit-device-detector';
import { hooks } from 'svelte-library';

const { handleFetch, handleServerError, handler } = hooks;

const deviceDetector = handleDeviecDetector({});

export { handleFetch };

export const handle = sequence(deviceDetector, handler);

export const handleError: HandleServerError = handleServerError;
