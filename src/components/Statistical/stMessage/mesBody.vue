<template>
	<div>
		<div style="margin: 20px auto;">
			<div class="dc-flex alit-center jc-between bg-gray1" style=";padding: 0 20px;margin: 15px 0;">
				<div>留言报表</div>
				<div class="dc-flex alit-center">
					<el-button>导出数据</el-button>
					<div class="dc-flex btn">
						<div :class='{"text-red" : activeBtn == 0}'>昨天</div>
						<div :class='{"text-red" : activeBtn == 1}'>近7天</div>
						<div :class='{"text-red" : activeBtn == 2}'>最近30天</div>
					</div>
					<div class="block">
						<el-date-picker v-model="dataValue" type="date" placeholder="选择日期" />
					</div>
				</div>
			</div>
			<div class="dc-flex jc-around">
				<div class="box" v-for="(item,index) in messages" :key='index'>
					<div class="dc-flex jc-center">
						{{ item['title'] }}
					</div>
					<div class="jc-center dc-flex">
						{{ item['num'] }}
					</div>
				</div>
			</div>
		</div>
		<div class="dc-flex jc-between">
			<div style="width: 49%;">
				<div class="title bg-gray1">
					留言来源
				</div>
				<div class='dc-flex jc-center'>
					<div v-echarts :style='{"width":"400px","height":"350px"}'></div>
				</div>
			</div>
			<div style="width: 49%;">
				<div class="title bg-gray1">
					留言来源
				</div>
				<div class='dc-flex jc-center'>
					<div v-echarts :style='{"width":"400px","height":"350px"}'></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Button,
		DatePicker
	} from 'element-ui'
	import echarts from 'echarts'
	export default {
		props: ['messages'],
		components: {
			[Button.name]: Button,
			[DatePicker.name]: DatePicker
		},
		data() {
			return {
				activeBtn: 0,
				dataValue: '',
				value: ''
			}
		},
		directives: {
			echarts: {
				inserted: function(el) { // 指令的定义
					// 基于准备好的dom，初始化echarts实例
					let myChart = echarts.init(el)
					// 绘制图表
					myChart.setOption({
						// title: {
						// 	text: '某站点用户访问来源',
						// 	subtext: '纯属虚构',
						// 	left: 'center'
						// },
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b} : {c} ({d}%)'
						},
						// legend: {
						// 	orient: 'vertical',
						// 	left: 'left',
						// 	data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
						// },
						series: [{
							name: '访问来源',
							type: 'pie',
							radius: '55%',
							center: ['50%', '60%'],
							data: [{
									value: 32.68,
									name: '其他'
								},
								{
									value: 12.43,
									name: 'app'
								},
								{
									value: 12.26,
									name: '微信端'
								},
								{
									value: 16.87,
									name: 'pc端'
								},
								{
									value: 25.75,
									name: '小程序'
								}
							],
							emphasis: {
								itemStyle: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}]
					});
				}
			}
		}
	}
</script>

<style scoped="">
	.btn>div {
		padding: 0 10px;
	}

	.box {
		border: 1px solid lightgray;
		color: gray;
		padding: 20px 80px;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-weight: bold;
		font-size: 14px;
		text-indent: 2rem;
		padding: 5px 0;
	}
</style>
