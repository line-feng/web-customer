<template>
	<div class="homeSystem">

		<top-title :title='"系统首页"'></top-title>

		<sys-header :sysHeaderData='sysHeaderData' />

		<the-chart />

		<sys-table :sysTable='sysTable' />

	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle')
	const sysHeader = () => import('@/components/HomeBody/homeSystem/sysHeader')
	const theChart = () => import('@/components/HomeBody/homeSystem/sysTheChart')
	const sysTable = () => import('@/components/HomeBody/homeSystem/table')
	export default {
		components: {
			topTitle,
			sysHeader,
			theChart,
			sysTable
		},
		data() {
			return {
				sysHeaderData: {
					value: '',
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
					LineUps: [{
							Icon: 'el-icon-user-solid',
							title: '正在资讯人数',
							num: '200',
							subTitle: '当前在线客服数',
							CustomerServices: '200'
						},
						{
							Icon: 'el-icon-s-custom',
							title: '正在排队人数',
							num: '5000',
							subTitle: '今日平均排队时长',
							CustomerServices: '--',
							linesTitle: '今日排队总数',
							lines: '0'
						},
						{
							Icon: 'el-icon-user',
							title: '今日会话量',
							num: '5000',
							subTitle: '今日平均会话时长',
							CustomerServices: '--'
						},
						{
							Icon: 'el-icon-s-order',
							title: '今日未接入会话量',
							num: '1000',
							subTitle: '接入率',
							CustomerServices: '0.00%'
						},
						{
							Icon: 'el-icon-star-off',
							title: '今日相对满意度',
							num: '0.00%',
							subTitle: '参评率',
							CustomerServices: '0.00%'
						},
					]
				},
				sysTable: {
					value: 'null',
					search: '',
					options: [{
						value: 'null',
						label: 'null'
					},{
						value: '在线',
						label: '在线'
					}, {
						value: '休息',
						label: '休息'
					}],
					tableData: [
						[{
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号a',
							online: '休息 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, ],
						[{
							name: '123',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '123',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: 'qwe',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: 'qwe',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, {
							name: '符号',
							online: '在线 (1小时18分)',
							event: '0',
							session: '0',
							message: '0',
							satisfaction: "10%",
							onlineTime: '1小时18分',
							onlineCont: '1小时18分'
						}, ]
					]
				}
			}
		}
	}
</script>

<style scoped="">
	.homeSystem .van-search {
		padding: 0;
		background: white;
	}
</style>
