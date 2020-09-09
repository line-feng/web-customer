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
				<div class="box" v-for="(item,index) in robots" :key='index'>
					<div class="dc-flex jc-center">
						{{ item['title'] }}
					</div>
					<div class="jc-center dc-flex">
						{{ item['num'] }}
					</div>
					<hr style="margin: 5px 0;" />
					<div class="text-center">
						<div v-for="(It,In) in item['chiles']" :key='In+"1"'>
							<div>
								{{ It['title'] }}:{{It['num']}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="width: 95%;margin: 0 auto;">
			<div class="dc-flex alit-center jc-between">
				<div>工作量报表</div>
				<div class="dc-flex alit-center">
					<el-button>默认按钮</el-button>
					<div class="dc-flex btn">
						<div :class='{"text-red" : activeBtn == 0}'>昨天</div>
						<div :class='{"text-red" : activeBtn == 1}'>本周</div>
						<div :class='{"text-red" : activeBtn == 2}'>本月</div>
					</div>
					<div class="block">
						<el-date-picker v-model="dataValue" type="date" placeholder="选择日期" />
					</div>
					<van-search v-model="value" placeholder="输入客服名" />
				</div>
			</div>
			<div v-echarts :style="{'width':'1024px','height':'300px'}"></div>
		</div>
	</div>
</template>

<script>
	import {
		Button,
		DatePicker
	} from 'element-ui'
	import {
		Search
	} from 'vant'
	import echarts from 'echarts'
	export default {
		props: ['robots'],
		components: {
			[Button.name]: Button,
			[DatePicker.name]: DatePicker,
			[Search.name]: Search
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
						title: {
							text: '折线图堆叠'
						},
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						toolbox: {
							feature: {
								saveAsImage: {}
							}
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
						},
						yAxis: {
							type: 'value'
						},
						series: [{
								name: '邮件营销',
								type: 'line',
								stack: '总量',
								data: [120, 132, 101, 134, 90, 230, 210]
							},
							{
								name: '联盟广告',
								type: 'line',
								stack: '总量',
								data: [220, 182, 191, 234, 290, 330, 310]
							},
							{
								name: '视频广告',
								type: 'line',
								stack: '总量',
								data: [150, 232, 201, 154, 190, 330, 410]
							},
							{
								name: '直接访问',
								type: 'line',
								stack: '总量',
								data: [320, 332, 301, 334, 390, 330, 320]
							},
							{
								name: '搜索引擎',
								type: 'line',
								stack: '总量',
								data: [820, 932, 901, 934, 1290, 1330, 1320]
							}
						]
					});
				}
			}
		}
	}
</script>

<style scoped="">
	.btn>div {
		padding: 0 5px;
	}

	.box {
		border: 1px solid lightgray;
		color: gray;
		padding: 20px 0px;
		align-items: center;
		justify-content: center;
		width: 18%;
	}

	.title {
		font-weight: bold;
		font-size: 14px;
		text-indent: 2rem;
		padding: 5px 0;
	}
</style>
