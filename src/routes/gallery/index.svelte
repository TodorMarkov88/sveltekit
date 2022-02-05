<script context="module">
  import supabase from "$lib/db";

  export async function load({ url }) {
    const { data, error } = await supabase.from("properties").select();

    const loadedimgs = data.map((data, index) => {
      return {
        type_desc: data.type_desc,
        image: `https://nphykmdyafqximjeemqm.supabase.in/storage/v1/object/public/images/${
          index + 1
        }.jpeg`,
      
        id: index + 1,
       
      };
    });

    if (error) throw new Error(error.message);

    return { props: { data: loadedimgs } };
  }
</script>

<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperCore, { Lazy, Navigation } from "swiper";
  import "swiper/css";

  import "swiper/css/lazy";
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  export let data;
  if (data) SwiperCore.use([Lazy, Navigation]);
</script>

<Swiper
  style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff;   height: 30rem;width:100%"
  lazy={true}
  navigation={true}
  class="mySwiper"
>
  {#each data as data_offer}
    <SwiperSlide>
      <!-- Required swiper-lazy class and image source specified in data-src attribute -->
      <div data-background={data_offer.image} class="swiper-lazy" />
      <!-- Preloader image -->
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
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

  .swiper-lazy {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
</style>
