  import vercel from '@sveltejs/adapter-vercel'
// import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
 
	kit: {
		adapter: vercel(),
	 
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
            ssr: {
                noExternal: dev ? [] : ['@supabase/supabase-js']
            },
        }
	},
	transform: {
		"^.+\\.svelte$": ["svelte-jester", { "preprocess": true }]
	  }
};

export default config;
