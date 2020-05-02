<template>
	<div class="home">

		<vs-row >
			<transition
			@before-enter="spaceBeforeEnter" 
			@enter ="spaceGo" 
			@leave ="spaceLeave"
			>
			<div class="upspace"></div>
			</transition>
		</vs-row>

		<vs-row>
			<div class="logo">
				<div :class="{'sm-logo-icon':!start,'lg-logo-icon':start}">
					<span>S</span>
				</div>
			</div>
		</vs-row>

		<!-- start section  -->
		<template v-if="start">
			<vs-row>
				<div class="text">
					<h1>STUNLAB</h1>
					<P>We care about your hobbie</P>
				</div>
			</vs-row>
			<vs-row>
				<div class="btns">
					<div class="signup">
						<vs-button block color="#ec5252" @click="startSignUp()">Sign Up</vs-button>
					</div>
					<div class="login">
						<vs-button block border color="#ec5252" @click="startLogIn()">Login</vs-button>
					</div>
				</div>
			</vs-row>
		</template>

		<!-- signup section  -->
		<transition
		@before-enter="signUpBeforeEnter" 
		@enter ="signUpGo" 
		@before-leave ="signUpGo">
		<template v-if="signUp">
			<vs-row>
				<div class="signup-block">
					<p class="main-text">Create your account to get access to our books.</p>
					<form @submit.prevent="signupForm">
						<div class="input username">
							<vs-input v-model.lazy="form.username" placeholder="username" />
						</div>
						<div class="input email">
							<vs-input v-model.lazy="form.email" placeholder="email" />
						</div>
						<div class="input phone">
							<vs-input v-model.lazy="form.phoneNumber" placeholder="phone number" />
						</div>
						<div class="input password">
							<vs-input v-model.lazy="form.password" placeholder="password" />
						</div>
						<div class="input c-password">
							<vs-input v-model.lazy="form.cPassword" placeholder="confirm password" />
						</div>
						<div class="signup">
							<vs-button block color="$orange">Sign Up</vs-button>
						</div>
						<p class="qtn">
							Already have an account?
							<span @click="login=true;signUp=false;spaceGo()">Login.</span>
						</p>
					</form>
				</div>
			</vs-row>
		</template>
		</transition>

		<!-- login section -->
		<transition
		@before-enter="signUpBeforeEnter" 
		@enter ="signUpGo" 
		@before-leave ="signUpGo">
		<template v-if="login">
            <vs-row>
               <div class="loggin-block">
                    <p class="main-text">Hi, Welcome back</p>
                    <p class="sub-text">Login to continue</p>
                    <form  @submit.prevent="loginForm">
						<div class="input email">
							<vs-input v-model.lazy="form.email" placeholder="email" />
						</div>
						<div class="input password">
							<vs-input v-model.lazy="form.password" placeholder="password" />
						</div>
						<div class="signup">
							<vs-button datatype="password" block color="$orange">Login</vs-button>
						</div>
						<p class="qtn">
							Don't have an account?
							<span @click="signUp=true;login=false;spaceLeave()">Sign up.</span>
						</p>
					</form>
               </div>
            </vs-row>
        </template>
		</transition>
	</div>
</template>

<script>
	// @ is an alias to /src
	import anime from "animejs"
	import {mapState,mapMutations} from "vuex"

	export default {
		name: "Home",
		components: {},
		data() {
			return {
				start: true,
				signUp: false,
				login:false,
				form: {
					username: "",
					email: "",
					phoneNumber: "",
					password: "",
					cPassword: ""
				}
			};
		},
		computed:{
			...mapState({
				logginPage: state => state.login.logginPage
			})
		},
		methods:{
			...mapMutations('login',['LOGGINPAGE']),
			spaceBeforeEnter(){
				anime({
					targets:".home .upspace",
					height:0,
					backgroundColor:"tomato",
					// easing: 'easeInOutExpo'
				})
			},
			spaceGo(){
				anime({
					targets:".home .upspace",
					height:"10vh",
					// duration:1000,
					easing: 'easeInOutExpo'
				})
			},
			spaceLeave(){
				anime({
					targets:".home .upspace",
					height:0,
					backgroundColor:"tomato",
					// duration:2000,
					easing: 'easeInOutExpo'
				})
			},
			spaceAfterLeave(){
				anime({
					targets:".home .upspace",
					height:0,
					// easing: 'easeInOutExpo'
				})	
			},
			signUpBeforeEnter(){
				anime({
					targets:".home .signup-block",
					opacity:0,
					// duration:3000

				})
			},
			signUpGo(){
				anime({
					targets:".home .signup-block",
					opacity:1,
					duration:3000
					
				})
			},
			signUpAfterLeave(){
				anime({
					targets:".home .signup-block",
					opacity:0,
					duration:3000

				})
			},
			startSignUp(){
				this.start=false
				this.signUp=true
				this.spaceLeave()
			},
			startLogIn(){
				this.start=false
				this.login=true
				this.spaceGo()
			},
			signupForm(){
				this.$router.push('home');
				this.LOGGINPAGE(false);
			},
			loginForm(){
				this.$router.push('home');
				this.LOGGINPAGE(false);
			}

		},
		mounted(){
			this.spaceGo()
		}
	};
</script>
<style lang="scss">
	@import "../assets/scss/main.scss";

	.home {
		font-family: $poppins;
		font-style: normal;
		.logo {
			position: relative;
			width: 100%;

			.lg-logo-icon {
				@include login-icon;
				width: 14rem;
				height: 14rem;
				transition: .6s all linear;


				span {
					font-size: 12rem;
					transition: .6s all linear;

				}
			}

			.sm-logo-icon {
				@include login-icon;
				width: 7rem;
				height: 7rem;
				transition: .6s all linear;


				span {
					font-size: 6rem;
					transition: .6s all linear;

				}
			}
		}

		.text {
			width: 100%;
			h1 {
				text-align: center;
				font-family: $poppins;
				font-style: normal;
				font-weight: 800;
				font-size: 24px;
				line-height: 36px;
				color: $orange;
				padding: 1rem;
			}
			p {
				text-align: center;
				font-family: $poppins;
				font-style: normal;
				font-weight: 600;
				font-size: 21px;
				line-height: 31px;
				color: #9a9a9a;
				padding: 1rem;
			}
		}

		.btns {
			width: 100%;
			.signup {
				@include signup-btn;
			}
			.login {
				display: block;

				button {
					@include lg-btn;
					margin: 1rem auto;
				}
			}
		}
		// .upspace {
		// 	height: 10vh;
		// }
		.signup-block {
			margin: auto;
			width:100%;
			opacity: 0;
			.main-text {
				@include lg-text;
				font-size: 1.6rem;
				color: $blue;
			}
			form {
				margin: 2rem 0;

				.input {
					margin: 1rem 0;
				@include vs-input-edit;
				}
				.qtn {
					margin:1rem auto;
					@include qtn;
				}

				.signup {
					@include signup-btn;
					width: 100%;
				}
			}
		}
		.loggin-block {
			margin:auto;
			width:100%;
			.main-text {
				@include lg-text;
				font-size: 1.8rem;
				color: $blue;

			}
			.sub-text {
				@include lg-text;
				font-size: 1.6rem;
				color: $grayish;

			}
			form {
				margin: 2rem 0;

				.input {
					margin: 2rem 0;
					@include vs-input-edit;
				}
				.qtn {
					@include qtn;
                    margin:2rem auto;
				}

				.signup {
					@include signup-btn;
					width: 100%;
				}
			}
		}
	}
</style>

