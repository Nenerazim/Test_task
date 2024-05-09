<script setup lang="ts">
import Icon from '@ui/widgets/Icon';
import type {UiButtonProps} from './types';

const emit = defineEmits(['onClick']);
const props = withDefaults(defineProps<UiButtonProps>(), {
	type: 'default',
	icon: undefined,
	additionalClass: ''
});
</script>

<template>
	<button :class="`button ${props.type} ${props.additionalClass}`" @click="emit('onClick')">
		<Icon v-if="props.icon" :name="props.icon" :width="11" :height="11" />
		<div class="text">
			{{ props.label }}
		</div>
		<div v-if="type === 'select'" class="box-mark">
			<div class="mark" />
		</div>
	</button>
</template>

<style lang="scss" scoped>
@import './style';
</style>
