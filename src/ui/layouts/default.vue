<script lang="ts" setup>
import Sidebar from '@ui/components/Sidebar';
import Navbar from '@ui/components/Navbar';
</script>

<template>
	<div class="application">
		<div class="content">
			<div class="wrap">
				<div class="page">
					<div class="sidebar">
						<Sidebar />
					</div>
					<div class="page-layout">
						<Navbar />
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
