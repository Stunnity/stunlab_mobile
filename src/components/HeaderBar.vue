<template>
	<div class="header">
		<vs-row>
			<div class="container">
				<div class="back-icon" v-if="appear">
					<svg
						width="14"
						height="24"
						viewBox="0 0 14 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 22L2 12L12 2"
							stroke="black"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div class="title">
					<span>{{title}}</span>
				</div>
			</div>
		</vs-row>
	</div>
</template>
<script>
	export default {
		name: "HeaderBar",
		data() {
			return {};
		},
		props: {
			title: String,
			l_arrow:{
				type:Boolean,
				default:true,
				
			}
		},
		computed: {
			appear(){
				return this.l_arrow
			}
		},
	};
</script>
<style lang="scss" scoped>
	@import "../assets/scss/main.scss";

	.header {
		padding-bottom: .5rem;

		.container {
			width: 100%;
			display: flex;
			border-bottom: .1px solid $grayish;
			.back-icon {
				padding: .6rem;
			}
			.title {
				width: 100%;
				text-align: center;
				padding: 0.3rem 0.6rem;

				span {
					font-family: $poppins;
					font-size: 1.4rem;
					font-weight: 600;
					margin: auto;
				}
			}
		}

	}
</style>