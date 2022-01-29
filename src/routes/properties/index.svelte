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

  //  import CardProperties from '../../Components/cardProperties.svelte';
 import { Swiper, SwiperSlide } from 'swiper/svelte';
 import SwiperCore, {
  Lazy ,Navigation
} from 'swiper';
import 'swiper/css';

import "swiper/css/lazy"
import "swiper/css/pagination"
import "swiper/css/navigation"
 
  export let data;
     if(data)
  SwiperCore.use([Lazy ,Navigation]);
</script>
 
 
   <Swiper style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff;   height: 30rem;width:100%"   lazy="{true}"  navigation="{true}" class="mySwiper">
{#each data as data_offer}
 
  <SwiperSlide>
          <!-- Required swiper-lazy class and image source specified in data-src attribute -->
          <img  data-src={data_offer.image} class="swiper-lazy" />
          <!-- Preloader image -->
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
 <!-- <CardProperties {data_offer}/>   -->
 
{/each}

   </Swiper>
 

<style>
  

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #000;
}

.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>