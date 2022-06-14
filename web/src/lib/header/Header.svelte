<script lang="ts">
	export let links: Array<{label: string; link: string}>;

	import Email from 'svelte-material-icons/Mail.svelte';
	import Phone from 'svelte-material-icons/Phone.svelte';
</script>

<nav class="nav">
	<img src="/pronaikon-logo.svg" alt="">
	<div class="nav-container">
		<div class="nav-container-socials">
			<a href="mailto:pronaikon@gmail.com" class="nav-container-socials-link">
				<img src="/mail.svg" alt="mail">
				<span class="nav-container-socials-link-text">pronaikon@gmail.com</span>
			</a>
			<a href="tel:+385917777227" class="nav-container-socials-link">
				<img src="/phone.svg" alt="phone">
				<span class="nav-container-socials-link-text">+385 - 91 - 777 - 7227</span>
			</a>
		</div>
		<div class="nav-container-links">
			{#each links as link}
				<a class="nav-container-links-link" href={link.link}>{link.label}</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	.nav {
		display: flex;
		justify-content: space-between;
		height: 120px;
		padding: 10px;
	}

	.nav-container {
		display: flex;
		flex-direction: column;
	}

	.nav-container-socials {
		display: flex;
		height: 50%;
	}

	.nav-container-socials-link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #FFFFFF;
		margin: 0 16px;
		transition: .35s;
	}

	.nav-container-socials-link:hover {
		color: #FCD376;
	}

	.nav-container-socials-link-text {
		margin-left: 8px;
	}

	.nav-container-links {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 50%;
	}

	.nav-container-links-link {
		color: #FFFFFF;
		text-decoration: none;
		transition: .35s;
	}

	.nav-container-links-link:hover {
		color: #FCD376;
	}

	.nav-container-links-link {
		margin: 0 16px;
	}
</style>