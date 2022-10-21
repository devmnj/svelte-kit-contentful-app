<script>
/**
	 * @type {import("@contentful/rich-text-types").Document}
	 */
 export let json;
	import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

</script>
{@html documentToHtmlString(json)}