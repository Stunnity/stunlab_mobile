<template>
	<footer ref="nav" id="nav" v-if="true">
		<router-link to="/home">
			<img class="icon" src="../assets/icons/svgs/home.svg" alt="home" />
		</router-link>
		<router-link to="/search">
			<img class="icon" src="../assets/icons/svgs/search.svg" alt="search" />
		</router-link>
		<router-link to="/categories">
			<img class="icon" src="../assets/icons/svgs/category.png" alt="category" />
		</router-link>
		<router-link to="/shelf">
			<img class="icon" src="../assets/icons/svgs/book.png" alt="shelf" />
		</router-link>
		<router-link to="/profile">
			<img class="icon" src="../assets/icons/icons8_person_125px.png" alt="home" />
		</router-link>
	</footer>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "App",
		data() {
			return {
				visible: true
			};
		},
		computed: {
			...mapGetters("login", ["getLogginPage"])
		}
	};
</script>

<style lang="scss" scoped>
	@import "../assets/scss/main.scss";

	#nav {
		// padding: 30px;
		position: fixed;
		bottom: 0;
		margin-left: auto;
		margin-right: auto;
		width: $screen-size;
		// max-width: 450px;
		border-top: 0.1px solid $lightgrayish;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0.3rem 1rem;
		background: white;
		z-index: 10;
		box-sizing: border-box;
		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
		.icon {
			width: 1.5rem;
			// padding: 10%;
		}
		.cls-1 {
			fill: #fff;
			stroke: #ec5252;
			stroke-width: 6px;
		}

		.cls-2 {
			stroke: none;
		}

		.cls-3 {
			fill: none;
		}
	}
</style>