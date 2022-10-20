<script>
	import Container from 'components/Container.svelte';
	import PostGrid from 'components/PostGrid.svelte';

	 /** @type {import('./$types').PageData} */
     export let data;
</script>

<!-- main content container -->
<Container>
    {JSON.stringify(data.allPosts)}
	<!-- Post Grid ,where post tiles will be display-->
	<PostGrid />
</Container>
