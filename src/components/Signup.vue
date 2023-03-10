<template>
  <div class="bg flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://imgs.search.brave.com/TgiGNLM-GJM4gQzBKmNLDMsPMRLUYOpwqP09pO1bVtU/rs:fit:1024:788:1/g:ce/aHR0cHM6Ly93d3cu/b25seWdmeC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTIvZmFrZS1zdGFt/cC0zLTEwMjR4Nzg4/LnBuZw" alt="Your Company">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white-900">Signup</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">Already have an account? Log in</router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submitForm">
        <input type="hidden" name="remember" value="true">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="emailid" id="email" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="passwordid" id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password">
            <input v-model="confirmPassword" id="confirm-password" name="confirm-password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Confirm password">
          </div>
        </div>
        <select v-model="genderid" name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-binary</option>
	  </select>
	      <div v-if="error !== ''">{{ error }}</div>
        <div class="flex items-center justify-between">
			<div class="flex items-center">
				
				<input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
            <label for="remember-me" class="ml-2 block text-sm text-white-900">Remember me</label>
          </div>
        </div>
        <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>


<style scoped>
  option{
    color: black;
  }
  select{
    color: black;
  }
</style>




<style scoped>
option{
color:black}
select{
	color:black}
</style>


<script>
import { usePersonaStore } from '../stores/persona';
import { usercreate } from '../stores/user';
import Button from '../components/buttons/dd.vue';
import { defineComponent, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
  setup() {
    const persona = usePersonaStore();
    const genderid = ref('');
	const passwordid = ref('');
	var wrong=false;
	var error=''
	const confirmPassword=ref('');
    const emailid = ref('');

    const create = usercreate();


	const submitForm = async() => {
  let wrong = false;
  let flaws = [];

  const password = passwordid.value;
  if (password.length < 8) {
    wrong = true;
    flaws.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
    wrong = true;
    flaws.push('Password must contain at least one uppercase letter, one lowercase letter, and one number');
  }
  if (password === 'password') {
    wrong = true;
    flaws.push('Password is too common');
  }
  if (password !== confirmPassword.value) {
    wrong = true;
    flaws.push('Passwords do not match');
  }
  if (emailid == '') {
    wrong = true;
    flaws.push('Invalid Email');
  }
  

  if (wrong) {
    alert(flaws.join('\n'));
  } else {
    create.gender = genderid.value;
    create.password = passwordid.value;
    create.originalMail = emailid.value;
    await create.refreshPersona();
	create.printall;
	await create.signup();
    console.log('submitted form');
  }
};

    return { persona,error, submitForm, genderid, passwordid, emailid,wrong,confirmPassword  };
  },
});
</script>

