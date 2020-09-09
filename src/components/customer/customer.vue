<template>
	<div>
		<top-title :title='"客户列表"' />
		<mg-Body :tableDatas='tableData' />
	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const mgBody = () => import('@/components/HomeBody/messageCenter/mgBody');
	export default {
		components: {
			topTitle,
			mgBody
		},
		data() {
			return {
				tableData: [{
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '123123123！',
					time: '2019-05-03 00:00:00',
					name: 'fy'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}, {
					title: '客服绩效评定规则说明！',
					time: '2019-05-03 14:36:21',
					name: 'admis'
				}]
			}
		}
	}
</script>

<style>
</style>
