import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tableData: {
			options: [{
				value: 'null',
				label: 'null'
			}],
			value: 'null',
			tableData: [
				[{
					name: 'fh',
					username: 'fuhao',
					phone: '15576809957',
					servicegroup: '客服1',
					switchs: true
				}]
			],
			multipleSelection: []
		}
	},
	mutations: {
		dataGet(context, item) {
			axios({
					url: item['url'],
					method: 'get'
				})
				.then(rel => {
					item['callback'](rel, context)
					return rel.data
				})
		},
		dataPost(context, item) {
			axios({
					url: item['url'],
					method: 'post',
					data: qs.stringify(item['data'])
				})
				.then(rel => {
					item['callback'](rel)
				})
		}
	},
	actions: {

	},
	modules: {}
})
