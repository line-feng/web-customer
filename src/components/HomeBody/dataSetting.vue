<template>
	<div>
		<top-title :title='"个人资料设置"' />
		<das-body />
	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const dasBody = () => import('@/components/HomeBody/dataSetting/dasBody');
	export default{
		components:{
			topTitle,
			dasBody
		}
	}
</script>

<style>
</style>
