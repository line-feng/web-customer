<template>
	<div class="mgBody">
		<div class="dc-flex jc-between">
			<div class="dc-flex alit-center text-size-2">
				<i class="el-icon-s-fold text-size-3" @click="show3 = !show3"></i>
				<span>列表</span>
			</div>
			<div>
				<el-button @click='removeList()'>删除选中</el-button>
			</div>
		</div>
		<el-collapse-transition>
			<div v-show="show3">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="消息标题" width="200">
						<template slot-scope="scope">{{ scope.row.title }}</template>
					</el-table-column>
					<el-table-column prop="time" label="发布时间" width="200">
					</el-table-column>
					<el-table-column prop="name" label="发布人员" show-overflow-tooltip>
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="120">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="toView(scope.row)">查看</el-button>
							<el-button type="text" size="small" @click='remove(scope.row)'>
								移除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="dc-flex jc-between" style="margin-top: 20px;margin-left: 10px;">
					<el-checkbox v-model="checked">全部选中</el-checkbox>
					<Page :total="100" show-elevator />
				</div>
			</div>
		</el-collapse-transition>

		<el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">

			<el-input v-model="listObj['title']" :disabled="true"></el-input>
			<el-input v-model="listObj['time']" :disabled="true"></el-input>
			<el-input v-model="listObj['name']" :disabled="true"></el-input>

		</el-drawer>
	</div>
</template>

<script>
	import {
		Table,
		TableColumn,
		Button,
		Checkbox,
		Drawer,
		Input
	} from 'element-ui'
	import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
	import {
		Page
	} from 'view-design'
	export default {
		props: ['tableDatas'],
		components: {
			[Table.name]: Table,
			[CollapseTransition.name]: CollapseTransition,
			[Input.name]: Input,
			[Drawer.name]: Drawer,
			[TableColumn.name]: TableColumn,
			[Checkbox.name]: Checkbox,
			[Button.name]: Button,
			[Page.name]: Page
		},
		data() {
			return {
				show3: true,
				checked: false,
				tableData: [],
				multipleSelection: [],
				drawer: false,
				input: '',
				listObj: {
					title: '',
					time: '',
					name: ''
				}
			}
		},
		watch: {
			checked() {
				if (this.checked) {
					this.toggleSelection(this.tableData)
				} else {
					this.toggleSelection()
				}
			}
		},
		created() {
			this.tableData = this.tableDatas
		},
		methods: {
			removeList() {
				for (let i = 0; i < this.multipleSelection.length; i++) {
					this.tableData.splice(this.tableData.indexOf(this.multipleSelection[i]), 1)
				}
			},
			remove(item) {
				this.tableData.splice(this.tableData.indexOf(item), 1)
			},
			toView(item) {
				this.drawer = true
				this.listObj = item
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		}
	}
</script>

<style scoped="">
	.mgBody {
		width: 95%;
		margin: 15px auto;
	}
</style>
