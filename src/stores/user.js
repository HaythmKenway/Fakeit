import { defineStore } from 'pinia'
import axios from 'axios'
export const usercreate = defineStore('create',{
  state: () => ({
    firstName: '',
    lastName:'',
    gender: '',
    email: '',
	originalMail:'',
	password:'',
    picture:'',
    description: '',
  }),
	getters:{
  printall(state) {
    console.log(this.gender);
	console.log(this.originalMail);
  }
},
  actions: {
    async refreshPersona() {
      let genderParam = '';
      if (this.gender === 'male') {
        genderParam = 'male';
      } else if (this.gender === 'female') {
        genderParam = 'female';
      } else {
        genderParam = '';
      }

      const res = await fetch(`https://randomuser.me/api?gender=${genderParam}`);
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
  
async signup() {
      try {
		console.log(this.firstName);
        const response = await axios.post('http://localhost:9999/signup', {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          email: this.email,
          originalMail: this.originalMail,
          password: this.password,
          picture: this.picture,
          description: this.description,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },

  },
})

