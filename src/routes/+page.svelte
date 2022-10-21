<script>
	import Container from 'components/Container.svelte';
	import GridItem from 'components/GridItem.svelte';
	import HeroPost from 'components/HeroPost.svelte';
	import PostGrid from 'components/PostGrid.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let posts = data?.allPosts;
	let heroPost = posts[0];
	
</script>

<!-- main content container -->
<Container>
	<!-- Hero post / Featured Post -->
	<HeroPost
		title={heroPost.title}
		date={heroPost.date}
		excerpt={heroPost.excerpt}
		thumb={heroPost.coverImage.url}
		slug={heroPost.slug}
	/>
	<PostGrid>
		{#each posts as post}
			<GridItem title={post.title} featuredImg={post.coverImage.url} slug={post.slug} />
		{/each}
	</PostGrid>
</Container>
