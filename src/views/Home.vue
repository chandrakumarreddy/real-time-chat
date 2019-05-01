<template>
	<div class="home">
		<div class="card">
			<div class="card-content">
				<div class="content">
					<h1 class="heading">vue-chat</h1>
					<form @submit.prevent="addName">
						<div class="form__wrapper">
							<input
								class="input "
								type="text"
								placeholder="Enter your name"
								v-model="name"
							/>
							<p v-if="feedback" class="feedback">
								{{ feedback }}
							</p>
							<button class="button is-info">submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "home",
	data() {
		return {
			name: null,
			feedback: null
		};
	},
	methods: {
		addName() {
			if (this.name) {
				return this.$router.push({
					name: "Chat",
					params: { name: this.name }
				});
			}
			this.feedback = "please enter a valid name";
		}
	}
};
</script>

<style>
.home {
	max-width: 700px;
	margin: 100px auto;
}
.form__wrapper {
	text-align: center;
	width: 60%;
	margin: 0 auto;
}
.form__wrapper button {
	margin: 20px 0;
}
.content h1.heading {
	text-align: center;
}
.feedback {
	color: red;
	font-size: 14px;
	margin: 10px;
}
</style>
