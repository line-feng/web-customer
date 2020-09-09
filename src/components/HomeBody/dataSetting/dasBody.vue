<template>
	<div class="dasBody">
		<div style="margin: 6% auto;width: 25%;">
			<div class="demo-input-suffix dc-flex inpDiv text-size-01 jc-between" v-for="(item,index) in InpLists" :key='index'>
				<div class="dc-flex alit-center">
					<span class="text-red">*</span>
					<div style="margin: 0 5px;">
						{{ item['Title'] }}<span class="text-weight">:</span>
					</div>
				</div>
				<el-input v-model="item['value']" style="70%" :type='item["type"]' :disabled="item['disabled']" />
			</div>
			<div class="dc-flex jc-center">
				<el-button type="success" @click='submit()'>提交</el-button>
			</div>
		</div>

		<div class="text-center">
			Copyright © 在线客服管理系统, All Rights Reserved.
		</div>
	</div>
</template>

<script>
	import {
		Input,
		Button,
		Notification
	} from 'element-ui'
	export default {
		components: {
			[Input.name]: Input,
			[Notification.name]: Notification,
			[Button.name]: Button
		},
		data() {
			return {
				InpLists: [{
						Title: '账号',
						value: '',
						disabled: true,
						type: 'text'
					},
					{
						Title: '手机号',
						value: '15576809957',
						disabled: false,
						type: 'text'
					},
					{
						Title: '邮箱',
						value: '15576809957@163.com',
						disabled: false,
						type: 'text'
					},
					{
						Title: '昵称',
						value: '',
						disabled: false,
						type: 'text'
					},
					{
						Title: '旧密码',
						value: '',
						disabled: false,
						type: 'password'
					},
					{
						Title: '新密码',
						value: '',
						disabled: false,
						type: 'password'
					},
					{
						Title: '确认密码',
						value: '',
						disabled: false,
						type: 'password'
					}
				]
			}
		},
		created() {
			this.phone = this.InpLists[1]['value']
			let userObj = JSON.parse(window.sessionStorage.userObj)
			this.InpLists[0]['value'] = userObj['username'];
			this.InpLists[3]['value'] = userObj['name'];
		},
		methods: {
			submit() {
				let userObj = JSON.parse(window.sessionStorage.userObj)
				for (let i = 0; i < this.InpLists.length; i++) {
					if (this.InpLists[i]['value'] == '') {
						Notification.error({
							title: '内容不能为空！！！'
						});
						return
					}
				}
				if (this.InpLists[4]['value'] != userObj['password']) {
					Notification.error({
						title: '旧密码错误！！！'
					});
					return
				}
				if (this.InpLists[5]['value'] != this.InpLists[6]['value']) {
					Notification.error({
						title: '密码两次输入不一致！！！'
					});
					return
				}
                let _this = this;
				this.$store.commit('dataPost', {
					url:'http://localhost:8081/post',
					data:{
						username:this.InpLists[0]['value'],
						password:this.InpLists[5]['value']
					},
					callback(rel){
						if(rel.data == 'OK'){
							let userObj = JSON.parse(window.sessionStorage.userObj)
							userObj['password'] = _this.InpLists[5]['value']
							window.sessionStorage.userObj = JSON.stringify(userObj)
							Notification.success({
								title: '修改成功！！！'
							});
						}
					}
				})
			}
		}
	}
</script>

<style scoped="">
	.inpDiv {
		margin: 10px 0;
	}

	.dasBody .el-input {
		width: 70%;
	}
</style>
