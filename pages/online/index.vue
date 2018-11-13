<template>
  <div class="Sing">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="sing_main">
      <!-- 栏目名称 -->
      <ColumnTop title="在线课程" />
      <div class="course_item_gruop">
        <ul>
          <li v-for="item in course" :key="item.key">
            <nuxt-link :to="{ name: item.name, query: { title: item.text } }">
              <img :src="item.src" alt="">
              <p>{{ item.text }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </main>
    <div class="Splendid">
      <Splendid isType="online" />
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
		title: '线上课程', // 页面title
	},
	data() {
		return {
			sing: {
				infos: [{ src: require('~/assets/images/online/banner.jpg') }],
			},
			course: [
				{
					src: require('~/assets/images/online/course_list01.jpg'),
					text: '在线学乐理视唱',
					name: 'online-oneByOne-Sightsinging',
				},
				{
					src: require('~/assets/images/online/course_list02.jpg'),
					text: '在线学唱歌',
					name: 'online-oneByOne-sing',
				},
				// {
				// 	src: require('~/assets/images/online/course_list03.jpg'),
				// 	text: '视频1对1·学钢琴',
				// 	name: 'online-oneByOne-piano',
				// },
				// {
				// 	src: require('~/assets/images/online/course_list04.jpg'),
				// 	text: '视频1对1·学吉他',
				// 	name: 'online-oneByOne-guitar',
				// },
				// {
				// 	src: require('~/assets/images/online/course_list05.jpg'),
				// 	text: '视频1对1·尤克里里',
				// 	name: 'online-oneByOne-ukulele',
				// },
			],
		};
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
			box-sizing: border-box;

			& ul {
				& li {
					&:not(:last-child) {
						margin-bottom: 20px;
					}

					& a {
						display: block;
						position: relative;

						& img {
							display: block;
							width: 100%;
						}

						& p {
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							text-align: center;
							color: #fff;
							font-weight: 700;
							background: rgba(241, 154, 120, 0.5);
							font-size: 43px;
							padding: 10px 0;
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

