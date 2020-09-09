<template>
	<div>
		<div class="bg-gray1" style="border: 1px solid lightgray;width: 97.5%;margin: 10px auto;">
			<div class="dc-flex jc-between  alit-center text-weight" style="padding: 0 15px;">
				<div>
					数据总览
				</div>
				<div style="width: 150px;">

					<div class="demo-input-suffix">
						<el-select v-model="value" placeholder="所有客服组">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>

				</div>
			</div>

			<div class="Lists dc-flex jc-between bg-white text-size-1 text-gray2 text-weight" style="width: 100%;padding:15px;">
				<div v-for="(item,index) in LineUps" :key='index' style="border: 1px solid lightgray;flex: 1;margin: 0 5px;" class="bg-white">
					<div class="dc-flex alit-center jc-center" style="border-bottom: 1px solid lightgray;padding: 15px 0px;">
						<i :class="item['Icon']" class="text-size-5" style="color: #1ABC9C;"></i>
						<div style="margin-left: 5px;">
							<div>
								{{ item['title'] }}
							</div>
							<div class="text-size-01">
								{{ item['num' ]}}
							</div>
						</div>
					</div>
					<div class="text-center" style="padding: 10px 0;">
						<div>
							{{ item['subTitle'] }} <span class="text-size-01">{{ item['CustomerServices'] }}</span>
						</div>
						<div v-if="item['linesTitle']">
							{{ item['linesTitle'] }} <span class="text-size-01">{{ item['lines'] }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Select,
		Option
	} from 'element-ui'
	export default {
		props:['sysHeaderData'],
		components: {
			[Select.name]: Select,
			[Option.name]: Option,
		},
		data() {
			return {
				value: '',
				options: [],
				LineUps: []
			}
		},
		created() {
			this.value= this.sysHeaderData.value,
			this.options= this.sysHeaderData.options,
			this.LineUps= this.sysHeaderData.LineUps
		}
	}
</script>

<style>
</style>
