<template>
<div class="search_bar" :style="style">
                <p>search book</p>
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
            
</div>
</template>
<script>
export default {
    name:"SearchBar",
    props:{
        padding:[String,Number]
    },
    computed:{

    }
}
</script>
<style lang="scss">
	@import "../assets/scss/main.scss";

    .search_bar{
        width:80%;
        background-color:$lighestGrayish ;
        display: grid;
        grid-template-columns: 80% 20%;
        margin: auto;
        padding: .7rem 0;
        // box-sizing: border-box;
        border-radius: 3rem;

        p{
            margin:0;
            padding:0;
            font-size: 1.25rem;
            text-align: left;
            padding-left: 2rem;
            color:#8C8C8C;
        }
    }
</style>