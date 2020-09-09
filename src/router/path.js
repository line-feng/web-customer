export default [{
		path: '/',
		redirect: '/login'
	}, {
		path: '/home',
		redirect: '/home/systemhome'
	}, {
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/login'),
	},
	{
		path: '/home',
		component: resolve => require(['@/views/Home/Home'], resolve),
		children: [{
				path: 'systemhome',
				component: resolve => require(['@/components/HomeBody/homeSystem'], resolve),
				meta:{
					auth:true
				}
			},
			{
				path: 'datasetting',
				component: () => import('@/components/HomeBody/dataSetting'),
				meta:{
					auth:true
				}
			},
			{
				path: 'messagecenter',
				component: () => import('@/components/HomeBody/messageCenter'),
				meta:{
					auth:true
				}
			},
			{
				path: 'loginlog',
				component: () => import('@/components/HomeBody/loginLog'),
				meta:{
					auth:true
				}
			}, {
				path: 'stmessage',
				component: () => import('@/components/Statistical/stMessage'),
				meta:{
					auth:true
				}
			}, {
				path: 'strobot',
				component: () => import('@/components/Statistical/stRobot'),
				meta:{
					auth:true
				}
			}, {
				path: 'stservice',
				component: () => import('@/components/Statistical/stService'),
				meta:{
					auth:true
				}
			}, {
				path: 'stverview',
				component: () => import('@/components/Statistical/stVerview'),
				meta:{
					auth:true
				}
			}, {
				path: 'servicelist',
				component: () => import('@/components/Service/servicelist'),
				meta:{
					auth:true
				}
			}, {
				path: 'servicelistteam',
				component: () => import('@/components/Service/servicelistteam'),
				meta:{
					auth:true
				}
			}, {
				path: 'historylist',
				component: () => import('@/components/History/HistoryList'),
				meta:{
					auth:true
				}
			}, {
				path: 'announcement',
				component: () => import('@/components/announcement/announcement'),
				meta:{
					auth:true
				}
			}, {
				path: 'customer',
				component: () => import('@/components/customer/customer'),
				meta:{
					auth:true
				}
			}, {
				path: 'knowledgelist',
				component: () => import('@/components/knowledgelist/knowledgelist'),
				meta:{
					auth:true
				}
			}, {
				path: 'classification',
				component: () => import('@/components/knowledgelist/classification'),
				meta:{
					auth:true
				}
			}, {
				path: 'role',
				component: () => import('@/components/permissions/role'),
				meta:{
					auth:true
				}
			}, {
				path: 'Members',
				component: () => import('@/components/permissions/Members'),
				meta:{
					auth:true
				}
			}, {
				path: 'instructions',
				component: () => import('@/components/permissions/instructions'),
				meta:{
					auth:true
				}
			}, {
				path: 'operationlog',
				component: () => import('@/components/permissions/operationlog'),
				meta:{
					auth:true
				}
			}, {
				path: 'fastreply',
				component: () => import('@/components/setup/fastreply'),
				meta:{
					auth:true
				}
			}, {
				path: 'siteset',
				component: () => import('@/components/setup/siteset'),
				meta:{
					auth:true
				}
			}
		]
	}
]
