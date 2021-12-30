<script context="module">
	import supabase from '$lib/db' 


export async function load({page}) {
      const id=page.params.id
  const { data, error } = await supabase
    .from('properties')
    .select()
    .eq('id',id)
const loadedPropery = data.map((data, index) => {
			return {
				type_desc: data.type_desc,
				image: `https://nphykmdyafqximjeemqm.supabase.in/storage/v1/object/public/images/${id}.jpeg`
			};
		});


  if (error) throw new Error(error.message)
  
  return {props:{data:loadedPropery}}
}
export const prerender = true;
</script>

<script>
export let data
// const imgUrl=`https://nphykmdyafqximjeemqm.supabase.in/storage/v1/object/public/images/${ data[0].id}.jpeg`
console.log(data[0])
</script>

<!-- 
<svelte:head>
	<title>{data[0].type_desc}</title>
</svelte:head> -->



<img src={data[0].image} style='width:300px;height:300px;' alt={data[0].type_desc}/>

<!-- <div>
{data[0].location_city}  
</div>

<div>
{data[0].id}  
</div> -->