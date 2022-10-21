<script>
	// @ts-nocheck
	import DateComponent from 'components/DateComponent.svelte';
	import HeroCategory from 'components/HeroCategory.svelte';
	import HeroExcerpt from 'components/HeroExcerpt.svelte';
	import HeroHeader from 'components/HeroHeader.svelte';
	import HeroImage from 'components/HeroImage.svelte';
	import HeroTitle from 'components/PostTitle.svelte';

	export let thumb = '';
	export let slug = '';
	export let excerpt = '';
	export let date;
	export let title;
</script>

<div class="mb-8">
	<a href={`/blog/${slug}`} class="cursor-pointer">
		<div class="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
			<HeroImage src={thumb} />
			<HeroHeader>
				<HeroCategory>Super User Guide</HeroCategory>
				<div class="border-b-2 border-primary-500 w-8" />
				<div class="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
					<DateComponent dateString={date} />
				</div>
				<HeroTitle>
					{title}
				</HeroTitle>
				<HeroExcerpt>
					<p>
						{excerpt}
					</p>
				</HeroExcerpt>
			</HeroHeader>
		</div>
	</a>
</div>
