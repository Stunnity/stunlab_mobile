<template>
	<div class="arrival">
		<div class="container">
			<p class="head">NEW ARRIVALS</p>
			<swiper class="swiper" :options="swiperOption">
				<swiper-slide v-for="(book,i) in books" :key="i">
						<div class="book" >
						<router-link to="/book">
							<img src="../assets/images/books/book2.png" alt />
						</router-link>
						<p class="tittle">{{book.tittle}}</p>
						<p class="provider">{{book.provider}}</p>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script>
import anime from 'animejs'

	export default {
		name: "NewArrivals",
		data() {
			return {
				swiperOption: {
					slidesPerView: 3,
					spaceBetween: 10,
					// freeMode: true,
					speed: 10,
					grabCursor: true,
					breakpoints: {
						// when window width is >= 250px
						250: {
							slidesPerView:2
						},
						// when window width is >= 320px
						320: {
							slidesPerView: 2.7,
							spaceBetween: 10
						},
						// when window width is >= 450 px
						450:{
							slidesPerView:3
						},
						// when window width is >= 480px
						480: {
							slidesPerView:3.3 ,
							spaceBetween: 30
						},
						// when window width is >= 550ox
						550:{
							slidesPerView:4,
						},
						// when window width is >= 640px
						640: {
							slidesPerView: 5,
							spaceBetween: 40
						}
					}
                },
                books:[
                    {
                        src:"book1.png",
                        tittle:"Mathematics S3",
                        provider:"REB"
                    },                    {
                        src:"book2.png",
                        tittle:"Literature S3",
                        provider:"REB"
                    },                    {
                        src:"book2.png",
                        tittle:"English S4",
                        provider:"REB"
                    },                    {
                        src:"book1.png",
                        tittle:"Mathematics S1",
                        provider:"REB"
                    },                    {
                        src:"book1.png",
                        tittle:"Mechanics L1",
                        provider:"WDA"
                    },                    {
                        src:"book2.png",
                        tittle:"Physioligy Y2",
                        provider:"TTC"
                    },                    {
                        src:"book1.png",
                        tittle:"Mathematics S3",
                        provider:"REB"
                    },                    {
                        src:"book2.png",
                        tittle:"Mathematics S3",
                        provider:"REB"
                    },                    {
                        src:"book2.png",
                        tittle:"Mathematics S3",
                        provider:"REB"
                    },                    {
                        src:"book1.png",
                        tittle:"Mathematics S3",
                        provider:"REB"
                    },                    {
                        src:"book1.png",
                        tittle:"Mathematics S3",
                        provider:"REB"
                    },
                ]
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
        }
	};
</script>
<style lang="scss">
	@import "../assets/scss/main.scss";

	.arrival {
        border-radius: 1.3rem;
        margin-top: -6rem;
        z-index: 1;
        position: relative;
        background-color: white;
        box-shadow: 0px 5px 25px #E5E5E5;
        padding: .5rem 0;
		.container {
            width:96%;
            margin: auto;
			p {
				&.head {
					font-weight: 800;
					font-size: 1.2rem;
                    text-align: left;
                    margin:0 0 .6rem .4rem;
				}
			}
			.book {
				box-sizing: border-box;
				img {
					width: 8rem;
					border-radius: 0.7rem;
				}
				p {
					font-size: 0.9rem;
					margin: 0.2rem 0 0.2rem 0.7rem;
					text-align: left;

					&.tittle {
						font-weight: 600;
					}
				}
			}
		}
	}
</style>