<template>
	<div class="DaoH">
		<div class="" style="height: 100%;">
			<el-tabs :tab-position="tabPosition" style='height: 100%;'>
				<el-tab-pane :label="item['title']" v-for='(item,index) in leftHomeLists' :key='index'>

					<div v-show="index == In" style="background: white;" v-for="(It,In) in leftHomeLists.length" :key='In + "1"'>
						<homeLists :item='item["item"]' />
					</div>

				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import {
		Tabs,
		TabPane
	} from 'element-ui'
	import homeLists from '@/components/Home/homeLists'
	export default {
		components: {
			[Tabs.name]: Tabs,
			[TabPane.name]: TabPane,
			homeLists
		},
		data() {
			return {
				tabPosition: 'left',
				leftHomeLists: [{
						title: '首页',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页",
									path: '/systemhome'
								},
								{
									title: '个人资料设置',
									path: '/datasetting'
								},
								{
									title: '消息中心',
									path: '/messagecenter'
								},
								{
									title: '登录日志',
									path: '/loginlog'
								}
							]
						}
					},
					{
						title: '统计',
						item: {
							title: '统计分析',
							litsts: [{
									title: "总览统计",
									path: '/stverview'
								},
								{
									title: '客服统计',
									path: '/stservice'
								},
								{
									title: '留言统计',
									path: '/stmessage'
								},
								{
									title: '机器人统计',
									path: '/strobot'
								}
							]
						}
					},
					{
						title: '客服',
						item: {
							title: '客服管理',
							litsts: [{
									title: "客服列表",
									path: '/servicelist'
								},
								{
									title: '客服小组',
									path: '/servicelistteam'
								}
							]
						}
					},
					{
						title: '历史',
						item: {
							title: '历史管理',
							litsts: [{
								title: "历史列表",
								path: '/historylist'
							}]
						}
					},
					{
						title: '客户',
						item: {
							title: '客户管理',
							litsts: [{
								title: "客户列表",
								path: '/customer'
							}]
						}
					}, {
						title: '公告',
						item: {
							title: '公告管理',
							litsts: [{
								title: "公告列表",
								path: '/announcement'
							}]
						}
					},

					{
						title: '知识',
						item: {
							title: '知识管理',
							litsts: [{
									title: "知识列表",
									path: '/knowledgelist'
								},
								{
									title: '分类管理',
									path: '/classification'
								}
							]
						}
					},
					{
						title: '权限',
						item: {
							title: '权限管理',
							litsts: [{
									title: "角色管理",
									path: '/role'
								},
								{
									title: '成员管理',
									path: '/Members'
								},
								{
									title: '角色说明',
									path: '/instructions'
								},
								{
									title: '操作日志',
									path: '/operationlog'
								}
							]
						}
					},
					{
						title: '设置',
						item: {
							title: '客服设置',
							litsts: [{
									title: "快捷回复",
									path: '/fastreply'
								},
								{
									title: '站点设置',
									path: '/siteset'
								}
							]
						}
					}
				]
			}
		}
	}
</script>

<style>
	.DaoH {
		height: 93%;
	}

	.DaoH .el-tabs__content {
		height: 100%;
	}

	.DaoH .el-tab-pane {
		height: 100%;
	}

	.DaoH .el-tab-pane>div {
		height: 100%;
	}
</style>
