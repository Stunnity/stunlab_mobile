<template>
	<div class="arrival">
		<div class="container">
			<h2 class="head">{{title | upperCase}}</h2>
			<swiper class="swiper" :options="swiperOption">
				<swiper-slide v-for="(datum,i) in data" :key="i">
					<div class="book" >
						<router-link to="/book">
							<img src="../../assets/images/books/book2.png" alt />
						</router-link>
						<p class="tittle">{{datum.tittle}}</p>
						<p class="provider">{{datum.provider}}</p>
						<div class="action_btns">
							<button class="like"><img src="../../assets/icons/svgs/like.svg" alt=""> <span>{{datum.likes |beautify}}</span></button>
							<button class="dislike"><img src="../../assets/icons/svgs/like.svg" alt=""> <span> {{datum.dislikes |beautify}}</span></button>
							<button class="bookmark"><img src="../../assets/icons/svgs/bookmark.svg" alt=""></button>
						</div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script>
import anime from 'animejs'
import num from 'numeral'

	export default {
		name: "NewArrivals",
		props:{
			title:{
				type:String,
				required:true,
			},
			data:{
				type:Array,
				required:true
			}
		},
		data() {
			return {
				swiperOption: {
					slidesPerView: 2.7,
					spaceBetween: 10,
					// freeMode: true,
					speed: 10,
					grabCursor: true,
					breakpoints: {
						// // when window width is >= 250px
						// 250: {
						// 	slidesPerView:2
						// },
						// // when window width is >= 320px
						// 320: {
						// 	slidesPerView: 2.7,
						// 	spaceBetween: 10
						// },
						// // when window width is >= 450 px
						// 450:{
						// 	slidesPerView:3
						// },
						// // when window width is >= 480px
						// 480: {
						// 	slidesPerView:3.3 ,
						// 	spaceBetween: 30
						// },
						// // when window width is >= 550ox
						// 550:{
						// 	slidesPerView:4,
						// },
						// // when window width is >= 640px
						// 640: {
						// 	slidesPerView: 5,
						// 	spaceBetween: 40
						// }
					}
                },

			};
        },
        methods:{
            slider(){
                anime({
                    targets:".arrival .container .swiper-wrapper",
                    backgroundColor:"red",
                    easing: 'easeOutElastic(1, .8)'
                })
            }
        },
        mounted(){
            this.slider()
		},
		filters:{
			//convert word to uppercase
			upperCase : val => {
				if(!val) return '';

				val = val.toString();
				return val.toUpperCase();
			},
			// beatify numbers in terms of K,M like 1K
			beautify : val => {
				val = num(val).format('0.0a')
				let rounded = Math.round(val)
				if(isNaN(rounded))
					return val
				return rounded
			}
		}
	};
</script>
<style lang="scss">
	.arrival {
        z-index: 1;
        position: relative;
        padding: .5rem 0;
		.container {
            width:96%;
            margin: auto;
			h2 {
				@include header;
			}
			.book {
				background:$white;
				box-sizing: border-box;
				padding:.6rem;
				border-radius: .5rem;
				img {
					width: 8rem;
					border-radius: 0.7rem;
				}
				p {
					font-size: 0.9rem;
					margin: 0.2rem 0 0.2rem 0.7rem;

					&.tittle {
						font-weight: 600;

					}
				}
				.action_btns{
					width:100%;
					display:flex;
					justify-content: space-around;

					button{
						border:none;
						background-color: transparent;
						display: flex;
						flex-direction: column;
						align-items: center;
						&.dislike{
							img{
								transform: rotate(180deg);
							}
						}
						span{
							font-size: .8rem;
						}
						img{
							width:1.4rem;
						}
					}
				}
				
			}
		}
	}
</style>