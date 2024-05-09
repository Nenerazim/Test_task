<script lang="ts" setup>
import type {UiInputProps} from './types';

const model = defineModel<string | number>();
withDefaults(defineProps<UiInputProps>(), {
	type: 'text',
	error: '',
	inputMode: 'text',
	placeholder: ''
});
</script>

<template>
	<div class="form-group">
		<input v-model="model" :placeholder="placeholder" :type="type" :inputmode="inputMode" />
		<div v-if="error" class="help-block">{{ error }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
