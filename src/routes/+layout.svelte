<script>
	import Footer from 'components/Footer.svelte';
	import Head from 'components/Head.svelte';
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen ">
	<Head />
	<slot class="flex-grow" />
	<Footer />
</div>
