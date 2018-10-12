<template>
  <div class="Sing">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="sing_main">
      <!-- 栏目名称 -->
      <ColumnTop title="新闻资讯" />
      <div class="course_item_gruop">
        <transition-group tag="ul" name="new-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
          <li v-for="item in course" v-bind:key="item.id">
            <!-- <nuxt-link :to="{ name: item.name, query: { id: item.id } }">
              <div class="picture">
                <img :src="item.src" alt="">
              </div>
              <div class="content">
                <h3>{{ item.title }}</h3>
                <span>{{ item.date }}</span>
                <p>{{ item.outline }}</p>
              </div>
            </nuxt-link> -->
            <a :href="`/news/id?id=${item.id}`">
              <div class="picture">
                <img :src="item.src" alt="">
              </div>
              <div class="content">
                <h3>{{ item.title }}</h3>
                <span>{{ item.date }}</span>
                <p>{{ item.outline }}</p>
              </div>
            </a>
          </li>
          <li v-show="!loading" class="loading" key="loading">
            <p>新闻君正在努力加载中　</p>
            <mt-spinner :size="24" color="#ec6834" type="triple-bounce"></mt-spinner>
          </li>
          <li v-show="isBottom" class="isBottom" key="isBottom">这已经是我的底线了！</li>
        </transition-group>

      </div>
    </main>
    <div class="Splendid">
      <Splendid />
    </div>
  </div>
</template>
<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
import ColumnTop from '~/components/public/columnTop';
import Splendid from '~/components/public/splendid';
import { api_news_list } from '~/ApiManage/index';
export default {
	head: {
		title: '新闻资讯', // 页面title
	},
	// async asyncData({ app }) {
	// 	const new_response = await app.$axios.get(`${api_news_list()}&page=1`);
	// 	return {
	// 		loading: false,
	// 		sing: {
	// 			infos: [{ src: require('~/assets/images/sing/banner.jpg') }],
	// 		},
	// 		page: 1,
	// 		isBottom: false,
	// 		course: new_response.data.data || [],
	// 	};
	// },
	// async fetch({ app, store, params }) {
	// 	const new_response = await app.$axios.get(`${api_news_list()}&page=2`);
	// 	store.commit('options/SUCCESS_DATA_NEWS', new_response.data);
	// },
	data() {
		return {
			loading: true,
			sing: {
				infos: [{ src: require('~/assets/images/news/banner.jpg') }],
			},
			page: 1,
			isBottom: false,
			course: this.$store.state.options.newList,
		};
	},
	methods: {
		loadMore() {
			// 分页自增
			++this.page;
			// 处理分页函数
			this.addPage(this.page);
		},
		async addPage(page) {
			// if (!this.$store.state.options.newList.loading) {
			// 	this.loading = true;
			// 	this.isBottom = true;
			// }
			const new_response = await this.$axios.get(`${api_news_list()}&page=${page}`);
			if (new_response.data.status == '1005') {
				this.loading = true;
				this.isBottom = true;
				return;
			}
			this.course = this.course.concat(new_response.data.data);
			// this.$store.dispatch('LoadNews', page);
			// setTimeout(() => {
			// 	this.course = this.$store.state.options.newList.list;
			// }, 500);
		},
	},
	components: {
		Swiper,
		SummaryNew,
		ColumnTop,
		Splendid,
	},
};
</script>
<style lang="scss" scoped>
.new-list-enter-active {
	transition: opacity 1s, transform 1s;
}
.new-list-enter {
	opacity: 0;
	transform: translateY(50px);
}

.Sing {
	& .sing_main {
		background: #fff;
		padding-bottom: 20px;
		margin-bottom: 20px;

		& .course_item_gruop {
			padding: 0 34px;
			height: 850px;
			overflow-y: auto;
			box-sizing: border-box;

			& ul {
				& li {
					&:not(:first-child) {
						margin-top: 20px;
					}
					&.loading {
						display: flex;
						justify-content: center;
						align-items: center;
						transition: none;
					}
					&.isBottom {
						display: flex;
						justify-content: center;
						align-items: center;
						transition: none;
					}
					& a {
						display: flex;
						width: 100%;
						justify-content: space-between;
						align-items: center;
						position: relative;

						& .picture {
							width: 320px;
							height: 190px;

							& img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}

						& .content {
							width: 342px;
							color: #666;

							& h3 {
								padding: 5px 0;
								font-weight: 700;
								font-size: 26px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}

							& span {
								display: block;
								padding: 5px 0;
							}

							& p {
								position: relative;
								max-height: 102px;
								overflow: hidden;
								line-height: 35px;

								&::after {
									content: '...';
									position: absolute;
									bottom: 0;
									right: 0;
									padding-left: 40px;
									background: -webkit-linear-gradient(left, transparent, #fff 55%);
									background: -o-linear-gradient(right, transparent, #fff 55%);
									background: -moz-linear-gradient(right, transparent, #fff 55%);
									background: linear-gradient(to right, transparent, #fff 55%);
								}
							}
						}
					}
				}
			}
		}
	}

	& .Splendid {
		margin-bottom: 20px;
	}
}
</style>

