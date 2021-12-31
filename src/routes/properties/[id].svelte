<script context="module">
  import supabase from "$lib/db";

  export async function load({ page }) {
    const id = page.params.id;
    const { data, error } = await supabase
      .from("properties")
      .select()
      .eq("id", id);
    const loadedProperty = data.map((data, index) => {
      return {
        type_desc: data.type_desc,
        image: `https://nphykmdyafqximjeemqm.supabase.in/storage/v1/object/public/images/${id}.jpeg`,
        offer_title: data.offer_title,
           currency: data.currency
      };
    });

    if (error) throw new Error(error.message);

    return { props: { data: loadedProperty } };
  }
  
</script>

<script >
  export let data;
  const options = [
    { name: "Unarmed", maxfight: 3, notes: "-1DT to Prw rolls", point: 0 },
    { name: "Claws & Teeth", maxfight: 3, notes: "", point: 2 },
    { name: "Horrible Claws & Teeth", maxfight: 3, notes: "+1 to Under Attack rolls", point: 3 },
    { name: "Melee Weapon", maxfight: 2, notes: "", point: 1 },
  ];

  let selectguy = {
    name: "Test Man",
    weapon: {
      name: "Horrible Claws & Teeth",
      maxfight: 3,
      notes: "+1 to Under Attack rolls",
      point: 3,
    },
  };

  function selectchangehandler(options, propname, index) {
  	selectguy[propname] =options[index];
  }
</script>

<svelte:head>
  <title>{data[0].type_desc}</title>
</svelte:head>

 
<h1 class="text-4xl my-4 font-bold">{data[0].offer_title}</h1>

<div class="grid grid-cols-3  mt-4">
  <div class="col-span-2 ">
    <img
      class="fade-in h-48 w-full object-cover md:h-full md:w-full"
      src={data[0].image}
      alt={data[0].type_desc}
    />
  </div>
  <div class="bg-white pt-3 pl-3">
    <div class=" flex flex-row">
      <div class="font-semibold">Цена:</div>
 
  <select on:change={(e) => selectchangehandler(options, 'weapon', e.target.value)}>
  {#each options as option, index}
		 
    <option value="{index}" selected={option.name === selectguy.weapon.name}>{option.name}</option>
  {/each}
</select>
    </div>
  </div>
</div>

<style>
  .fade-in {
    animation: fadeInOpacity forwards 0.45s cubic-bezier(0.45, 0, 0.55, 1);
  }
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
   
    }
    100% {
      opacity: 1;
     
    }
  }
</style>
