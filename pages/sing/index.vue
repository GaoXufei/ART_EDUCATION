<template>
  <div class="Sing">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="sing_main">
      <ColumnTop title="声乐培训" />
      <div class="course_item_gruop">
        <ul>
          <li v-for="item in course" :key="item.key">
            <nuxt-link :to="{ name: item.name }">
              <img :src="item.src" alt="">
            </nuxt-link>
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
		title: '声乐培训',
	},
	data() {
		return {
			sing: {
				infos: [{ src: require('~/assets/images/sing/banner.jpg') }],
			},
			course: [
				{ src: require('~/assets/images/sing/course_list01.jpg'), text: '少儿·声乐', name: 'sing-shaoer' },
				{ src: require('~/assets/images/sing/course_list02.jpg'), text: '成人·声乐', name: 'sing-shaoer' },
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

						& img {
							display: block;
							width: 100%;
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

