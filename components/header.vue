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
            <li>
              <nuxt-link :to="{ name: 'about' }" @click.native="List">关于艺启学</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ name: 'sing' }" @click.native="List">唱歌培训</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/instrumental" @click.native="List">器乐培训</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/dance" @click.native="List">舞蹈培训</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/broadcast" @click.native="List">播音口才</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/online" @click.native="List">线上培训</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/live" @click.native="List">直播课</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/new" @click.native="List">新闻资讯</nuxt-link>
            </li>
          </ul>
        </dd>
      </dl>
    </div>

  </header>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
		};
	},
	mounted() {
		// 获取document对象的click和touchstart事件
		document.addEventListener('click', this.handleDocumentClick);
		document.addEventListener('touchstart', this.handleDocumentClick);
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
				font-size: 56px;
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
			z-index: 2;

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

						&.nuxt-link-exact-active {
							color: $background;
						}
					}
				}
			}
		}
	}
}
</style>

