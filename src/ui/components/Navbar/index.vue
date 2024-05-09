<script lang="ts" setup>
import Icon from '@ui/widgets/Icon';
import type {INavbarPage} from '@app/Interfaces/NavbarPage';

const className = 'navbarPage';
defineProps<{navbarPage: INavbarPage}>();
</script>

<template>
	<div :class="`${className}`">
		<h1>{{ navbarPage.title }}</h1>
		<div :class="`${className}-container`">
			<div v-for="brick in navbarPage.items" :class="`${className}-brick`">
				<NuxtLink :to="brick.href">{{ brick.title }}</NuxtLink>
			</div>
			<Icon :name="'gear'" :height="15" :width="15" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
