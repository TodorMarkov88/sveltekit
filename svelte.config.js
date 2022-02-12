  import vercel from '@sveltejs/adapter-vercel'
  import { imagetools } from 'vite-imagetools';
//   import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
 
	kit: {
		adapter: vercel(),
		vite: {
			define: {
			  'process.env': process.env,
			},
			plugins: [imagetools({ force: true })],
		  },
		// hydrate the <div id="svelte"> element in src/app.html
		//    target: '#svelte',
	 
	},
	transform: {
		"^.+\\.svelte$": ["svelte-jester", { "preprocess": true }]
	  }
};

export default config;
