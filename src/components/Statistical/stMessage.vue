<template>
	<div>
		<top-title :title='"留言统计"' />
		<mes-body :messages='messages' />
	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const mesBody = () => import('@/components/Statistical/stMessage/mesBody');
	export default{
		components:{
			topTitle,
			mesBody
		},
		data(){
			return{
				messages:[{
					title:'总留言数',
					num:'200'
				},
				{
					title:'待处理留言数',
					num:'5000'
				},
				{
					title:'已处理留言数',
					num:'5000'
				}]
			}
		}
	}
</script>

<style>
</style>
