<template>
	<div id="newMessage">
		<form @submit.prevent="addMessage">
			<div class="control">
				<input
					type="text"
					class="input"
					v-model="message"
					autocomplete="off"
				/>
			</div>
			<div vif="feedback">{{ feedback }}</div>
		</form>
	</div>
</template>

<script>
import db from "@/firebase/init";

export default {
	name: "NewMessage",
	props: ["name"],
	data() {
		return { message: null, feedback: null };
	},
	methods: {
		addMessage() {
			if (this.message) {
				return db
					.collection("chatter")
					.add({
						name: this.name,
						message: this.message,
						timestamp: Date.now()
					})
					.then(() => {
						this.message = null;
						this.feedback = null;
					})
					.catch(err => err);
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
