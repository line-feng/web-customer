<template>
	<div class="mianHeader">
		<div class="dc-flex text-size-01 jc-between" style="padding: 10px ;" :style="{'background': bgColor}">
			<div class="dc-flex alit-center">
				<img src="../../assets/login/4.png" width="30px" />
				<div style="margin-left: 10px;" class="text-white text-weight">
					WEB在线客服管理系统
				</div>
			</div>
			<div class="dc-flex rightIco">
				<div>
					<el-popover placement="bottom" width="200" trigger="hover">
						<div style="font-size: 12px;">
							<div class="dc-flex jc-between user">
								<div>账户信息</div>
								<div style="color:#30C2A5;">账户设置</div>
							</div>
							<ul>
								<li>所在部门：客服部</li>
								<li>本次登陆：{{ Time | newTime }}</li>
								<li>登陆地区：福建省福建市(IP:183.14.135.1)</li>
								<li>上次登录：{{ beforeTime | newTime }}</li>
							</ul>
						</div>
						<div slot="reference" style="cursor: pointer;">Fuyong</div>
					</el-popover>
				</div>
				<div>|</div>
				<div>
					<el-popover placement="bottom" width="50" trigger="hover">
						<div style="font-size: 12px;">
							<div class="text-center marTb-len-1 Cur Hover">
								离线
							</div>
							<div class="text-center marTb-len-1 Cur Hover">
								休息
							</div>
						</div>
						<div slot="reference" style="cursor: pointer;">在线</div>
					</el-popover>
				</div>
				<div>|</div>
				<div>

					<el-popover placement="bottom" width="350" trigger="hover">
						<div style="font-size: 12px;">
							<div>
								<van-cell-group>
									<van-cell title="消息公告" />
									<div class="cell-hover">
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
									</div>
								</van-cell-group>
							</div>
						</div>
						<div slot="reference" style="cursor: pointer;">
							<el-badge :value="50" class="item">
								<i class="el-icon-s-comment"></i>
							</el-badge>
						</div>
					</el-popover>


				</div>
				<div>|</div>
				<div>
					<el-popover placement="bottom" width="350" trigger="hover">
						<div style="font-size: 12px;">
							<div class="dc-flex flex-wrap">
								<div class="Box" :style="{'background' : item['color']}" v-for='(item,index) in bgColorLists' :key='index'
								 @click="replace(item['color'])">
									<span>
										{{ item['title'] }}
									</span>
								</div>
							</div>
						</div>
						<div slot="reference" style="cursor: pointer;">
							<i class="el-icon-set-up"></i>
						</div>
					</el-popover>

				</div>
				<div>|</div>
				<div>
					<i class="el-icon-switch-button" @click="dialogVisible = true"></i>
				</div>
			</div>
		</div>

		<el-dialog title="退出确认" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>确定要退出登录么？</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="exit">确 定</el-button>
			</span>
		</el-dialog>

	</div>
</template>

<script>
	import {
		Badge,
		Popover,
		Button,
		Dialog,
		MessageBox
	} from 'element-ui'
	import {
		Cell,
		CellGroup
	} from 'vant';
	export default {
		components: {
			[MessageBox.name]: MessageBox,
			[Badge.name]: Badge,
			[Dialog.name]: Dialog,
			[Popover.name]: Popover,
			[Button.name]: Button,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup
		},
		data() {
			return {
				dialogVisible: false,
				bgColor: '#30C2A5',
				beforeTime: '',
				Time: '',
				bgColorLists: [{
					color: '#30C2A5',
					title: '点击换肤'
				}, {
					color: '#3498DB',
					title: '点击换肤'
				}, {
					color: '#ED6E4D',
					title: '点击换肤'
				}, {
					color: '#FABB3D',
					title: '点击换肤'
				}, {
					color: '#AA7AB3',
					title: '点击换肤'
				}, {
					color: '#9AD0B9',
					title: '点击换肤'
				}, {
					color: '#EA94BE',
					title: '点击换肤'
				}, {
					color: '#C1374A',
					title: '点击换肤'
				}]
			}
		},
		filters: {
			newTime(val) {

				if (val == '') {
					return '上次未登录'
				}

				function parseDate(date) {
					return date < 10 ? '0' + date : date
				}

				val = new Date(val)
				let year = val.getFullYear(),
					month = val.getMonth() + 1,
					day = val.getDate(),
					HH = parseDate(val.getHours()),
					MM = parseDate(val.getMinutes()),
					SS = parseDate(val.getSeconds());
				return year + '-' + month + '-' + day + '   ' + HH + ':' + MM + ':' + SS


			}
		},
		created() {
			let userObj = JSON.parse(window.sessionStorage.userObj);
			if (window.sessionStorage.beforeTime) {
				this.beforeTime = JSON.parse(window.sessionStorage.beforeTime)
			} else {
				this.beforeTime = ''
			}
			this.Time = userObj['Time'];

		},
		methods: {
			replace(color) {
				this.bgColor = color
			},
			exit() {
				let beforeTime = this.Time;
				window.sessionStorage.login = false
				this.dialogVisible = false
				window.sessionStorage.beforeTime = JSON.stringify(beforeTime)
				this.$router.push('/login')
			},
			handleClose(done) {
				MessageBox.confirm('确认关闭？')
					.then(() => {
						done();
					})
					.catch(() => {});
			}
		}
	}
</script>

<style scoped="">
	.rightIco>div {
		margin: 0 10px;
		color: white;
	}

	.rightIco>div i {
		font-size: 20px;
	}

	.user {
		border-bottom: 1px solid lightgray;
		padding-bottom: 5px;
		font-size: 12px;
	}

	.cell-hover>div:hover {
		color: #30C2A5;
	}

	.cell-hover>div {
		cursor: pointer;
	}

	.Hover:hover {
		color: #30C2A5;
	}

	.Box {
		width: 70px;
		height: 70px;
		margin: 5px;
		padding: 5px;
		text-align: center;
		line-height: 70px;
		color: white;
	}

	.Box:hover span {
		opacity: 1;
	}

	.Box span {
		opacity: 0;
		cursor: pointer;
	}
</style>
<style>
	.el-popover {
		min-width: 50px;
	}
</style>
