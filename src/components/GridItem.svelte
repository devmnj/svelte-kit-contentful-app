<script>
	import CardImage from './CardImage.svelte';
	import DateComponent from './DateComponent.svelte';
	import PostSubtitle from './PostSubtitle.svelte';
	import PostTitle from './PostTitle.svelte';
	export let slug = 'sample-slug';
	export let featuredImg =
		'https://res.cloudinary.com/practicaldev/image/fetch/s--av-xJTRg--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://paper-attachments.dropbox.com/s_00AF37BD6AC8393E927CA91EEFB0A63999A7CA54EDBC5EFA45354BC6B94E1BB9_1613649658449_Prisma_x_Nuxt.png';
	export let pubDate = '12/Aug/2022';
	export let title = 'Some description about the post.';
</script>

<div class="flex-col  min-h-2 group mb-5 md:mb-0">
	<a href={`/blog/${slug}`}>
		<CardImage src={featuredImg} />
		<div class="bg-green-200 p-8 border-2 border-t-0 rounded-b-lg">
			<PostSubtitle>
				<slot name="subtitle" />
			</PostSubtitle>

			<div class="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
				<div class="border-b-2 border-primary-500 w-8" />
				<div class="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
					<DateComponent dateString={pubDate} />
				</div>
				<PostTitle>
					<p>{title}</p>
				</PostTitle>
			</div>
		</div></a
	>
</div>
