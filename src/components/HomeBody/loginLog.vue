<template>
	<div>
		<top-title :title='"消息中心"' />

		<lo-body :tableDatas='tableDatas' />
	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const loBody = () => import('@/components/HomeBody/loginLog/loBody');
	export default {
		components: {
			topTitle,
			loBody
		},
		data() {
			return {
				tableDatas: [{
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, {
					date: ' 2019-07-22 14:36:21',
					name: '59.61.174.22',
					address: '北京省福州市'
				}, ]
			}
		}
	}
</script>

<style>
</style>
