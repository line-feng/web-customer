<template>
	<div class="serBody">
		<div class="bg-gray1 paddTb-len-1 marTb-len-1" style="text-indent: 2rem;">
			客服数据报表
		</div>
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick" style='width: 95%;margin: 0 auto;'>
			<el-tab-pane label="工作量" name="first">
				<div class="dc-flex alit-center jc-between">
					<div>工作量报表</div>
					<div class="dc-flex alit-center">
						<el-button>导出数据</el-button>
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
				<el-table :data="workloads" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
					<el-table-column prop="name" label="姓名" sortable width="80" />
					<el-table-column prop="date" label="接入会话量" sortable width="120" />
					<el-table-column prop="session" label="未回复会话量" sortable width="220" />
					<el-table-column prop="notReturn" label="未回复率" sortable width="180" />
					<el-table-column prop="amount" label="转接量" sortable width="120" />
					<el-table-column prop="invalids" label="无效会话量" sortable width="180" />
					<el-table-column prop="message" label="留言处理量" sortable width="180" />
					<el-table-column prop="loginTime" label="登陆时长" sortable width="180" />
					<el-table-column prop="onlineTime" label="在线总时长" sortable width="180" />
					<el-table-column prop="loginAccounted" label="在线时长占比" sortable width="180" />
					<el-table-column prop="outTime" label="离开总时长" sortable width="180" />
					<el-table-column prop="outAccounted" label="离开起时长占比" sortable width="180" />
					<el-table-column prop="restTime" label="休息总时长" sortable width="180" />
					<el-table-column prop="resAccounted" label="休息总时长占比" sortable width="180" />
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="工作质量" name="second">
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
				<el-table :data="Qualitys" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
					<el-table-column prop="name" label="姓名" sortable width="80" />
					<el-table-column prop="date" label="接入会话量" sortable width="120" />
					<el-table-column prop="session" label="未回复会话量" sortable width="220" />
					<el-table-column prop="notReturn" label="未回复率" sortable width="180" />
					<el-table-column prop="amount" label="转接量" sortable width="120" />
					<el-table-column prop="invalids" label="无效会话量" sortable width="180" />
					<el-table-column prop="message" label="留言处理量" sortable width="180" />
					<el-table-column prop="loginTime" label="登陆时长" sortable width="180" />
					<el-table-column prop="onlineTime" label="在线总时长" sortable width="180" />
					<el-table-column prop="loginAccounted" label="在线时长占比" sortable width="180" />
					<el-table-column prop="outTime" label="离开总时长" sortable width="180" />
					<el-table-column prop="outAccounted" label="离开起时长占比" sortable width="180" />
					<el-table-column prop="restTime" label="休息总时长" sortable width="180" />
					<el-table-column prop="resAccounted" label="休息总时长占比" sortable width="180" />
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="绩效报表" name="third">
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
				<el-table :data="Performances" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
					<el-table-column prop="name" label="姓名" sortable width="80" />
					<el-table-column prop="date" label="接入会话量" sortable width="120" />
					<el-table-column prop="session" label="未回复会话量" sortable width="220" />
					<el-table-column prop="notReturn" label="未回复率" sortable width="180" />
					<el-table-column prop="amount" label="转接量" sortable width="120" />
					<el-table-column prop="invalids" label="无效会话量" sortable width="180" />
					<el-table-column prop="message" label="留言处理量" sortable width="180" />
					<el-table-column prop="loginTime" label="登陆时长" sortable width="180" />
					<el-table-column prop="onlineTime" label="在线总时长" sortable width="180" />
					<el-table-column prop="loginAccounted" label="在线时长占比" sortable width="180" />
					<el-table-column prop="outTime" label="离开总时长" sortable width="180" />
					<el-table-column prop="outAccounted" label="离开起时长占比" sortable width="180" />
					<el-table-column prop="restTime" label="休息总时长" sortable width="180" />
					<el-table-column prop="resAccounted" label="休息总时长占比" sortable width="180" />
				</el-table>
			</el-tab-pane>
		</el-tabs>
		<div class="dc-flex jc-end">
			<Page :total="100" show-elevator />
		</div>
	</div>
</template>

<script>
	import {
		Tabs,
		TabPane,
		Table,
		TableColumn,
		Button,
		DatePicker
	} from 'element-ui'
	import {
		Search
	} from 'vant';
	import {
		Page
	} from 'view-design'
	export default {
		props: ['workload', 'Quality', 'Performance'],
		components: {
			[Tabs.name]: Tabs,
			[Table.name]: Table,
			[TableColumn.name]: TableColumn,
			[TabPane.name]: TabPane,
			[DatePicker.name]: DatePicker,
			[Button.name]: Button,
			[Page.name]: Page,
			[Search.name]: Search
		},
		data() {
			return {
				activeName: 'first',
				activeBtn: 1,
				dataValue: '',
				value: '',
				tableDatas: '',
				workloads: '',
				Qualitys: '',
				Performances: ''
			}
		},
		created() {
			this.workloads = this.workload
			this.Qualitys = this.Quality
			this.Performances = this.Performance
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			formatter(row, column) {
				return row.address;
			}
		}
	}
</script>

<style scoped="">
	.btn>div {
		padding: 0 10px;
	}

	.serBody>>>.cell {
		text-align: center;
	}
</style>
