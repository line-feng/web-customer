<template>
	<div class="loBody">
		<div style="padding: 5px 30px;margin: 0 auto;border-bottom: 1px solid lightgray;" class="bg-gray1">
			<div class="dc-flex jc-between">
				<div class="dc-flex alit-center text-size-2">
					<i class="el-icon-s-fold text-size-3"></i>
					<span>列表</span>
				</div>
				<div>
					<el-button>清除近30天</el-button>
				</div>
			</div>
		</div>
		<el-table :data="tableData" stripe style="width: 100%" class='Tab'>
			<el-table-column prop="date" label="时间" width="450">
			</el-table-column>
			<el-table-column prop="name" label="IP" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地区">
			</el-table-column>
		</el-table>
		<div class="dc-flex jc-end">
			<Page :total="100" show-elevator />
		</div>
	</div>
</template>

<script>
	import {
		Button,
		Table,
		TableColumn
	} from 'element-ui'
	import {
		Page
	} from 'view-design';
	export default {
		props: ['tableDatas'],
		components: {
			[Button.name]: Button,
			[Table.name]: Table,
			[TableColumn.name]: TableColumn,
			[Page.name]: Page
		},
		data() {
			return {
				tableData: []
			}
		},
		created() {
			this.tableData = this.tableDatas
		}
	}
</script>

<style scoped="">
	.Tab>>>.cell {
		text-align: center;
	}
</style>
