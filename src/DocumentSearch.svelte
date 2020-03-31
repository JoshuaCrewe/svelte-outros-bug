<script>
    import Download from './Download.svelte';

    let fetching = false;
    let noResults = false;
    import { writable } from 'svelte/store';
    let results = writable([]);
	
	    function handleTyping() {
        noResults = false;
        results.set([]);
    }


    function handleSubmit(event) {
        fetching = true;
			fetch('https://jsonplaceholder.typicode.com/posts')
	  	.then(response => response.json())
	  	.then(json => {
				results.set(json);
			})
    }

</script>

<form class="search" on:submit|preventDefault={handleSubmit}>
    <input on:input={handleTyping} class="search-input input" type="search" name="search" />

    <button class:fetching class="button" type="submit">
        Search
    </button>
</form>

{#each $results as result (result.id)}
	<Download />
{/each}

