<template>
		<vs-row>
			<div class="img-nm" :class="className">
				<div class="p-img">
					<p>M</p>
				</div>
				<div class="p-nm">
					<p>Manzi Gustave</p>
				</div>
			</div>
		</vs-row>
</template>
<script>
export default {
	name:"ProfilePicAndName",
	props:{
		className:{
			type:String,
			required:true
		}
	}
}
</script>
<style lang="scss" scoped>
	@import "../../assets/scss/main.scss";

	.img-nm  {
			width: 100%;

			.p-img {
				background-color: $orange;
				display: flex;
				margin: auto;
				justify-content: space-around;
				align-items: center;
				border-radius: 50%;
				box-shadow: 0 0 10px 0px #bebebe;
				p {
					font-family: inherit;
					color: white;
					margin: 0;
					height: fit-content;
				}
			}
			.p-nm {
				p {
					font-family: inherit;
				}
			}
		}
		.big {
			margin-top: 3rem;

			.p-img {
				width: 10.2rem;
				height: 10.2rem;
				p {
					font-size: 4.2rem;
					font-weight: 800;
				}
			}
			.p-nm {
				p {
					font-size: 1.5rem;
					font-weight: 800;
				}
			}
		}
		.small {
			margin-top: 2rem;

			.p-img {
				width: 5.1rem;
				height: 5.1rem;
				p {
					font-size: 2.1rem;
					font-weight: 700;
				}
			}
			.p-nm {
				p {
					font-size: .9rem;
					font-weight: 700;
				}
			}
		}
</style>