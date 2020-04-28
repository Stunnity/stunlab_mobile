<template>
	<div class="show-books-based-category">
		<vs-row>
			<div class="search">
				<SearchBar />
			</div>
		</vs-row>
		<vs-row>
			<div class="books">
				<div class="book" v-for="(book,i) in books" :key="i">
					<img v-if="i%2 ==0" src="../assets/images/books/book2.png" alt />
					<img v-else src="../assets/images/books/book1.png" alt />
				</div>
			</div>
		</vs-row>
	</div>
</template>

<script>
	import SearchBar from "../components/SearchBar";

	export default {
		name: "ShowBooksBasedCategory",
		components: {
			SearchBar
		},
		data() {
			return {
				books: [
					{
						src: "book1.png",
						tittle: "Mathematics S3",
						provider: "REB"
					},
					{
						src: "book2.png",
						tittle: "Literature S3",
						provider: "REB"
					},
					{
						src: "book2.png",
						tittle: "English S4",
						provider: "REB"
					},
					{
						src: "book1.png",
						tittle: "Mathematics S1",
						provider: "REB"
					},
					{
						src: "book1.png",
						tittle: "Mechanics L1",
						provider: "WDA"
					},
					{
						src: "book2.png",
						tittle: "Physioligy Y2",
						provider: "TTC"
					}
					// {
					// 	src: "book1.png",
					// 	tittle: "Mathematics S3",
					// 	provider: "REB"
					// },
					// {
					// 	src: "book2.png",
					// 	tittle: "Mathematics S3",
					// 	provider: "REB"
					// },
					// {
					// 	src: "book2.png",
					// 	tittle: "Mathematics S3",
					// 	provider: "REB"
					// },
					// {
					// 	src: "book1.png",
					// 	tittle: "Mathematics S3",
					// 	provider: "REB"
					// },
					// {
					// 	src: "book1.png",
					// 	tittle: "Mathematics S3",
					// 	provider: "REB"
					// }
				]
			};
		}
	};
</script>
<style lang="scss">
	.show-books-based-category {
		background-color: white;
		border-radius: 1.25rem;
		box-shadow: 0px 10px 20px #e5e5e5;
		box-sizing: border-box;
		position: relative;
		width: 100%;

		.search{
			width:100%;
			padding: 2rem .2rem;
		}
		.books {
			.book {
				width: 28%;
				display: inline-block;
				padding: 2%;
				img {
					width: 100%;
					border-radius: .5rem;
				}
			}
		}
	}
</style>