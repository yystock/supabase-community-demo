<script lang="ts">
//   import Seo from '$lib/components/seo.svelte';
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'
	import type { SubmitFunction } from '@sveltejs/kit'

	let isSubmitting = false
    export let data;

	export let form
    const handleGoogleSignIn = async () => {
        await data.supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                access_type: "offline",
                prompt: "consent",
                },
            },
        });
    }

	const handleSubmit: SubmitFunction = () => {
		isSubmitting = true
		// return async ({ update }) => {
		// 	update()
		// 	isSubmitting = false
		// }
      
	}

  // SEO Parameters
  const title = 'Login | AskMeAnything';
  const metadescription =
    'AskMeAnything is a platform where you can ask questions and get answers from the community.';
</script>

<!-- <Seo {title} {metadescription} /> -->


<main class="card w-4/6 mx-auto">
    <div class="card-body items-center text-center">
        <h2 class="text-2xl font-semibold">Login</h2>
        <p>Please Login with your Github Account</p>
        <form method="POST" use:enhance>
        </form>
       
        <button on:click={handleGoogleSignIn} data-test-id="github-login-btn" class="btn btn-primary"> 
            <img width="20" height="20" src="/google.svg" alt="Github Icon" />Login with Github
        </button>
       
    </div>
</main>
