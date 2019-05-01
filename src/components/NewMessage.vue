<template>
	<div id="newMessage">
		<form @submit.prevent="addMessage">
			<div class="control">
				<input type="text" class="input" v-model="message" />
			</div>
			<div vif="feedback">{{ feedback }}</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "NewMessage",
	props: ["name"],
	data() {
		return { message: null, feedback: null };
	},
	methods: {
		addMessage() {
			if (this.message) {
				console.log("submitted", this.message);
				this.feedback = null;
			}
			this.feedback = "please enter a valid message";
		}
	}
};
</script>

<style>
.feedback {
	color: red;
	font-size: 14px;
}
</style>
