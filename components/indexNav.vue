<template>
  <nav>
    <transition name="nav">
      <ul v-show="loading">
        <li v-for="item in recommend" :key="item.key">
          <nuxt-link :to="{ name: item.name }">
            <dl>
              <dt><img :src="item.src" alt=""></dt>
              <dd>{{ item.title }}</dd>
            </dl>
          </nuxt-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
import { api_nav } from '../ApiManage/index';
import qs from 'qs';
import LRU from 'lru-cache';
export default {
	name: 'recommend',
	serverCacheKey() {
		// Will change every 10 secondes
		return Math.floor(Date.now() / 10000);
	},
	data() {
		return {
			recommend: this.$store.state.options.indexNavs,
			loading: true,
		};
	},
	mounted() {
		// console.log(this.$store.state.options.indexNavs);
		// this.getList();
	},
	methods: {
		async getList() {
			const { data } = await this.$axios.post(api_nav(), qs.stringify({ str: '2,3,4,5' }));
			this.recommend = data.data;
			this.loading = true;
		},
	},
};
</script>

<style lang="scss" scoped>
.nav-enter-active {
	transition: all 0.3s ease;
}
.nav-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.nav-enter,
.nav-leave-to {
	transform: translateX(-100%);
	opacity: 0;
}
nav {
	background: #fff;
	padding: 20px 0;
	height: 210px;

	& ul {
		padding: 0 20px;
		box-sizing: border-box;
		display: -webkit-box;
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;

		& li {
			width: 24%;
			margin-right: 1.33333333%;

			& a {
				& dl {
					text-align: center;
					& dt {
						& img {
							display: block;
							width: 100%;
						}
					}
					& dd {
						margin-top: 15px;
						color: #333;
						font-size: 26px;
						display: flex;
						align-items: center;
						justify-content: center;

						& span {
							display: inline-block;
							width: 8px;
							height: 8px;
							margin: 0 5px;
							background: #934ae4;
							border-radius: 50%;
						}
					}
				}
			}
		}
	}
}
</style>
