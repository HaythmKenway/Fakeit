<template>
    <div class="about">
	<login />
	</div>
</template>

<script>

import { usePersonaStore } from '../stores/persona';
import login from '@/components/Login.vue';

export default {
	name: 'LoginVue',
	components: {
		login,
	},
	setup() {
		const persona = usePersonaStore();
		return { persona };

	},
	


};
</script>

