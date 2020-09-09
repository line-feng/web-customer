<template>
	<div class="bg-gray1" style="border: 1px solid lightgray;width: 97.5%;margin: 10px auto;padding: 4px 0px;">
		<div class="dc-flex jc-between  alit-center text-weight" style="padding: 0 15px;">
			<div>
				在线服务数据趋势
			</div>
			<div class="dc-flex alit-center">
				<van-search v-model="search" placeholder="请输入搜索关键词" @input='Inp()' />
				<el-select v-model="value" placeholder="请选择全部状态">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
		</div>
		<div style="width: 100%;overflow: hidden;" class="tab">
			<el-table :data="tableData[active]" border style="width: 100%">
				<el-table-column prop="name" label="客服" width="120" />
				<el-table-column prop="online" label="在线状态" width="182" />
				<el-table-column prop="event" label="当前接待量" width="140" />
				<el-table-column prop="session" label="累计会话量" width="140" />
				<el-table-column prop="message" label="相对满意试" width="140" />
				<el-table-column prop="onlineTime" label="累计在线时间" width="190" />
				<el-table-column prop="onlineCont" label="累计休息时长" width="190" />
			</el-table>
			<div class="dc-flex jc-end">
				<Page :total="tableData.length * 10" show-elevator @on-change='tabssss' />
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Select,
		Option,
		Table,
		TableColumn
	} from 'element-ui'
	import {
		Page
	} from 'view-design'
	import {
		Search
	} from 'vant'
	export default {
		props: ['sysTable'],
		components: {
			[Option.name]: Option,
			[Select.name]: Select,
			[Search.name]: Search,
			[Table.name]: Table,
			[TableColumn.name]: TableColumn,
			[Page.name]: Page
		},
		data() {
			return {
				value: '',
				search: '',
				tableData: [],
				options: [],
				active: 0,
				searchList: []
			}
		},
		watch: {
			value() {
				this.Inp()
			}
		},
		created() {
			this.value = this.sysTable.value;
			this.value = this.sysTable.value;
			this.search = this.sysTable.search;
			this.tableData = this.sysTable.tableData;
			this.options = this.sysTable.options;
		},
		methods: {
			tabssss(val) {
				this.active = val - 1
			},
			Inp() {
				this.tableData = this.sysTable.tableData;

				if (this.search != '') {
					indexArr('name', this.search, this.tableData, this.searchList)
					if (this.searchList.length > 7) {
						this.tableData = parsArr(this.searchList)
						this.searchList = []
					} else {
						this.tableData = [this.searchList]
						this.searchList = []
					}
				}

				if (this.value != 'null') {
					indexArr('online', this.value, this.tableData, this.searchList)
					if (this.searchList.length > 7) {
						this.tableData = parsArr(this.searchList)
						this.searchList = []
					} else {
						this.tableData = [this.searchList]
						this.searchList = []
					}
				}

			


				function indexArr(name, value, tableData, searchList) {
					for (let i = 0; i < tableData.length; i++) {
						for (let j = 0; j < tableData[i].length; j++) {
							if (tableData[i][j][name].indexOf(value) != -1) {
								searchList.push(tableData[i][j])
							}
						}
					}
				}

				function parsArr(arrList) {

					let arr = [],
						arr2 = [];
					for (let i = 0; i < arrList.length; i++) {
						if (arr2.length == 7) {
							arr.push(arr2);
							arr2 = []
						}
						arr2.push(arrList[i])
					}
					if (arr.length != 0) {
						arr.push(arr2);
					}
					return arr
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

	.tab>>>.el-table .cell {
		text-align: center;
	}
</style>
