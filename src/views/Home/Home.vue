<template>
	<div style="display: flex;height: 100%;flex-direction: column;">
		<mian-header />
		<mian-body />
	</div>
</template>

<script>
	import mianHeader from '@/components/Home/mianHeader'
	import mianBody from '@/components/Home/mianBody'
	export default{
		components:{
			mianHeader,
			mianBody
		}
	}
</script>