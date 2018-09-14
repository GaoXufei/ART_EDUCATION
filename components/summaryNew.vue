<template>
  <div class="summary">
    <div class="summary-title">
      <h2>今日最新</h2>
    </div>
    <div class="summary-content">
      <ul class="scroll-content" :style="{ 'transform': 'translateY('+ top +')' }">
        <li v-for="item in newslist" :key="item.id">
          <i></i>
          <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          <span>{{ item.time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			newslist: [
				{ title: '腰果难吃总统发飙', id: '1', url: 'www.baidu.com', time: '12/06' },
				{ title: '利欧收购微信', id: '2', url: 'www.baidu.com', time: '12/06' },
				{ title: '厦门机场青菜面', id: '3', url: 'www.baidu.com', time: '12/06' },
				{ title: '新iPhone价格', id: '4', url: 'www.baidu.com', time: '12/06' },
			],
			activeIndex: 0,
			listHeight: null,
		};
	},
	mounted() {
		this.summaryPlay();
		this.getListHeight();
	},
	methods: {
		summaryPlay() {
			setInterval(() => {
				if (this.activeIndex < this.newslist.length - 1) {
					this.activeIndex += 1;
				} else {
					this.activeIndex = 0;
				}
			}, 3000);
		},
		getListHeight() {
			this.listHeight = document.querySelector('.scroll-content').children[0].clientHeight;
		},
	},
	computed: {
		top() {
			return -this.activeIndex * this.listHeight + 'px';
		},
	},
};
</script>
<style lang="scss" scoped>
.summary {
	width: 100%;
	height: 76px;
	padding: 0 34px;
	box-sizing: border-box;
	background: $background-tool;
	margin: 25px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& .summary-title {
		font-size: 30px;
		font-weight: 700;
		color: #fff;
		width: 30%;
		text-align: center;
	}

	& .summary-content {
		width: 70%;
		height: 100%;
		background: #fff;
		overflow: hidden;

		& .scroll-content {
			position: relative;
			transition: transform 1s;

			& li {
				height: 76px;
				display: flex;
				align-items: center;
				position: relative;
				font-size: 23px;

				& i {
					display: inline-block;
					border-radius: 50%;
					background: $background-tool;
					width: 10px;
					height: 10px;
					margin: 0 20px;
				}

				& span {
					position: absolute;
					top: 50%;
					right: 20px;
					transform: translateY(-50%);
					color: #666;
				}

				& a {
					color: #666;
					display: block;
					max-width: 340px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>
