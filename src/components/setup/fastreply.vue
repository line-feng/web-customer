<template>
	<div>
		<top-title :title='"快捷回复"' />
		<div>
			<Button v-for='(item,index) in postList' :key='index' type="info" ghost @click='main(item["url"],item["inpList"],item["type"])'>
				{{ item['title'] }}
			</Button>
		</div>
		<div class="demo-spin-article">
			{{ htmlBody }}
			<Table :columns="columns" :data="data"></Table>
			<Spin size="large" fix v-if="spinShow"></Spin>
		</div>
		<Drawer :closable="false" v-model="bol">
			<div v-for='(item,index) in inpLists' :key='index'>
				{{ item['title'] }}
				<Input :placeholder="item['placeholder']" v-model='item["value"]' style="width: 100%" />
			</div>
			<Button type="info" ghost @click='submit()'>
				submit
			</Button>
		</Drawer>

	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const slBody = () => import('@/components/Service/servicelist/slBody');
	import {
		Input,
		Button,
		Message,
		Drawer,
		Table,
		Spin
	} from 'view-design'
	import axios from 'axios'
	import qs from 'qs'
	export default {
		components: {
			topTitle,
			slBody,
			[Input.name]: Input,
			[Button.name]: Button,
			[Spin.name]: Spin,
			[Table.name]: Table,
			[Drawer.name]: Drawer
		},
		data() {
			return {
				spinShow: false,
				columns: [],
				data: [],
				postList: [{
					title: '新增科目',
					url: 'http://139.9.169.87:8081/examsystem/addCourse',
					type: 'post',
					inpList: [{
						title: 'professional.id',
						value: '',
						placeholder: 'integer'
					}, {
						title: 'professional.professionalName',
						value: '',
						placeholder: 'string'
					}, {
						title: 'professional.professionalDesc',
						value: '',
						placeholder: 'string'
					}, {
						title: 'id',
						value: '',
						placeholder: 'integer'
					}, {
						title: 'courseName',
						value: '',
						placeholder: 'string'
					}, {
						title: 'courseDesc',
						value: '',
						placeholder: 'string'
					}, {
						title: 'professionalId',
						value: '',
						postData: 'data',
						placeholder: 'integer'
					}]
				}, {
					title: '查询科目信息，并分页显示',
					url: 'http://139.9.169.87:8081/examsystem/courseForPage',
					type: 'get',
					inpList: [{
						title: 'courseName',
						value: '',
						placeholder: 'string'
					}, {
						title: 'pageSize',
						value: '',
						placeholder: 'string'
					}, {
						title: 'currentPage',
						value: '',
						placeholder: 'integer'
					}]
				}, {
					title: '删除科目',
					url: 'http://139.9.169.87:8081/examsystem/deleteCourse',
					type: 'get',
					inpList: [{
						title: 'id',
						value: '',
						placeholder: 'string'
					}]
				}, {
					title: '查询所有科目',
					url: 'http://139.9.169.87:8081/examsystem/getAllCourse',
					inpList: []
				}, {
					title: '修改科目',
					url: 'http://139.9.169.87:8081/examsystem/updateCourse',
					type: 'post',
					inpList: [{
						title: 'professional.id',
						value: '',
						placeholder: 'integer'
					}, {
						title: 'professional.professionalName',
						value: '',
						placeholder: 'string'
					}, {
						title: 'professional.professionalDesc',
						value: '',
						placeholder: 'string'
					}, {
						title: 'id',
						value: '',
						placeholder: 'integer'
					}, {
						title: 'courseName',
						value: '',
						placeholder: 'string'
					}, {
						title: 'courseDesc',
						value: '',
						placeholder: 'string'
					}, {
						title: 'professionalId',
						value: '',
						postData: 'data',
						placeholder: 'integer'
					}]
				}, ],
				bol: false,
				url: '',
				type: 'get',
				inpLists: [],
				htmlBody: ''
			}
		},
		methods: {
			main(url, inpList, type) {
				this.bol = !this.bol
				this.inpLists = []
				this.inpLists = inpList
				this.url = url
				this.type = type
			},
			submit() {
				this.spinShow = true
				for (let i = 0; i < this.inpLists.length; i++) {
					if (this.inpLists[i]['placeholder'] == 'integer') {
						if (this.inpLists[i]['value'] == '' && isNaN(parseInt(this.inpLists[i]['value']))) {
							Message.warning({
								content: '"' + this.inpLists[i]['title'] + '"' + '类型错误！！！',
								duration: 5
							});
							return
						}
					}
				}

				let params = {},
					data = {}

				for (let i = 0; i < this.inpLists.length; i++) {
					if (!this.inpLists[i]['postData']) {
						params[this.inpLists[i]['title']] = this.inpLists[i]['value']
					} else {
						data[this.inpLists[i]['title']] = this.inpLists[i]['value']
					}
				}

				axios({
						url: this.url,
						method: this.type,
						params: params,
						data: qs.stringify(data)
					})
					.then(rel => {
						this.spinShow = false

						let dataD = '';
						// console.log(rel.data['data'])
						if (rel.data['data'] == null) {
							this.htmlBody = rel.data
							return
						} else if (Array.isArray(rel.data['data'])) {
							dataD = rel.data['data']
						} else {
							dataD = rel.data['data']['data']
						}

						// return
						if (rel.data['data'] != null && dataD != 'null') {
							this.columns = []
							for (let i in dataD[0]) {
								if (i == 'professional') {
									for (let j in dataD[0][i]) {
										this.columns.push({
											title: 'pro_' + j.replace(j.charAt(0), j.charAt(0).toUpperCase()),
											key: 'pro_' + j
										})
									}
								} else {
									this.columns.push({
										title: i.replace(i.charAt(0), i.charAt(0).toUpperCase()),
										key: i
									})
								}
							}

							for (let i = 0; i < dataD.length; i++) {
								let obj = dataD[i]['professional']
								delete dataD[i]['professional']
								for (let j in obj) {
									dataD[i]['pro_' + j] = obj[j]
								}
							}

							this.data = dataD

							Message.success({
								content: '成功！！！',
								duration: 2
							});
						}

					})

			}
		}
	}
</script>

<style>
</style>
