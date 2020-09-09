<template>
	<div>
		<top-title :title='"总览统计"' />
		<verBody />
	</div>
</template>

<script>
	const topTitle = () => import('@/components/topTitle');
	const VerBody = () => import('@/components/Statistical/stVerview/VerBody');
	export default{
		components:{
			topTitle,
			VerBody
		}
	}
</script>

<style>
</style>
