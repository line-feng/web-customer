<template>
	<div style="height: 100%;display: flex;">
		<Menu :theme="theme3" :active-name="active" style='width: 17%;height: 100%;'>
			<MenuGroup :title='item["title"]'>
				<MenuItem :name="index" v-for='(items,index) in item["litsts"]' :key='index' :to='"/home"+items.path'>
				<li >{{ items['title'] }}</li>
				</MenuItem>
			</MenuGroup>
		</Menu>
		<div style="width: 100%;height: 100%;overflow: auto;">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import {
		Menu,
		MenuGroup,
		MenuItem
	} from 'view-design';
	export default {
		props:['item'],
		components: {
			[Menu.name]: Menu,
			[MenuGroup.name]: MenuGroup,
			[MenuItem.name]: MenuItem
		},
		data() {
			return {
				theme3: 'light',
				active:0
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
