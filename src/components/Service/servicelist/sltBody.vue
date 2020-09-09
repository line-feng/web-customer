<template>
	<div class="sltBody">
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
						<el-button style='margin: 0 15px;'>查询结果</el-button>
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
					<el-button style='margin: 0 15px;'>添加客服</el-button>
				</div>
			</div>
			<div>
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55" />
					<el-table-column prop="teamname" label="小组名称" width="200" />
					<el-table-column prop="num" label="小组成员数" width="200" />
					<el-table-column prop="name" label="组长" width='200' />
					<el-table-column prop="platform" label="所属" width='200' />
					<el-table-column fixed="right" label="操作" width="200">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
							<el-button type="text" size="small">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div style="padding: 10px 0;" class="bg-white">
					<el-checkbox style="margin: 0 10px;" v-model="checked">全选</el-checkbox>
				</div>
			</div>
		</div>
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
		Switch
	} from 'element-ui'
	import {
		Icon
	} from 'view-design'
	export default {
		props: ['sltBody'],
		components: {
			[Icon.name]: Icon,
			[Table.name]: Table,
			[Checkbox.name]: Checkbox,
			[TableColumn.name]: TableColumn,
			[Button.name]: Button,
			[Switch.name]: Switch,
			[Select.name]: Select,
			[Option.name]: Option,
			[Input.name]: Input
		},
		data() {
			return {
				input: '',
				checked: false,
				options: this.sltBody.options,
				value: this.sltBody.value,
				tableData: this.sltBody.tableData,
				multipleSelection:this.sltBody.multipleSelection
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
		methods: {
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
			},
			handleClick(row) {
				console.log(row);
			}
		}
	}
</script>

<style>
	.sltBody >>> .cell{
		text-align: center;
	}
</style>
