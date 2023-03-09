<template>
	<div class="mailbox">
		<div class="header">
			<h3 style=" margin-right: 20px;">Email: {{ persona.email }}</h3>
			<button @click="mails.refreshMails(persona.email)">Fetch e-mails</button>
		</div>
		<div v-for="task in mails.mails">
			<MailList :mail='task'/>
		</div>
	</div>
</template>

<script>
import { usePersonaStore } from '../stores/persona';
import { useMailStore } from '../stores/mailstore';
import MailList from '../components/MailList.vue';

export default {
  components: {
    MailList
  },
  setup() {
	  const mails = useMailStore();
    const persona = usePersonaStore();
	  console.log({ persona, mails });
    return { persona, mails };
  }
};
</script>

<style>
  .mailbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #280012;
    border-radius: 10px;
    color:rgb(93, 123, 255)
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

