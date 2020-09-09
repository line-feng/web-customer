<template>
	<div class="slBody">
		<div class="bg-gray1" style="border: 1px solid lightgray;width: 97.5%;margin: 10px auto;">
			<div class="dc-flex jc-between  alit-center text-weight" style="padding: 5px 15px;">
				<div class="dc-flex alit-center">
					<Icon type="md-search" :size='20' />
					<span>数据总览</span>
				</div>
				<div class="dc-flex alit-center">
					<Icon type="ios-arrow-up" />
					<span>收起筛选</span>
				</div>
			</div>
			<div>
				<div class="dc-flex alit-center bg-white" style="padding: 10px 0;">
					<div class="dc-flex alit-center">
						<span style="margin: 0 5px;">
							筛选
						</span>
						<div>
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div style="margin: 0 15px;" class="dc-flex">
						<el-button style='margin: 0 15px;' @click='search()'>查询结果</el-button>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-gray1" style="border: 1px solid lightgray;width: 97.5%;margin: 10px auto;">
			<div class="dc-flex jc-between  alit-center text-weight" style="padding: 5px 15px;">
				<div class="dc-flex alit-center">
					<Icon type="ios-menu" :size='25' />
					<span>数据总览</span>
				</div>
				<div class="dc-flex alit-center">
					<el-button style='margin: 0 15px;' @click='addUser = true'>添加客服</el-button>
				</div>
			</div>
			<div style="position: relative;">
				<div class="loader" v-if="spinShow">
					<Spin fix>
						<Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
						<div>Loading</div>
					</Spin>
				</div>
				<el-table ref="multipleTable" :data="tableData[activeTab]" tooltip-effect="dark" style="width: 100%"
				 @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55" />
					<el-table-column label="姓名" width="180">
						<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
					<el-table-column prop="username" label="帐号" width="180" />
					<el-table-column prop="phone" label="手机号" width='150' />
					<el-table-column prop="servicegroup" label="客服分组" width='180' />
					<el-table-column prop="switchs" label="账户启用状态" width="190">
						<template slot-scope="scope">
							<el-switch v-model="scope.row.switchs" disabled active-color="#13ce66" inactive-color="red" />
						</template>
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="100">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" @click='remove(scope.row)'>删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div style="padding: 10px 0;" class="bg-white dc-flex jc-between">
					<div>
						<el-checkbox style="margin: 5px 20px;" @click="setCurrent(tableData[activeTab])" v-model="checked">全选</el-checkbox>
						<el-button style='margin: 0 15px;' @click='removeLists()'>删除</el-button>
					</div>
					<Page :total="tableData.length * 10" show-elevator @on-change='tabs' />
				</div>
			</div>
		</div>

		<el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
			<div class="dc-flex flex-column jc-between alit-center">
				<div style="width: 10%;">
					姓名
				</div>
				<el-input v-model="editor['name']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column jc-between alit-center">
				<div style="width: 10%;">
					账号
				</div>
				<el-input v-model="editor['username']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column jc-between alit-center">
				手机号
				<el-input v-model="editor['phone']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column jc-between alit-center">
				客服分组
				<el-input v-model="editor['servicegroup']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column alit-center marTb-len-1">
				<div style="margin: 0 15px;">
					账户启用状态
				</div>
				<el-switch v-model="editor['switchs']" active-color="#13ce66" inactive-color="red" />
			</div>
		</el-drawer>


		<el-drawer title="我是标题" :visible.sync="addUser" :with-header="false">
			<div class="dc-flex flex-column jc-between alit-center">
				<div style="width: 10%;">
					姓名
				</div>
				<el-input v-model="user['name']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column jc-between alit-center">
				<div style="width: 10%;">
					账号
				</div>
				<el-input v-model="user['username']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column jc-between alit-center">
				手机号
				<el-input v-model="user['phone']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column jc-between alit-center">
				客服分组
				<el-input v-model="user['servicegroup']" style="width: 80%;" />
			</div>
			<div class="dc-flex flex-column alit-center marTb-len-1">
				<div style="margin: 0 15px;">
					账户启用状态
				</div>
				<el-switch v-model="user['switchs']" active-color="#13ce66" inactive-color="red" />
			</div>
			<el-button @click='addLists()'>添加</el-button>
		</el-drawer>

	</div>
</template>

<script>
	import {
		Input,
		Button,
		Select,
		Option,
		Table,
		TableColumn,
		Checkbox,
		Switch,
		Drawer,
		Message
	} from 'element-ui'
	import {
		Icon,
		Page,
		Spin,
		Circle
	} from 'view-design'
	export default {
		props: ['slBody'],
		components: {
			[Circle.name]: Circle,
			[Drawer.name]: Drawer,
			[Icon.name]: Icon,
			[Spin.name]: Spin,
			[Table.name]: Table,
			[Checkbox.name]: Checkbox,
			[TableColumn.name]: TableColumn,
			[Button.name]: Button,
			[Switch.name]: Switch,
			[Select.name]: Select,
			[Option.name]: Option,
			[Page.name]: Page,
			[Input.name]: Input
		},
		data() {
			return {
				spinShow: true,
				input: '',
				checked: false,
				addUser: false,
				drawer: false,
				options: this.slBody.options,
				value: this.slBody.value,
				tableData: this.slBody.tableData,
				multipleSelection: this.slBody.multipleSelection,
				searchList: [],
				activeTab: 0,
				editor: {
					name: 'fh',
					username: 'fuhao',
					phone: '15576809957',
					servicegroup: '客服1',
					switchs: true
				},
				user: {
					name: '',
					username: '',
					phone: '',
					servicegroup: '',
					switchs: true
				},
				location: {
					index1: '',
					index2: ''
				}
			}
		},
		watch: {
			checked() {
				if (this.checked) {
					this.toggleSelection(this.tableData[this.activeTab])
				} else {
					this.toggleSelection()
				}
			},
			slBody() {
				this.options = this.slBody.options;
				this.value = this.slBody.value;
				this.tableData = this.slBody.tableData;
				this.multipleSelection = this.slBody.multipleSelection;
				this.spinShow = false
			}
		},
		created() {
			if (this.$route['path'] != '/home/servicelist') {
				this.spinShow = false
			}
		},
		methods: {
			//查
			search() {
				this.tableData = this.slBody.tableData;

				if (this.value == 'null') {
					indexArr('name', this.input, this.tableData, this.searchList)
					if (this.searchList.length > 8) {
						this.tableData = parsArr(this.searchList)
						this.searchList = []
					} else {
						this.tableData = [this.searchList]
						this.searchList = []
					}
				}

				if (this.value != 'null') {
					indexArr(this.value, this.input, this.tableData, this.searchList)
					if (this.searchList.length > 8) {
						this.tableData = parsArr(this.searchList)
						this.searchList = []
					} else {
						this.tableData = [this.searchList]
						this.searchList = []
					}
				}

				function indexArr(name, input, tableData, searchList) {
					for (let i = 0; i < tableData.length; i++) {
						for (let j = 0; j < tableData[i].length; j++) {
							if (tableData[i][j][name].indexOf(input) != -1) {
								searchList.push(tableData[i][j])
							}
						}
					}
				}

				function parsArr(arrList) {

					let arr = [],
						arr2 = [];
					for (let i = 0; i < arrList.length; i++) {
						if (arr2.length == 8) {
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

			},
			//更新table表格
			uptatedTable() {
				if (this.activeTab != this.tableData.length - 1) {
					for (let i = 0; i < this.tableData.length - (1 + this.activeTab); i++) {
						if (this.tableData[this.tableData.length - (i + 1)].length > 0) {
							this.tableData[this.tableData.length - (i + 2)].push(this.tableData[this.tableData.length - (i + 1)][0])
							this.tableData[this.tableData.length - (i + 1)].splice(0, 1)
							if (this.tableData[this.tableData.length - (i + 1)].length == 0) {
								this.tableData.splice(this.tableData.length - (i + 1), 1)
								console.log(this.tableData.length)
								i -= 1
							}
						}
					}
				} else {
					if (this.tableData[this.tableData.length - 1].length == 0) {
						this.tableData.splice(this.tableData.length - 1, 1)
						this.activeTab -= 1
					}
				}
			},
			//增
			addLists() {
				if(this.input != '' || this.value != 'null'){
					Message.error('搜索时不能添加！！！');
					return
				}
				let bol = true;

				for (let i in this.user) {
					if (this.user[i] === '') {
						Message.error('不能为空！！！');
						return
					}
				}

				for (let i = 0; i < this.tableData.length; i++) {
					if (this.tableData[i].length < 8) {
						this.tableData[i].push(this.user)
						Message.success('添加成功！！！');
						this.addUser = false
						bol = false
					}
				}

				if (bol) {
					this.tableData.push([this.user])
					this.addUser = false
				}

				this.user = {
					name: '',
					username: '',
					phone: '',
					servicegroup: '',
					switchs: true
				}

			},
			//删除选中
			removeLists() {
				for (let i = 0; i < this.multipleSelection.length; i++) {
					this.tableData[this.activeTab].splice([this.tableData[this.activeTab].indexOf(this.multipleSelection[i])], 1)
					this.uptatedTable()
				}
				this.checked = false
			},
			//删
			remove(row) {
				this.tableData[this.activeTab].splice([this.tableData[this.activeTab].indexOf(row)], 1)
				this.uptatedTable()
			},
			//改
			handleClick(row) {
				this.drawer = true
				this.editor = row
			},
			tabs(val) {
				this.checked = false
				this.activeTab = val - 1
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
	.slBody>>>.cell {
		text-align: center;
	}

	.demo-spin-icon-load {
		animation: ani-demo-spin 1s linear infinite;
	}

	@keyframes ani-demo-spin {
		from {
			transform: rotate(0deg);
		}

		50% {
			transform: rotate(180deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.demo-spin-col {
		height: 100px;
		position: relative;
		border: 1px solid #eee;
	}
</style>
