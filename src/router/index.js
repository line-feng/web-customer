import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from './path.js'

Vue.use(VueRouter)

const routes = pathArr


const router = new VueRouter({
	routes
})


// 添加路由导航守卫：只有登陆才允许访问
router.beforeEach((to, from, next) => {
	if (to['path'] == '/login') {
		next()
		return
		// || !window.sessionStorage.getItem('userObj')
	} else if (to['meta']['auth']) {
		if (window.sessionStorage.login == 'false') {
			next('/login')
		} else {
			next()
		}
	} else {
		next()
	}
})


export default router
