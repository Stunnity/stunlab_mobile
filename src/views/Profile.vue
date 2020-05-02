<template>
	<div class="profile">
		<header-bar title="Profile" />
		<vs-row>
			<div class="img-nm">
				<div class="p-img">
					<p>M</p>
				</div>
				<div class="p-nm">
					<p>Melinda Gates</p>
				</div>
			</div>
		</vs-row>
		<vs-row>
			<div class="edt-p">
				<center>
						<img src="../assets/icons/svgs/edit.svg" alt />
						<p>Edit Profile</p>
				</center>
			</div>
		</vs-row>
	</div>
</template>
<script>
	import HeaderBar from "../components/HeaderBar";

	export default {
		name: "Profile",
		components: {
			HeaderBar
		}
	};
</script>

<style lang="scss" scoped>
	@import "../assets/scss/main.scss";

	.profile {
		font-family: $poppins;
		.img-nm {
			width: 100%;

			.p-img {
				width: 10.2rem;
				height: 10.2rem;
				background-color: $orange;
				display: flex;
				margin: auto;
				justify-content: space-around;
				align-items: center;
				border-radius: 50%;
				p {
					font-size: 4.2rem;
					font-weight: 800;
					font-family: inherit;
					color: white;
					margin: 0;
					height: fit-content;
				}
			}
			.p-nm {
				p {
					font-size: 1.5rem;
					font-weight: 800;
					font-family: inherit;
				}
			}
		}

		.edt-p {
            width: 100%;
            background: rgba(196, 196, 196, 0.3);

            center{
                display: inline-flex;
                img{
                    padding: .3rem;
                }
                p{
                    margin: auto 1.9rem;
                    width: fit-content;
                    font-size: 1.2rem;
                    font-weight: 600;
                    font-family: inherit;
                }
            }
		}
	}
</style>