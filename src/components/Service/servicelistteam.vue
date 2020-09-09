<template>
	<div>
		<top-title :title='"客服小组"' />
		<slt-body :sltBody='sltBody' />
	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const sltBody = () => import('@/components/Service/servicelist/sltBody');
	export default {
		components: {
			topTitle,
			sltBody
		},
		data() {
			return {
				sltBody: {
					options: [{
						value: '选项1',
						label: '黄金糕'
					}, {
						value: '选项2',
						label: '双皮奶'
					}, {
						value: '选项3',
						label: '蚵仔煎'
					}, {
						value: '选项4',
						label: '龙须面'
					}, {
						value: '选项5',
						label: '北京烤鸭'
					}],
					value: '',
					tableData: [{
						teamname: '客服小组',
						num: '10',
						name: '符号',
						platform: '平台'
					}],
					multipleSelection: []
				}
			}
		}
	}
</script>

<style>
</style>
