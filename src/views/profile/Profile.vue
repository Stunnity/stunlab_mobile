<template>
	<div class="profile">
		<header-bar title="My Profile" />
		<profile-pic-and-name className="big"/>
		<vs-row>
			<div class="actions">
				<div class="action">
						<img src="../../assets/icons/svgs/edit.svg" alt />
						<p><router-link to="profile/edit" >Edit profile</router-link></p>
				</div>
				<div class="action">
						<img src="../../assets/icons/svgs/edit.svg" alt />
						<p>Read books</p>
				</div>
				<div class="action">
						<img src="../../assets/icons/svgs/edit.svg" alt />
						<p>liked books</p>
				</div>
				<div class="action">
						<img src="../../assets/icons/svgs/bookmark.svg" alt />
						<p>Saved books</p>
				</div>
			</div>
		</vs-row>
	</div>
</template>
<script>
	import HeaderBar from "@/components/HeaderBar";
	import ProfilePicAndName from "@/components/profile/ProfilePicAndName";

	export default {
		name: "Profile",
		components: {
			HeaderBar,
			ProfilePicAndName
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/main.scss";

	.profile {
        // background: $whiteGrayish;
		font-family: $poppins;
		height: 100vh;
		

		.actions{
            width: 100%;
			display: flex;
			flex-direction: column;
			margin: 2rem 0 0 3rem;

            .action{
                display: inline-flex;
				margin: .5rem 0;
                img{
					width: 2rem;
                    padding: .2rem;
                }
                p{
                    margin: auto 1rem;
                    width: fit-content;
                    font-size: 1rem;
                    font-weight: 600;
                    font-family: inherit;
					
					a{
						color:inherit;
						text-decoration: none;
					}
                }
            }
		}
	}
</style>