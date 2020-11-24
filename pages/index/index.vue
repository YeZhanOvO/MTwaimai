<template>
	<view class="contenting">
		<Search></Search>
		<Preference></Preference>
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
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			Search,
			Preference,
			Title,
			Delicacy,
			TakeOut
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.contenting{
		margin: 0 15upx;
	}
</style>
