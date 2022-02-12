<script>
  import supabase from "$lib/db";
  import Auth from "../../Components/Auth.svelte";
  import { user } from "../../stores/auth.js";


  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_,session)=>{
      user.set(session?.user)
      if(session?.user){
 
      }
  })
</script>

<div class="container mx-auto my-6 max-w-lg">
  <Auth />
  <slot />
</div>
