<template>
  <div class="Sing">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="sing_main">
      <!-- 栏目名称 -->
      <ColumnTop title="新闻资讯" />
      <div class="course_item_gruop">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
          <li v-for="item in course" :key="item.key">
            <nuxt-link :to="{ name: item.name, params: { id: item.id }, query: { title: item.title } }">
              <div class="picture">
                <img :src="item.src" alt="">
              </div>
              <div class="content">
                <h3>{{ item.title }}</h3>
                <span>{{ item.date }}</span>
                <p>{{ item.outline }}</p>
              </div>
            </nuxt-link>
          </li>
          <li v-show="loading" class="loading">
            <p>新闻君正在努力加载中　</p>
            <mt-spinner :size="24" color="#ec6834" type="triple-bounce"></mt-spinner>
          </li>
        </ul>
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
export default {
	head: {
		title: '新闻资讯', // 页面title
	},
	data() {
		return {
			loading: false,
			sing: {
				infos: [{ src: require('~/assets/images/sing/banner.jpg') }],
			},
			course: [
				{
					title: '艺起学舞蹈班第二期开课啦！',
					date: '2018/10/15',
					outline: '10月15日艺起学舞蹈课程正式开课，课程人数 限5人',
					name: 'news-id',
					id: 0,
					src: require('~/assets/images/news/course_list01.png'),
				},
				{
					title: '艺起学舞蹈班第二期开课啦！',
					date: '2018/10/15',
					outline: '10月15日艺起学舞蹈课程正式开课，课程人数 限5人',
					name: 'news-id',
					id: 0,
					src: require('~/assets/images/news/course_list01.png'),
				},
				{
					title: '艺起学舞蹈班第二期开课啦！',
					date: '2018/10/15',
					outline: '10月15日艺起学舞蹈课程正式开课，课程人数 限5人',
					name: 'news-id',
					id: 0,
					src: require('~/assets/images/news/course_list01.png'),
				},
				{
					title: '艺起学舞蹈班第二期开课啦！',
					date: '2018/10/15',
					outline: '10月15日艺起学舞蹈课程正式开课，课程人数 限5人',
					name: 'news-id',
					id: 0,
					src: require('~/assets/images/news/course_list01.png'),
				},
				{
					title: '艺起学舞蹈班第二期开课啦！',
					date: '2018/10/15',
					outline: '10月15日艺起学舞蹈课程正式开课，课程人数 限5人',
					name: 'news-id',
					id: 0,
					src: require('~/assets/images/news/course_list01.png'),
				},
				{
					title: '艺起学舞蹈班第二期开课啦！',
					date: '2018/10/15',
					outline: '10月15日艺起学舞蹈课程正式开课，课程人数 限5人',
					name: 'news-id',
					id: 0,
					src: require('~/assets/images/news/course_list01.png'),
				},
			],
		};
	},
	methods: {
		loadMore() {
			this.loading = true;
			this.For();
		},
		For() {
			const arr = [];
			for (let i = 0; i < 10; i++) {
				arr.push({
					title: `艺起学舞蹈班第${i}期开课啦！`,
					date: '2018/10/15',
					outline: '10月15日艺起学舞蹈课程正式开课，课程人数 限5人',
					name: 'news-id',
					id: 0,
					src: require('~/assets/images/news/course_list01.png'),
				});
			}
			setTimeout(() => {
				this.course = this.course.concat(arr);
				this.loading = false;
			}, 2000);
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
.Sing {
	& .sing_main {
		background: #fff;
		padding-bottom: 20px;
		margin-bottom: 20px;

		& .course_item_gruop {
			padding: 0 34px;
			height: 900px;
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

