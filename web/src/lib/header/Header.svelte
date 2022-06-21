<script lang="ts">
	export let links: Array<{label: string; link: string}>;

	let menu = false;

	function toggleMenu() {
		if (menu === false) {
			menu = true;
		} else {
			menu = false;
		}
	}

	function navigate(event, link) {
		event.preventDefault();
		document.querySelector(link.link).scrollIntoView({behavior: 'smooth'});
		menu = false;
	}
</script>

<nav class="nav">
	<a href="/" class="nav-logo ">
		<img src="/pronaikon-no-text.svg" class="nav-logo-image" alt="logo">
	</a>
	<div class="nav-container desktop">
		<div class="nav-container-socials">
			<a href="mailto:maloca.luka@gmail.com" class="nav-container-socials-link">
				<img src="/mail.svg" alt="mail">
				<span class="nav-container-socials-link-text">maloca.luka@gmail.com</span>
			</a>
			<a href="tel:+385989373133" class="nav-container-socials-link">
				<img src="/phone.svg" alt="phone">
				<span class="nav-container-socials-link-text">098 937 3133</span>
			</a>
		</div>
		<div class="nav-container-links">
			{#each links as link}
				<a class="nav-container-links-link" href={link.link} on:click={(event) => navigate(event, link)}>{link.label}</a>
			{/each}
		</div>
	</div>
	<div class="nav-container mobile">
		<button class="menu-trigger" on:click={toggleMenu}>
			{#if menu}
				<img src="/close.svg" alt="close" width="30">
			{:else}
				<img src="/menu.svg" alt="menu" width="30">
			{/if}
		</button>
	</div>
</nav>

{#if menu}
	<nav class="menu-nav" class:active={menu}>
		{#each links as link}
			<a class="menu-nav-link" sveltekit:prefetch href={link.link} on:click={(event) => navigate(event, link)}>{link.label}</a>
		{/each}
	</nav>
{/if}

<style>
	.nav {
		z-index: 2;
		position: fixed;
		top: 0;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 120px;
		padding: 10px 10px 10px 20px;
		background-color: black;
	}

	.nav-logo {
		height: 100%;
	}

	.nav-logo-image {
		height: 100%;
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

	.menu-trigger {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		border: none;
		outline: none;
		width: 60px;
		height: 60px;
		padding: 0;
	}

	.menu-nav {
		z-index: 3;
		position: fixed;
		top: 80px;
		right: 0;
		width: 300px;
		height: 100%;
		display: flex;
		border-bottom-left-radius: 16px;
		flex-direction: column;
		transform: translateX(100%);
		background-color: #000000;
		transition: .25s;
	}

	.menu-nav.active {
		box-shadow: 0 3px 9px rgba(0,0,0,.2);
		transform: translateX(0);
	}

	.menu-nav-link {
		font-size: 20px;
		position: relative;
		display: inline-block;
		text-decoration: none;
		padding: 12px 16px;
		text-align: right;
		text-transform: uppercase;
		color: rgba(255,255,255,.7);
		transition: .25s;
	}

	@media (max-width: 600px) {
		.nav {
			height: 80px;
		}
		.nav-logo {
			height: 60px;
		}
	}
</style>