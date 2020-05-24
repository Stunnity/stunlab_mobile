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
		<BookSlide :title="'new arrivals'" :data="newArrivals"/>
		<BookSlide :title="'most viewed'" :data="newArrivals"/>
		<Categories/>

	</div>
</template>
<script>
	import BookSlide from "@/components/home/BookSlide";
	import Categories from "@/components/home/Categories";

	export default {
		name: "Home",
		components: {
			BookSlide,
			Categories
		},
		data() {
			return {
				visible: true,
				categories: [
					"programming",
					"science",
					"mathematics",
					"mechanics",
					"languages",
					"literature",
					"ict",
					"humanities"
				],
				newArrivals:[
                    {
                        src:"book1.png",
                        tittle:"Mathematics S3",
						provider:"REB",
						likes:10000,
						dislikes:12
					},
					{
                        src:"book2.png",
                        tittle:"Literature S3",
                        provider:"REB",
						likes:1500,
						dislikes:56
						},
					{
                        src:"book2.png",
                        tittle:"English S4",
						provider:"REB",
						likes:423,
						dislikes:122
					},
					{
                        src:"book1.png",
                        tittle:"Mathematics S1",
						provider:"REB",
						likes:86,
						dislikes:156
					},
					{
                        src:"book1.png",
                        tittle:"Mechanics L1",
						provider:"WDA",
						likes:76,
						dislikes:2
                    },                    {
                        src:"book2.png",
                        tittle:"Physioligy Y2",
						provider:"TTC",
						likes:30,
						dislikes:12
					},
					{
                        src:"book1.png",
                        tittle:"Mathematics S3",
						provider:"REB",
						likes:734,
						dislikes:43
                    },                    {
                        src:"book2.png",
                        tittle:"Mathematics S3",
						provider:"REB",
						likes:5345,
						dislikes:23
                    },                    {
                        src:"book2.png",
                        tittle:"Mathematics S3",
						provider:"REB",
						likes:425,
						dislikes:74
                    },                    {
                        src:"book1.png",
                        tittle:"Mathematics S3",
						provider:"REB",
						likes:85692167,
						dislikes:3499
                    },                    {
                        src:"book1.png",
                        tittle:"Mathematics S3",
						provider:"REB",
						likes:354,
						dislikes:542
                    },
				]
			};
		},
		methods: {}
	};
</script>
<style lang="scss" scoped>

	.home {
			background: #f7f9fa;
			margin: 0;
			overflow: hidden;

		.bg-image {
			width:100%;

			.search {
				background: white;
				width: 80%;
				display: grid;
				grid-template-columns: 10% 90%;

				border-radius: 1.5rem;
				margin:2rem auto;
				box-shadow: 1px 8px 17px 0px #dadada;

				svg {
					padding: 0.6em;
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
		.ctg-lst {
			width:100%;
			.hd {
				text-align: left;

				p {
					margin: 1rem;
					font-size: 1.5rem;
					text-transform: uppercase;
					font-weight: bold;
				}
			}
			.ctg-blocks {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-evenly;

				.catg {
					width: 8rem;
					background-color: white;
					box-shadow: 0 0 12px 1px #f3f3f3;
					padding:.7rem;
					margin: .5rem;
					border-radius: 1rem;
				}
			}
		}
	}
</style>