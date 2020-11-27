<template>
	<view class="contenting">
		<Search></Search>
		<Preference :preferdata="preferdata"></Preference>
		<Title></Title>
		<Delicacy></Delicacy>
		<TakeOut></TakeOut>
	</view>
</template>

<script>
	import Search from './components/search.vue'
	import Preference from './components/preference.vue'
	import Title from './components/title.vue'
	import Delicacy from './components/delicacy.vue'
	import TakeOut from './components/takeout.vue'
	import {rq} from '../../request.js'
	export default {
		data() {
			return {
				title: 'Hello',
				preferdata:[]
			}
		},
		components:{
			Search,
			Preference,
			Title,
			Delicacy,
			TakeOut
		},
		methods: {
			// 为你优选
			getPrefer(){
				rq('GET','forshop/getprefer').then((res)=>{
					this.preferdata=res.data
				})
			}
		},
		// 监听页面滚动距离
		onPageScroll(e){
			console.log(e)
		},
		mounted(){
			this.getPrefer()
		}
	}
</script>

<style scoped>
	.contenting{
		margin: 0 15upx;
	}
</style>
