<script>
   import supabase from "$lib/db";
   import Auth from '../../Components/Auth.svelte'
</script>



<div class='container mx-auto my-6 max-w-lg'>
<Auth/>
<slot></slot>
</div>