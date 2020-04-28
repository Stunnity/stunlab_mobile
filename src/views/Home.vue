<template>
	<div class="home">
		<div class="bg-image">
			<div class="search">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
						stroke="#C4C4C4"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M21 21L16.65 16.65"
						stroke="#C4C4C4"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<p>Search book</p>
			</div>
		</div>
		<NewArrivals />
    
	<v-row>
		<div class="ctg-lst">
			<div class="hd">
				<p>Categories</p>
			</div>
			<div class="cgt-blocks">
				
			</div>
		</div>
	</v-row>
	</div>
</template>
<script>
import NewArrivals from '@/components/NewArrivals'

	export default {
		name: "Home",
		components: {
            NewArrivals
        },
		data() {
			return {
				visible: true,
				
			};
		},
		methods: {
		}
	};

</script>
<style lang="scss" scoped>
	@import "../assets/scss/main.scss";

	.home {
		.bg-image {
			width: 100%;
			height: 15rem;
			background-image: url("../assets/images/lib_image.png");
			background-size: cover;
            position: relative;
            z-index: 0;

			.search {
				background: white;
				width: 70%;
				display: grid;
				grid-template-columns: 10% 90%;
				box-sizing: border-box;
				border-radius: 0.7rem;
				top: 4rem;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);

				svg {
					padding: 0.5em;
				}

				p {
					margin: 0.6rem;
					font-family: $poppins;
					font-style: normal;
					color: $lightgrayish;
					font-size: 1.1rem;
					text-align: left;
					margin-left: 1.5rem;
				}
			}
		}
	}
</style>