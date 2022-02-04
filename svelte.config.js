import vercel from '@sveltejs/adapter-vercel'
 

/** @type {import('@sveltejs/kit').Config} */
const config = {
 
	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	transform: {
		"^.+\\.svelte$": ["svelte-jester", { "preprocess": true }]
	  }
};

export default config;
