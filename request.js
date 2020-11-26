const url = 'https://meituan.thexxdd.cn/api/' //公用地址

let rq = function(method, urling, shopdata = '') {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url + urling,
			method: method,
			data: shopdata
		}).then((res) => {
			resolve(res[1])
		}).catch((err) => {
			reject(err)
			uni.showToast({
				icon: 'none',
				title: '服务器错误，请稍后再试',
				duration: 3000
			});
		})
	})
}
export {rq}