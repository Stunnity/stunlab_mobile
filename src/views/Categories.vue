<template>
	<div class="categories">
		<header-bar l-arrow="false" title="Categories"/>
		<div class="categories-lst">
			<swiper class="swiper" :options="swiperOption">
				<swiper-slide v-for="(category,i) in categories" :key="i">
					<div class="category" :class="[i==0 ? 'active-cat':'']">{{category}}</div>
				</swiper-slide>
			</swiper>
		</div>
		<ShowBooksBasedCategory />
	</div>
</template>
<script>
	import ShowBooksBasedCategory from '../components/ShowBooksBaseCategory'
	import HeaderBar from '../components/HeaderBar'

	export default {
		name: "Categories",
		components:{
			ShowBooksBasedCategory,
			HeaderBar
		},
		data() {
			return {
				categories: [
					"Science",
					"Technology",
					"Language",
					"Humanities",
					"Mechanics",
					"Mathematics",
					"Pholosophy",
					"Hepis children"
				],
				swiperOption: {
					slidesPerView: 3.3,
					spaceBetween: 3,
					freeMode: true,
					speed: 5,
					grabCursor: true
				}
			};
		}
	};
</script>
<style lang="scss">
	@import "../assets/scss/main.scss";

	.categories {
		background-color: $lighestGrayish;
        .categories-lst {
			padding:.5rem 0;
            .category{
				font-family: $poppins;
				font-size: 1rem;
				font-weight: 100;
				color: $grayish;
				letter-spacing: 1.5px;
			}
			.active-cat{
				color:$orange;
			}
        }
	}
</style>