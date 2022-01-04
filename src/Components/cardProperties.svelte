
<script>

export let data_offer
 
</script>


 

<a  href={`/properties/${data_offer.id}`} class="hover:no-underline overflow-hidden 	list-none flex flex-col h-full   bg-gray-200 text-gray-900 text-center rounded-md shadow-sm hover:shadow-md   items-center">

<div class='overflow-hidden w-full  h-48'>
<img src={data_offer.image} alt={data_offer.type_desc}  class=" w-full object-cover    h-48">
</div>
<div class='content-wrapper m-4 flex  flex-col justify-between h-auto w-full'>
 <h2 class='uppercase font-bold'> {data_offer.id}. {data_offer.type_desc}  </h2>

<div class="flex justify-center text-base">

  <span class="text-neutral-500 mr-1">гр. {data_offer.location_city},</span>
  <span class="text-neutral-500 mr-1">кв. {data_offer.location_hood},</span>
    <span class="text-neutral-500  ">{data_offer.location_country}</span>
</div>

<div class='text-lg font-bold text-gray-700'>
Цена: € {data_offer.price} <span class="text-sm"> (без ддс)</span>
</div> 

</div>
</a>
 
<style>
img {
  transform:scale(1,1);
  transition:.25s ease;
}
a:hover img {
transform:scale(1.075,1.075);
  transition:.25s ease;
}
</style>