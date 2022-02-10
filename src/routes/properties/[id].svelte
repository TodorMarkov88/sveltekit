<script context="module">
  import supabase from "$lib/db";

  export async function load({ params }) {
    const id =  params.id;
   console.log(params)
    const { data, error } = await supabase
      .from("properties")
      .select()
      .eq("id", id);
    const loadedProperty = data.map((data, index) => {
      return {
        type_desc: data.type_desc,
        image: `https://nphykmdyafqximjeemqm.supabase.in/storage/v1/object/public/images/${id}.jpeg`,
        offer_title: data.offer_title,
        currency: data.currency,
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

    return { props: { data: loadedProperty },  };
  }
  	export const prerender = true;
</script>

<script>
  export let data;

  const options = [
    { name: "USD" },
    { name: "BGN" },
    { name: "EUR" },
    { name: "GBP" },
  ];

  let selectedCurrency = {
    name: data[0].currency,
    price: data[0].price,
    area_size: data[0].area_size,
  };

  function selectchangehandler(options, propname, index) {
    selectedCurrency[propname] = options[index];

    selectedCurrency.name = options[propname].name;
  }

  function calcCurrency(curr) {
    if (curr.name === "EUR") {
      return (
        "€" +
        parseInt(curr.price)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      );
    } else if (curr.name === "USD") {
      return (
        "$" +
        parseInt(curr.price * 1.13)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      );
    } else if (curr.name === "GBP") {
      return (
        "£" +
        parseInt(curr.price * 0.84)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      );
    } else {
      return (
        parseInt(curr.price * 1.95)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " лв."
      );
    }
  }

  $: setCalcCurrency = calcCurrency(selectedCurrency);
  $: setAreaPrice = areaPrice(selectedCurrency);

  function areaPrice(curr) {
    let areaSquere = curr.price / curr.area_size;

    if (curr.name === "EUR") {
      return (
        parseInt(areaSquere)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €"
      );
    } else if (curr.name === "USD") {
      return (
        parseInt(areaSquere * 1.13)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $"
      );
    } else if (curr.name === "GBP") {
      return (
        parseInt(areaSquere * 0.84)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " £"
      );
    } else {
      return (
        parseInt(areaSquere * 1.95)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " лв."
      );
    }
  }
</script>

<svelte:head>
  <title>{data[0].type_desc}</title>
</svelte:head>

<h1 class="text-4xl my-4 font-bold">{data[0].offer_title}</h1>

<div class="flex justify-center">
  <span class="text-neutral-500 mx-2">{data[0].location_country}</span>/
  <span class="text-neutral-500 mx-2">{data[0].location_city}</span> /
  <span class="text-neutral-500 mx-2">{data[0].location_hood}</span>
</div>
<div class="grid grid-cols-3  mt-4">
  <div class="col-span-2 ">
    <img
      class="fade-in h-48 w-full object-cover md:h-full md:w-full"
      src={data[0].image}
      alt={data[0].type_desc}
    />
  </div>
  <div class="bg-white pt-4 px-5">
    <div class=" flex flex-row">
      <div class="font-semibold mr-2">Цена:</div>

      <select
        class="px-1 border-solid border-2 border-gray-600 rounded-md   text-sm"
        on:change={(e) => selectchangehandler(options, e.target.value)}
      >
        {#each options as option, index}
          <option
            class="leading-none text-left"
            value={index}
            selected={option.name === selectedCurrency.name}
            >{option.name}</option
          >
        {/each}
      </select>
    </div>
    <div class="text-3xl my-3">
      {setCalcCurrency} <span class="text-base"> (без ддс)</span>
    </div>
    <div class="text-lg  mb-1">{setAreaPrice}/м² (без ддс)</div>
    <div class="text-sm font-bold">Без комисиона от купувача</div>

    <div class="grid grid-cols-3   mt-5  ">
      <div class="col-span-1 text-neutral-500">Тип:</div>
      <div class="col-span-2">{data[0].type_desc}</div>

      <hr class="text-zinc-900 w-full col-span-3  border-t-2 my-2 " />
      <div class="col-span-1 text-neutral-500">Площ:</div>
      <div class="col-span-2">{data[0].area_size} м²</div>
      <hr class="text-zinc-900 w-full col-span-3  border-t-2 my-2 " />
      <div class="col-span-1 text-neutral-500">Етажност:</div>
      <div class="col-span-2">{data[0].storeys}</div>
      <hr class="text-zinc-900 w-full col-span-3  border-t-2 my-2 " />
      <div class="col-span-1 text-neutral-500">Етаж:</div>
      <div class="col-span-2">{data[0].floor}</div>
      <hr class="text-zinc-900 w-full col-span-3  border-t-2 my-2 " />
      <div class="col-span-1 text-neutral-500">Спални:</div>
      <div class="col-span-2">{data[0].bedrooms}</div>
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
