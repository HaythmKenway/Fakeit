<template>
  <div class="mail">
    <h2>{{ mail_subject }}</h2>
    <div class="check" v-if="showDetails">
      <p >From: {{ mail.mail_from }}</p>
      <p>Time: {{ mail_timestamp }}</p>
      <p>Preview: {{ mail_preview }}</p>
      <p>Text: {{ mail_text }}</p>
    </div>
    <button @click="toggleDetails">
      {{ showDetails ? 'Hide details' : 'Show details' }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['mail'],
  
  data() {
    return {
      showDetails: false,
    };
  },
  computed: {
    mail_from() {
      return this.mail.mail_from;
    },
    mail_preview() {
      return this.mail.mail_preview;
    },
    mail_subject() {
      return this.mail.mail_subject;
    },
    mail_text() {
      return this.mail.mail_text;
    },
    mail_timestamp() {
      return this.mail.mail_timestamp;
    },
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style>
.mail {
  border: 1px solid #ccc;
  padding: 10px 295px;
  margin: 10px;
  display: flex;
  justify-content: center;
}

.check{
  color:white;

}

button{
  background: linear-gradient(#7991ff, #7991ff);;
  color:white;
  border-radius: 9px;
  font-size:15px;
  padding:7px 35px;
  border-color: #7991ff;
 

}



.mail button {
  margin-top: 10px;
  background-color: #ccc;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
}
</style>

