<template>
	<div ref="nav" id="nav" v-if="true">
		<router-link to="/home">
			<svg @click="visible=!visible" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
				<path
					v-if="visible"
					fill="#ec5252"
					stroke-width="2px"
					stroke-linejoin="round"
					stroke-linecap="round"
					stroke="#ec5252"
					id="XMLID_219_"
					d="m30.854,16.548c-0.331,0.882 -1.151,1.452 -2.09,1.452l-0.764,0l0,11c0,0.552 -0.448,1 -1,1l-6,0l0,-7c0,-2.757 -2.243,-5 -5,-5s-5,2.243 -5,5l0,7l-6,0c-0.552,0 -1,-0.448 -1,-1l0,-11l-0.765,0c-0.939,0 -1.759,-0.569 -2.09,-1.451c-0.331,-0.882 -0.088,-1.852 0.62,-2.47l11.679,-11.06c1.434,-1.357 3.679,-1.357 5.112,0l11.707,11.086c0.678,0.591 0.922,1.561 0.591,2.443z"
				/>
				<path
					v-else
					fill="none"
					stroke-width="2px"
					stroke-linejoin="round"
					stroke-linecap="round"
					stroke="#ec5252"
					id="XMLID_219_"
					d="m30.854,16.548c-0.331,0.882 -1.151,1.452 -2.09,1.452l-0.764,0l0,11c0,0.552 -0.448,1 -1,1l-6,0l0,-7c0,-2.757 -2.243,-5 -5,-5s-5,2.243 -5,5l0,7l-6,0c-0.552,0 -1,-0.448 -1,-1l0,-11l-0.765,0c-0.939,0 -1.759,-0.569 -2.09,-1.451c-0.331,-0.882 -0.088,-1.852 0.62,-2.47l11.679,-11.06c1.434,-1.357 3.679,-1.357 5.112,0l11.707,11.086c0.678,0.591 0.922,1.561 0.591,2.443z"
				/>
			</svg>
		</router-link>
		<router-link to="/about">
			<img class="icon" src="../assets/icons/icons8_categorize_125px.png" alt />
		</router-link>
		<router-link to="/about">
			<img class="icon" src="../assets/icons/icons8_book_125px.png" alt="home" />
		</router-link>
		<router-link to="/about">
			<img class="icon" src="../assets/icons/icons8_person_125px.png" alt="home" />
		</router-link>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "App",
		data() {
			return {
                visible:true
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
		max-width: 450px;
		box-shadow: 0px -5px 10px #f2f2f2;
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
			width: 2rem;
			// padding: 10%;
		}
	}
</style>