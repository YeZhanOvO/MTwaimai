<template>
	<view>
		<view class="prefer-posi">
			<!--筛选区-->
			<view class="delica-view">
				<view class="delica-list delica-grow" @click="multiple()">
					<text>{{ synthesize }}</text>
					<image src="../../../static/coen/paixu.png" mode="widthFix"></image>
				</view>
				<view class="delica-grow">销量高</view>
				<view class="delica-grow">速度快</view>
				<view class="delica-grow">津贴联盟</view>
				<view class="delica-list delica-right">
					<text>筛选</text>
					<image src="../../../static/coen/shaixuan.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 综合排序筛选 -->
			<view class="sortlist sortliteltle" v-show="drop">
				<block v-for="(item, index) in sortlist" :key="index">
					<text :class="{ activeb: index == num }" @click="sortClick(index, item.name)">{{ item.name }}</text>
				</block>
			</view>
			<!-- 多个筛选区 -->
			<view class="sortlist sortlist-view" v-show="sortmen">
				<!-- 多选部分 商家特色-->
				<view class="sortlist-title">{{ screendata[0].title }}</view>
				<view class="sortlist-flex">
					<block v-for="(item, index) in screendata[0].datas" :key="index">
						<text class="Choice">{{ item.name }}</text>
					</block>
				</view>
				<!-- 单选部分  人均价-->
				<view>
					<view class="sortlist-title">{{ person[0].title }}</view>
					<view class="sortlist-flex">
						<block v-for="(item, index) in person[0].datas" :key="index">
							<text class="Choice">{{ item.name }}</text>
						</block>
					</view>
				</view>
				<!-- 置顶 -->
				<view class="sortlist-bottom">
					<text>清空</text>
					<text>完成</text>
				</view>
			</view>
		</view>
				<!-- 遮罩层 -->
		<view class="yin" v-show="mask" @click="hideMask()"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			synthesize: '综合排序',
			drop: false,
			sortmen: false,
			mask: false,
			num: 0,
			sortlist: [
				{
					name: '综合排序',
					screen: '_id',
					nums: 1,
				},
				{
					name: '起送价最低',
					screen: 'delivering',
					nums: 1
				},
				{
					name: '配送费最低',
					screen: 'physical',
					nums: 1
				},
				{
					name: '人均高到低',
					screen: 'capita',
					nums: -1
				},
				{
					name: '人均低到高',
					screen: 'capita',
					nums: 1
				}
			],
			// 多选
			screendata: [
				{
					title: '商家特色(可多选)',
					datas: [
						{
							id: 1,
							sign: 'duration',
							name: '配送最快'
						},
						{
							id: 1,
							sign: 'deliver',
							name: '0元起送'
						},
						{
							id: 1,
							sign: 'physi',
							name: '免配送费'
						}
					]
				}
			],
			// 人均价筛选
			person: [
				{
					title: '人均价',
					datas: [
						{
							name: '20元以下',
							per: {
								$lt: 20
							}
						},
						{
							name: '20-40元',
							per: {
								$lte: 40,
								$gte: 20
							}
						},
						{
							name: '40元以上',
							per: {
								$gt: 40
							}
						}
					]
				}
			]
		};
	},
	methods: {
		// 综合排序
		multiple() {
			this.drop = !this.drop; //控制综合排序的显示与隐藏
			this.showMask() //显示遮罩层
		},
		sortClick(index, name) {
			this.synthesize = name; // 名称随着点击改变
			this.num = index; //动态绑定class 点击响应位置高亮显示
			this.drop = false; //隐藏筛选框
			this.hideMask() //隐藏遮罩层
		},
		hideMask(){//隐藏遮罩层
		setTimeout(()=>{
			this.mask = false; 
		},200)
		},
		showMask(){//显示遮罩层
			this.mask = true
		}
	}
};
</script>

<style scoped>
/* 筛选区 */
.delica-view image {
	width: 30upx;
	height: 30upx;
	display: block;
}
.delica-view {
	font-size: 30upx;
	display: flex;
	align-items: center;
	color: #666666;
	height: 70upx;
	padding: 0 15upx;
	background: #ffffff;
}
.delica-list {
	display: flex;
	align-items: center;
}
.delica-right {
	justify-content: flex-end;
	flex-grow: 5;
}
.delica-grow {
	flex-grow: 1;
}
.prefer-posi {
	position: absolute;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 99;
}
/* 排序 */
.sortlist {
	background: #ffffff;
}
.sortliteltle text {
	padding: 0 15upx;
	display: block;
	font-size: 30upx;
	height: 70upx;
	line-height: 70upx;
	border-top: 1rpx solid #ededed;
}
.activeb {
	color: #f89903 !important;
}
/* 选择 */
/*相对定位*/
.sortlist-view {
	height: 700upx;
	overflow: hidden;
	overflow-y: scroll;
	position: relative;
}
.sortlist-title {
	padding: 0 15upx;
	font-size: 30upx;
	height: 60upx;
	line-height: 60upx;
}
.Choice {
	font-size: 28upx;
	background: #f8f8f8;
	height: 55upx;
	line-height: 55upx;
	color: #666666;
	width: calc((100% / 3) - 15px) !important;
	margin: 7.5px;
	text-align: center;
	display: block;
	border-radius: 5upx;
}
.sortlist-flex {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 30upx;
}
.sortlist-bottom {
	background: #ffffff;
	height: 80upx;
	border-top: 1upx solid #e4e4e4;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}
.sortlist-bottom text {
	flex-grow: 1;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
}
.sortlist-bottom text:nth-child(1) {
	border-right: 1upx solid #e4e4e4;
}
.sortlist-bottom text:nth-child(2) {
	background: #ffd348;
}
.yin {
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
/* 商家特色加样式 */
.scractive {
	background: #fef6df !important;
	color: #f29909 !important;
}
</style>
