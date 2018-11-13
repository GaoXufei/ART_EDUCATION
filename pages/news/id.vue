<template>
  <div class="container">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="course_detail">
      <div class="content">
        <div class="article_title">
          <h2>{{ info.title }}</h2>
          <p>{{ info.date }}</p>
        </div>
        <div class="article_content" v-html="info.content"></div>
      </div>
    </main>
    <Splendid class="Splendid" />
  </div>
</template>

<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
import Splendid from '~/components/public/splendid';
import { api_new_id } from '~/ApiManage/index';

export default {
	scrollToTop: true,

	async asyncData({ app, query }) {
		const new_content = await app.$axios.get(`${api_new_id()}&id=${query.id}`);
		return {
			// 顶部轮播
			sing: {
				infos: [{ src: require('~/assets/images/news/banner.jpg') }],
			},
			// 主体内容
			info: new_content.data.data,
		};
	},
	head() {
		return {
			title: this.info.title,
		};
	},
	mounted() {
		// this.info.title = this.$route.query.title;
	},
	components: {
		Swiper,
		SummaryNew,
		Splendid,
	},
	methods: {},
	watch: {
		$route(to, from) {},
	},
};
</script>

<style lang="scss" scoped>
.container {
	& .Splendid {
		margin-bottom: 20px;
		margin-top: 20px;
	}

	& .course_detail {
		background: #fff;
		padding: 40px 50px;
		box-sizing: border-box;

		& .content {
			min-height: 900px;
			& .article_title {
				text-align: center;

				& h2 {
					font-size: 30px;
					font-weight: 700;
					color: #333;
				}

				& p {
					margin: 15px 0;
					color: #666;
				}
			}

			& /deep/ .article_content {
				& img {
					max-width: 100%;
				}

				& p {
					line-height: 34px;
					text-indent: 48px;
					margin: 20px 0;
				}

				& strong {
					font-weight: 700;
				}
			}
		}
	}
}
</style>
