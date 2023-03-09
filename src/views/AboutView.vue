<template>
    <div class="about">
	<Setpersona />
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

<script>

import { usePersonaStore } from '../stores/persona';
import Setpersona from '@/components/SetPersona.vue';

export default {
	name: 'AboutView',
	components: {
		Setpersona,
	},
	setup() {
		const persona = usePersonaStore();
		return { persona };

	},
	


};
</script>
