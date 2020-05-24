<template>
	<div class="profile">
		<header-bar title="Edit Profile" />
		<profile-pic-and-name className="small" />
		<div class="form">
			<form action>
				<div class="input">
					<label for="username">Username</label>
					<input type="text" id="username" v-model="user.username" />
				</div>
				<div class="input">
					<label for="fname">First name</label>
					<input type="text" id="fname" v-model="user.firstName" />
				</div>
				<div class="input">
					<label for="lname">Second name</label>
					<input type="text" id="lname" v-model="user.lastName" />
				</div>
				<div class="input">
					<label for="email">Email</label>
					<input type="email" id="email" v-model="user.email" />
				</div>
				<div class="input">
					<label for="phone">Phone</label>
					<input type="tel" id="phone" v-model="user.phone" />
				</div>
				<div class="submit">
					<vs-button 
					:loading="btn.sending" 
					:icon="btn.success" 
					circle 
					gradient
					size="large"  
					:color="btn.success ? 'success' : '#ec5252'" 
					@click.prevent="saveProfile">
						<span v-if="btn.success"> Profile saved </span>
						<span v-else>Save profile</span>
					</vs-button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import HeaderBar from "@/components/HeaderBar";
	import ProfilePicAndName from "@/components/profile/ProfilePicAndName";

	export default {
		name: "EditProfile",
		components: {
			HeaderBar,
			ProfilePicAndName
		},
		data() {
			return {
				btn:{
					sending:false,
					success:false,
				},
				user: {
					username: "ntwarilibe",
					firstName: "Ntwari",
					lastName: "Liberiste",
					email: "ntwari@gmail.com",
					phone: "0780310488"
				}
			};
		},
		methods:{
			saveProfile(){
				this.btn.sending = true;

				setTimeout(() => {
					this.btn.sending = false;
					this.btn.success = true;
				},500)
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/main.scss";
	.profile {
		.form {
			width: 100%;
			.input {
				width: 80%;
				margin: 0.7rem auto;
				font-size: 1.2rem;
				label {
					display: block;
					text-align: left;
					font-size: 1.2rem;
					color: $black;
				}
				input {
					width: 100%;
					border: none;
					border-bottom: 0.15rem solid $lightgrayish;
					color: $grayish;
				}
			}
			.submit{
				width: 15rem;
				margin:2rem auto;
				button{
					width:100%;
					font-size: 1.2rem;
				}
			}
		}
	}
</style>