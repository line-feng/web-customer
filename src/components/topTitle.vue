<template>
	<div>
		<div class="dc-flex jc-between bg-gray1">
			<div style="margin: 12px 15px;" class="dc-flex alit-center text-weight text-gray2">
				<span class="f-icon"></span>
				<div class="mar-left-len-1">
					{{ title }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['title']
	}
</script>

<style scoped="">
	.f-icon{
		width: 5px;
		height: 25px;
		background: #1ABC9C;
	}
</style>
