<script>
	import Logo from 'components/Logo.svelte';
	import Menu from 'components/Menu.svelte';
	import Nav from 'components/Nav.svelte';
	import NavItem from 'components/NavItem.svelte';
	import NavBar from 'components/NavBar.svelte';
</script>

<header data-fetch-key="1" class="relative w-full mx-auto bg-white px-8">
	<meta name="msvalidate.01" content="CEC0A17FDEA4551FECB7D97C702E7E3E" />
	<NavBar>
		<!-- Logo -->
		<Logo />
		<!-- Menu -->
		<Menu />
        <!-- Navigation -->
		<Nav>
			<NavItem />
			<NavItem item="Blog" path="/blog" />
		</Nav>
	</NavBar>
</header>
