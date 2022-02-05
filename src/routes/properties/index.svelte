<script context="module">
  import supabase from "$lib/db";

  export async function load({ url }) {
     
    const { data, error } = await supabase.from("properties").select();

    const loadedProperty = data.map((data, index) => {
      return {
        type_desc: data.type_desc,
        image: `https://nphykmdyafqximjeemqm.supabase.in/storage/v1/object/public/images/${index + 1}.jpeg`,
        offer_title: data.offer_title,
        currency: data.currency,
        id: index + 1,
        area_size: data.area_size,
        price: data.price,
        bedrooms: data.bedrooms,
        storeys: data.storeys,
        floor: data.floor,
        location_country: data.location_country,
        location_city: data.location_city,
        location_hood: data.location_hood,
      };
    });

    if (error) throw new Error(error.message);

    return { props: { data: loadedProperty } };
  }
</script>

<svelte:head>
	<title>Оферти</title>
</svelte:head>
<script>

   import CardProperties from '../../Components/cardProperties.svelte';
 

 
  export let data;
   
</script>

<div class="grid grid-cols-3 gap-8 pt-10">
 
{#each data as data_offer}
 
  
 <CardProperties {data_offer}/>  
 
{/each}

 
</div>
<style>
 
  
 
</style>