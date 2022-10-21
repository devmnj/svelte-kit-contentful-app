<script>
// @ts-nocheck
	import Container from 'components/Container.svelte';
	import Post from 'components/Post.svelte';
	import PostWrapper from 'components/PostWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Container>
	<PostWrapper>
		<Post post={data} />
	</PostWrapper>
</Container>
