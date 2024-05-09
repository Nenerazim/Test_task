<script lang="ts" setup>
import {reactive, ref} from 'vue';
import Icon from '@ui/widgets/Icon';
import Select from '@ui/widgets/Select';
import Input from '@ui/widgets/Input';
import Button from '@ui/widgets/Button';
import {MockTablePage} from '@app/Mock/MockTablePage';
import {exportModel} from '@app/exportModel';

const className = 'componentTable';
const component = MockTablePage;
const model = reactive({component});
const isShow = ref(-1);
const currentIndex = ref();
const mobile = ref(false);
const addNewLine = () => {
	model.component.items.push(component.blank);
};

const onDragStart = (e: DragEvent, index: number) => {
	e.dataTransfer.dropEffect = 'move';
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('id', index.toString());
	currentIndex.value = index;
};

const onDragEnter = (index: number) => {
	currentIndex.value = index;
};
const onDrop = (e: DragEvent, index: number) => {
	const dragIndex = e.dataTransfer.getData('id');
	const draggedItem = model.component.items[dragIndex];
	model.component.items.splice(Number(dragIndex), 1);
	model.component.items.splice(index, 0, draggedItem);
	currentIndex.value = null;
};
const size = reactive({resizingColumnIndex: null, startX: null, startWidth: null, items: [45, 30, 350, 190, 95, 227, 175]});
const startResize = (event: MouseEvent, index: number) => {
	size.resizingColumnIndex = index;
	size.startX = event.clientX;
	size.startWidth = event.target.parentElement.offsetWidth;
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
};

const onMouseMove = (event: MouseEvent) => {
	size.items[size.resizingColumnIndex] = event.pageX! - size.startX + size.startWidth;
};
const onMouseUp = () => {
	document.removeEventListener('mousemove', onMouseMove);
	document.removeEventListener('mouseup', onMouseUp);
};

onMounted(() => {
	checkScreen();
	window.addEventListener('resize', checkScreen);
});
onUnmounted(() => {
	window.removeEventListener('resize', checkScreen);
});
function checkScreen() {
	window.innerWidth <= 768 ? (mobile.value = true) : (mobile.value = false);
}
</script>

<template>
	<div class="addNewLine">
		<Button label="Добавить строку" :icon="'cross'" @click="addNewLine" />
	</div>
	<div :class="`${className}`">
		<div :class="`${className}-navbarTable`">
			<Button label="Сохранить изменения" type="none" />
			<Icon name="gear" :height="15" :width="15" />
		</div>
		<div class="tableContainer">
			<table>
				<thead>
					<tr>
						<th
							v-for="(title, index) in component.title"
							:key="index"
							:class="{close: exportModel[index]}"
							:style="mobile ? 'none' : `min-width: ${size.items[index]}px`"
						>
							{{ title }}
							<div class="resize-handle" @mousedown="startResize($event, index)"></div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(items, index) in model.component.items"
						:class="{current: index === currentIndex}"
						@drop="onDrop($event, index)"
						@dragstart="onDragStart($event, index)"
						@dragover.prevent
						@dragenter="onDragEnter(index)"
					>
						<td data-text="Номер строки" :style="mobile ? 'none' : `width: ${size.items[0]}px`">
							<div class="tableStart">
								<Icon name="menuOpen" :width="11" :height="12" draggable="true" />
								{{ index + 1 }}
							</div>
						</td>
						<td :style="mobile ? 'none' : `width: ${size.items[1]}px`" data-text="Действие">
							<div class="del" @click="isShow === index ? (index = -1) : (isShow = index)">
								<Icon name="menuClose" :width="10" :height="13" />
							</div>
							<div class="delDropDown" :class="{show: isShow === index}">
								<div
									class="dropBrick"
									@click="
										isShow = -1;
										component.items.splice(index, 1);
									"
								>
									Удалить
								</div>
							</div>
						</td>
						<td :class="{close: exportModel[2]}" :style="mobile ? 'none' : `width: ${size.items[2]}px`" data-text="Наименование еденицы">
							<Select v-model="items.name_unit" :data-option="component.default_name_unit" />
						</td>
						<td :class="{close: exportModel[3]}" :style="mobile ? 'none' : `width: ${size.items[3]}px`" data-text="Цена">
							<Input v-model="items.cost" />
						</td>
						<td :class="{close: exportModel[4]}" :style="mobile ? 'none' : `width: ${size.items[4]}px`" data-text="Кол-во">
							<Input v-model="items.quantity" />
						</td>
						<td :class="{close: exportModel[5]}" :style="mobile ? 'none' : `width: ${size.items[5]}px`" data-text="Название товара">
							<Select v-model="items.nameProduct" :data-option="component.default_name_product" />
						</td>
						<td :class="{close: exportModel[6]}" :style="mobile ? 'none' : `width: ${size.items[6]}px`" data-text="Итого">
							<Input v-model="items.general" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div :class="`${className}-sum`">
			<div>
				<span>Сумма:</span>
				<span>{{ model.component.items.reduce((total, obj) => total + Number(obj.general), 0) }}</span>
			</div>
			<div>
				<span> Кол-во:</span>
				<span>{{ model.component.items.reduce((total, obj) => total + Number(obj.quantity), 0) }}</span>
			</div>
			<div>
				<span> Общий вес:</span>
				<span>{{ 123 }}</span>
			</div>
		</div>
		<div :class="`${className}-all`">
			<span> Общая сумма:</span>
			<span>{{ 123213 }}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
