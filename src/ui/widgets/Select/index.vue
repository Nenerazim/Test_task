<script lang="ts" setup>
import {ref} from 'vue';
import Button from '../Button';
import type {UiSelectProps} from './types';

const props = withDefaults(defineProps<UiSelectProps>(), {
	dataOption: () => []
});
const model = defineModel<string>();
const isOpen = ref(false);
</script>
<template>
	<div class="select">
		<Button v-model="model" :label="model" type="select" @click="isOpen = !isOpen" />
		<div :class="{show: isOpen}" class="isClose">
			<div
				v-for="name in props.dataOption"
				class="dropBrick"
				@click="
					model = name;
					isOpen = !isOpen;
				"
			>
				{{ name }}
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
