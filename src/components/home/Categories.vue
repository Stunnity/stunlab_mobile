<template>
<div class="categories">
    <div class="container">
			<h2 class="head">Categories</h2>
			<swiper class="swiper" :options="swiperOption">
				<swiper-slide v-for="(category,i) in categories" :key="i">
					<div class="category" >
						<p>{{category}}</p>
					</div>
				</swiper-slide>
			</swiper>
		</div>
</div>
</template>
<script>
import swi from 'swiper'

export default {
	name:"Categories",
    data(){
        return {
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
			swiperOption:{
					slidesPerView: 1.2,
					spaceBetween: 10,
					centeredSlides: true,
					speed: 10,
					grabCursor: true,
					slideToClickedSlide:true,
					watchSlidesProgress:true,
					watchSlidesVisibility:true,
					on :{
						slideChange:()=>console.log(swi.$wrapperEl)
					}
			}
        }
    }
}
</script>
<style lang="scss" scoped>

    .categories{
        .container{
            h2{
                @include header;
            }
			.swiper-container{
				padding-top: 2.3rem;
				.swiper-slide-active{
					transform: translateY(-2rem);
				}
				.swiper-slide{
					transition:color ease-in .5s,transform ease .2s,opacity ease-in .5s;
				}
				.swiper-slide-prev{
					.category{
						background-image: linear-gradient($bluepurple,$bluepurple);
						opacity: .6;
					}
				}
				.swiper-slide-next{
					.category{
						background-image: linear-gradient($orange,$orange);
						opacity: .6;
					}
				}
			}

			.category{
				background: $orange;
				height: 15rem;
				width:90% rem;
				background-image: linear-gradient(to top right,$bluepurple,$orange);
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: .5rem;
				p{
					margin:0;
					padding:0;
					width:fit-content;
					font-size: 2rem;
					color:white;
					text-transform: capitalize;
				}
			}
        }
    }
</style>