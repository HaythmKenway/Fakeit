<template>
  <div id="app">
    <div class="details">
      <button :class="persona.gender" @click="persona.refreshPersona">Generate</button>
      <h2>Name: {{ persona.firstName }} {{ persona.lastName }}</h2>
      <h2>
        Email:
        <a :href="`mailto:${persona.email}`">{{ persona.email }}</a>
	</h2>
	<h2>Gender: {{persona.gender}}</h2>
	
    </div>
  </div>
</template>

<script>
import { usePersonaStore } from '../stores/persona';

export default {
  setup() {
    const persona = usePersonaStore();
    return { persona };
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
h2 {
  
  font-size: 1.6rem;
  color:white;
}
button{
  background:rgb(108, 167, 255);
  color:white;
  border-radius: 9px;
  font-size:15px;
  padding:2px 35px;

}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

/* @media (min-width: 1024px) { */
  /* .greetings h1, */
  /* .greetings h3 { */
    /* text-align: left; */
  /* } */
/* } */
</style>

