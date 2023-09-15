<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div>
<h1>
    Account
</h1>
<p>{JSON.stringify(data.session)}</p>
<form action="/auth/signout" method="post">
	<button class="btn btn-secondary">Log Out</button>
</form>
</div>