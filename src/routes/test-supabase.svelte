<script>
	import supabase from '$lib/db' 


async function getData() {
  const { data, error } = await supabase
    .from('properties')
    .select()
  if (error) throw new Error(error.message)
  
  return data
}
</script>

<svelte:head>
	<title>TEST</title>
</svelte:head>






 

<section>

<h1>My favorite games</h1>
{#await getData()}
  <p>Fetching data...</p>
{:then data}
  {#each data as properties}
    <li>{properties.name}</li>
  {/each}
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}
</section>