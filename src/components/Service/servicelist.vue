<template>
	<div>
		<top-title :title='"客服列表"' />
		
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
				slBody: ''
			}
		},
		created() {
			let _this = this
			let obj = this.$store.commit('dataGet', {
				url: 'https://www.fastmock.site/mock/978f8343c7cfbee53ce6c97c7ebd3919/api/table',
				callback(rel, context) {
					_this.slBody = rel.data
				}
			})
			this.slBody = {
				options: [{
					value: 'null',
					label: 'null'
				}],
				value: 'null',
				tableData: [
					[{
						name: 'fh',
						username: 'fuhao',
						phone: '15576809957',
						servicegroup: '客服1',
						switchs: true
					}]
				],
				multipleSelection: []
			}
		}
	}
</script>

<style>
</style>
