<!-- <script context="module">
	import supabase from '$lib/db' 


export async function load() {
  const { data, error } = await supabase
    .from('properties')
    .select()

  if (error) throw new Error(error.message)
  
  return {props:{data}}
}
</script>


<script>
   export let data;
 
</script>
<svelte:head>
	<title>TEST</title>
</svelte:head>






 

<section>
 
<h1>My favorite games</h1>
{#await data}
  <p>Fetching data...</p>
{:then data}
<ul>
  {#each data as properties}
    <li class='bg-red-500'>{properties.name}</li>
  {/each}
  </ul>
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}
</section> -->