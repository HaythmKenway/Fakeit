import { defineStore } from 'pinia'

export const usePersonaStore = defineStore('persona',{
	state: () => ({
		firstName: ' Generated Persona',
		lastName:'',
		gender: 'generated gender',
		email: 'Generated Email',
		picture:'https://www.uic.mx/posgrados/files/2018/05/default-user.png',
		description: 'Generated Description',
	}),
   actions: {
	   async refreshPersona() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      const desc = await fetch(`http://localhost:9999/para?name=${results[0].name.first}`);
      const email = await fetch(`http://localhost:9999/getmailaddress?name=${results[0].name.first.toLowerCase()}`);
      console.log(results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.gender = results[0].gender;
      this.email = await email.text();
      this.description = await desc.text();
      this.picture = results[0].picture.large;
	  console.log(this.firstName);
	   },
   },
})
