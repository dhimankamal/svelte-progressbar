import { writable } from 'svelte/store';

export const navigationState = writable<"loading" | "loaded" | null>("loading");