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
        <div class="article_content" v-html="info.data"></div>
      </div>
    </main>
    <Splendid class="Splendid" />
  </div>
</template>

<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
import Splendid from '~/components/public/splendid';
export default {
	scrollToTop: true,

	asyncData({ query }) {
		return {
			// 顶部轮播
			sing: {
				infos: [{ src: require('~/assets/images/sing/juvenile/banner.jpg') }],
			},
			// 主体内容
			info: {
				title: query.title,
				date: '2018/10/15',
				data: `
          <div>
            <p>10月15日艺起学舞蹈课程正式开课，课程人数限5人额满为止。</p>
            <p>激发少儿的创造力，很多家长为了培养孩子的兴趣爱好，给孩子报了各种艺术培训班，每到公休日，就能看到家长孩子像赶场一样。</p>
            <img src="/_nuxt/img/banner.bd807e1.jpg" />
            <p>上午学绘画、下午学钢琴、晚上练滑冰……不但投入了大量人力物力，还让孩子身心俱疲，对培训内容一点提不起兴趣……</p>
          </div>
        `,
			},
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
			}
		}
	}
}
</style>
