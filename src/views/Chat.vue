<template>
	<div id="chat">
		<div class="card">
			<div class="card-content">
				<div class="content">
					<h1 class="heading">vue-chat</h1>
					<div
						class="chat__flex"
						v-if="messages"
						v-for="message in messages"
						:key="message.id"
					>
						<div
							class="chat__flex--content chat__flex--content--name"
						>
							{{ message.name }}
						</div>
						<div class="chat__flex--content">
							{{ message.message }}
						</div>
						<div
							class="chat__flex--content chat__flex--content--time"
						>
							{{ message.timestamp }}
						</div>
					</div>
				</div>
				<NewMessage :name="name" />
			</div>
		</div>
	</div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "../firebase/init";

export default {
	name: "chat",
	props: ["name"],
	data() {
		return {
			messages: []
		};
	},
	components: {
		NewMessage
	},
	created() {
		const ref = db.collection("chatter").orderBy("timestamp");
		ref.onSnapshot(snapshot => {
			snapshot.docChanges().forEach(change => {
				if (change.type === "added") {
					let doc = change.doc;
					this.messages.push({
						name: doc.data().name,
						message: doc.data().message,
						timestamp: doc.data().timestamp,
						id: doc.id
					});
				}
			});
		});
	}
};
</script>

<style>
#chat {
	max-width: 700px;
	margin: 100px auto;
}
.chat__flex {
	display: flex;
}
.chat__flex--content {
	margin: 0 10px;
}
.chat__flex--content--name {
	color: orange;
	text-transform: capitalize;
	font-weight: bold;
}
.chat__flex--content--time {
	font-style: italic;
	font-weight: 300;
}
</style>
