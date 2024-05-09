<script lang="ts" setup>
import {ref} from 'vue';
import Icon from '@ui/widgets/Icon';
import {MockNavbarPage} from '@app/Mock/MockNavbarPage';
import {exportModel} from '@app/exportModel';
const className = 'navbarPage';
const navbarPage = MockNavbarPage;
const isOpen = ref(false);

const model = ref([true, true, true, true, true]);
</script>

<template>
	<div :class="`${className}`">
		<h1>
			<Icon name="menuOpen" :height="15" :width="12" />
			{{ navbarPage.title }}
		</h1>
		<div :class="`${className}-container`">
			<div v-for="brick in navbarPage.items" :class="`${className}-brick`">
				<NuxtLink :to="brick.href">{{ brick.title }}</NuxtLink>
			</div>
			<Icon :name="'gear'" :height="15" :width="15" :class="{active: isOpen}" @click="isOpen = !isOpen" />
			<div :class="{show: isOpen}" class="isClose">
				<div
					v-for="(name, index) in navbarPage.settingsTitle"
					class="dropBrick"
					@click="exportModel[index + 2] == 0 ? (exportModel[index + 2] = index + 2) : (exportModel[index + 2] = 0), (model[index] = !model[index])"
				>
					<input v-model="model[index]" type="checkbox" />
					{{ name }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
