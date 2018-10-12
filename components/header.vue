<template>
  <header>
    <div class="header">
      <div class="logo-bar">
        <img src="../assets/logo.png" alt="">
        <dl>
          <dt>艺启学</dt>
          <dd>Art education</dd>
        </dl>
      </div>
      <dl class="header-icon">
        <dt>
          <div @click.stop="checkMume">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </dt>
        <dd v-show="isShow">
          <ul>
            <li>
              <nuxt-link :to="{ name: 'index' }" @click.native="List">首页</nuxt-link>
            </li>
            <li v-for="item in list" :key="item.name">
              <nuxt-link :to="{ name: item.name }" @click.native="List"> {{ item.title }} </nuxt-link>
            </li>
          </ul>
        </dd>
      </dl>
    </div>

  </header>
</template>

<script>
import { api_navigation } from '../ApiManage/index';
export default {
	data() {
		return {
			isShow: false,
			list: this.$store.state.options.headers,
		};
	},
	mounted() {
		// 获取document对象的click和touchstart事件
		document.addEventListener('click', this.handleDocumentClick);
		document.addEventListener('touchstart', this.handleDocumentClick);
		// 请求数据
		this.getList();
	},
	methods: {
		// 点击按钮切换
		checkMume() {
			this.isShow = !this.isShow;
		},
		// 点击document触发
		handleDocumentClick(e) {
			if (!this.$el.contains(e.target)) {
				this.isShow = false;
			}
		},
		// 点击列表条目之后关闭栏目
		List(e) {
			setTimeout(this.checkMume, 500);
		},
		// 组件挂载到el上之后，请求服务器数据
		async getList() {
			// const { data } = await this.$axios.get(api_navigation());
			// this.list = data.data;
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	padding: 25px 0;
	background: $background;
	height: 180px;
	box-sizing: border-box;
	margin-bottom: -180px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 66;

	& .logo-bar {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		& > img {
			height: 100%;
			width: auto;
		}

		& > dl {
			color: #fff;
			text-align: center;
			margin-left: 10px;

			& dt {
				font-size: 54px;
				font-weight: 700;
			}
			& dd {
				text-transform: Uppercase;
				font-size: 19px;
				margin-top: 15px;
			}
		}
	}

	& .header-icon {
		height: 100%;
		width: 60px;
		padding-right: 34px;
		position: absolute;
		right: 0;
		top: 0;
		display: flex;

		& > dt {
			height: 100%;
			position: absolute;
			display: flex;
			align-items: center;

			& div {
				width: 60px;
				height: 48px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				& i {
					display: block;
					width: 100%;
					height: 4px;
					border-radius: 2px;
					background: #fff;
				}
			}
		}

		& > dd {
			position: absolute;
			top: 100%;
			right: 0;
			z-index: 9;

			& ul {
				padding: 20px 0 50px 0;
				background: rgba(0, 0, 0, 0.6);
				border-radius: 0 0 0 100px;
				overflow: hidden;

				& li {
					& a {
						display: block;
						color: #fff;
						padding: 15px 60px;
						box-sizing: border-box;
						white-space: nowrap;
						outline: none;
						font-size: 28px;
						-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

						// &.nuxt-link-exact-active {
						// 	// color: $background;
						// }
					}
				}
			}
		}
	}
}
</style>

