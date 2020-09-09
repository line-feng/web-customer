<template>
	<div>
		<top-title :title='"知识列表"' />
		<sl-body :slBody='slBody' />
	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const slBody = () => import('@/components/Service/servicelist/slBody');
	export default {
		components: {
			topTitle,
			slBody
		},
		data() {
			return {
				slBody: {
					options: [{
						value: 'null',
						label: 'null'
					},{
						value: 'name',
						label: '姓名'
					}, {
						value: 'username',
						label: '账号'
					}, {
						value: 'phone',
						label: '手机号'
					}, {
						value: 'servicegroup',
						label: '客服分组'
					}],
					value: 'null',
					tableData: [
						[{
								name: 'fh',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号1',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							},
							{
								name: '符号2',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号3',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号4',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							},
							{
								name: '符号5',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							},
							{
								name: '符号6',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号7',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							}
						],
						[{
								name: 'qwe',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							},
							{
								name: '123',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '1238',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号9',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号10',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							},
							{
								name: '符号11',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号12',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号13',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							}
						],
						[{
								name: 'qwe',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							},
							{
								name: '123',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '1238',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号9',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号10',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							},
							{
								name: '符号11',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号12',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: true
							},
							{
								name: '符号13',
								username: 'fuhao',
								phone: '15576809957',
								servicegroup: '客服1',
								switchs: false
							}
						]
					],
					multipleSelection: []
				}
			}
		}
	}
</script>

<style>
</style>
