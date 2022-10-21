<script>
	// @ts-nocheck

	import RitchTextRenderer from 'components/RitchTextRenderer.svelte';
	import DateComponent from 'components/DateComponent.svelte';
	import Title from 'components/Title.svelte';
	import Image from 'components/Image.svelte';
	import Excerpt from 'components/Excerpt.svelte';
	import PostHeader from 'components/PostHeader.svelte';
	import Comments from 'components/Comments.svelte';
	// @ts-nocheck
	/**
	 * @type {{ coverImg: { url: any; }; }}
	 */
	export let post;
</script>

<div class="px-2 font-serif">
	<!-- { JSON.stringify(post.post.coverImage) } -->

	<Title>{post.post.title}</Title>

	<!-- svelte-ignore a11y-missing-attribute -->
	<Image src={post.post.coverImage.url} />

	<Excerpt>
		{post.post.excerpt}
	</Excerpt>
	<PostHeader>
		<DateComponent dateString={post.post.date} />
	</PostHeader>

	<RitchTextRenderer json={post.post.content.json} />
	<Comments>Comments</Comments>
</div>
