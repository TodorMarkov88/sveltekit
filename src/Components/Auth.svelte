<script>
  import supabase from "$lib/db";

  let loading = false;
  let email;
  const handleLogin = async () => {
    try {
      loading = true;
      console.log("email");
      const { error } = await supabase.auth.signIn({ email });

      if (error) throw error;

      alert("Check your email for login link");
    } catch (error) {
      alert(error.error_discription || error.message);
    } finally {
      loading = false;
    }
  };
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log In</h1>
<p class="text-center mt-2">Sign In via magic link with your email</p>

<form on:submit|preventDefault={handleLogin}>
  <div class="flex flex-col text-sm mb-2">
    <label class="font-bold mb-2 text-gray-800" for="email"> Email</label>
    <input
      class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
      name="email"
      type="email"
      placeholder="Your email"
      bind:value={email}
    />
  </div>

  <button class='w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4' type='submit'>Log In</button>
</form>
