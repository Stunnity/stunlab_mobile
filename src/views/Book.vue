<template>
	<div class="book">
		<header-bar  title="Book" />
		<vs-row>
			<div class="book-data">
				<div class="image">
					<img src="../assets/images/books/book2.png" alt />
				</div>
				<div class="category">
					<p>Literature</p>
				</div>
				<div class="tittle">
					<p>Mathematics S3</p>
				</div>
				<div class="provider">
					<p>REB</p>
				</div>
			</div>
		</vs-row>
		<vs-row>
			<div class="about-book">
				<h2>About book</h2>
				<div class="data-row">
					<div class="downloads">
						<h4>Downloads</h4>
						<p>1200</p>
					</div>
					<div class="likes">
						<h4>Likes</h4>
						<p>59</p>
					</div>
					<div class="dislikes">
						<h4>Dislikes</h4>
						<p>10</p>
					</div>
				</div>
			</div>
		</vs-row>
		<vs-row>
			<div class="description">
				<h2>Description</h2>
				<p>The best home book that you have to read as you are home in this times</p>
			</div>
		</vs-row>
		<vs-row>
			<div class="btns">
				<div class="read">
					<vs-button :active="active == 0" circle size="large" color="#ec5252">Read book</vs-button>
				</div>
				<div class="download">
					<vs-button size="large" circle color="#ec5252">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M8 12L12 16L16 12"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 8V16"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</vs-button>
				</div>
			</div>
		</vs-row>
	</div>
</template>
<script>
	import HeaderBar from "../components/HeaderBar";

	export default {
		name: "Book",
		components: {
			HeaderBar
		}
	};
</script>
<style lang="scss">
	@import "../assets/scss/main.scss";

	.book {
		font-family: $poppins;

		.book-data {
			font-family: $poppins;

			width: 100%;
			.image {
				margin: auto;
				width: fit-content;
				img {
					border-radius: 0.7rem;
					margin: auto;
				}
			}
			.category {
				p {
					width: fit-content;
					background-color: lighten($orange, 32);
					color: $orange;
					margin: 0.6rem auto;
					font-size: 1.2rem;
					font-weight: 600;
					padding: 0.3rem 1.5rem;
				}
			}
			.tittle {
				p {
					margin: 0.5rem auto;
					font-weight: 600;
				}
			}
			.provider {
				p {
					margin: 0.5rem auto;
					font-weight: 600;
					color: $lightgrayish;
				}
			}
		}
		.about-book {
			box-sizing: border-box;
			h2 {
				text-align: left;
				width: 90%;
				margin: 0.5rem auto;
			}
			width: 100%;
			.data-row {
				display: flex;
				box-sizing: inherit;
				width: 90%;
				margin: auto;
				flex-direction: row;
				justify-content: space-around;
				background-color: #f7f7f7;
				padding: 0 0.5rem;
				border-radius: 0.7rem;

				h4 {
					color: $orange;
				}
				p {
					font-weight: 600;
				}
			}
		}
		.description {
			font-family: $poppins;
			width: 100%;
			margin: 0.5rem auto;
			h2 {
				text-align: left;
				width: 90%;
				margin: 0.5rem auto;
			}
			p {
				text-align: left;
				width: 90%;
				margin: 0.4rem auto;
			}
		}
		.btns {
			width: 95%;
			display: grid;
			grid-template-columns: 75% 20%;
			margin: auto;

			button {
				width: 90%;
				font-size: 1.3rem;
				margin: 1rem auto 2rem auto;
				box-shadow: 0px 7px 14px #ffbaba;
			}
			.read {
				// width: 70%;
				display: inline-block;
			}
			.download {
				// width: 30%;
				display: inline-block;
				flex-grow: 2;
			}
		}
	}
</style>