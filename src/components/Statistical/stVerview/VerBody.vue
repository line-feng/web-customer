<template>
	<div>
		<sys-header :sysHeaderData='sysHeaderData' />
		<div class="bg-gray1" style="border: 1px solid lightgray;width: 97.5%;margin: 10px auto;padding: 4px 0px;">
			<div class="dc-flex jc-between  alit-center text-weight" style="padding: 0 15px;">
				<div>
					在线服务数据趋势
				</div>
			</div>
			<div style="width: 100%;overflow: hidden;">
				<div v-echarts :style="{width: '1080px', height: '300px'}"></div>
			</div>
		</div>
		<div class="bg-gray1" style="border: 1px solid lightgray;width: 97.5%;margin: 10px auto;padding: 4px 0px;">
			<div class="dc-flex jc-between  alit-center text-weight" style="padding: 0 15px;">
				<div>
					在线服务数据趋势
				</div>
			</div>
			<div style="width: 1024px;overflow: hidden;">
				<div v-echarts :style="{width: '1024px', height: '300px'}"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	const sysHeader = () => import('@/components/HomeBody/homeSystem/sysHeader');
	export default {
		components: {
			sysHeader
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
			}
		},
		directives: {
			echarts: {
				inserted(el) {
					setTimeout(() => {
						let myChart = echarts.init(el);
						myChart.setOption({
							title: {
								text: ''
							},
							tooltip: {
								trigger: 'axis'
							},
							legend: {
								data: ['排队量', '已接入会话量', '未接入会话量', '会话总量']
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
								data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00']
							},
							yAxis: {
								type: 'value'
							},
							series: [{
									name: '排队量',
									type: 'line',
									stack: '总量',
									data: [120, 132, 101, 134, 90, 230, 210, 123, 321, 516, 161]
								},
								{
									name: '已接入会话量',
									type: 'line',
									stack: '总量',
									data: [220, 182, 191, 234, 290, 330, 310, 123, 321, 516, 161]
								},
								{
									name: '未接入会话量',
									type: 'line',
									stack: '总量',
									data: [150, 232, 201, 154, 190, 330, 410, 123, 321, 516, 161]
								},
								{
									name: '会话总量',
									type: 'line',
									stack: '总量',
									data: [320, 332, 301, 334, 390, 330, 320, 123, 321, 516, 161]
								}
							]
						});
					}, 2500)
				}
			}
		}
	}
</script>

<style>
</style>
