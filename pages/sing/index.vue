<template>
  <div class="Sing">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="sing_main">
      <ColumnTop title="声乐培训" />
      <div class="course_item_gruop">
        <ul>
          <li v-for="item in course" :key="item.key">
            <nuxt-link :to="{ name: item.name, query: { title: item.title } }">
              <img :src="item.src" alt="">
              <p>{{ item.title }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </main>
    <div class="Splendid">

      <Splendid isType="sing" />
    </div>
  </div>
</template>
<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
import ColumnTop from '~/components/public/columnTop';
import Splendid from '~/components/public/splendid';
import Qs from 'qs';
import { api_course_id_list } from '~/ApiManage/index';
import axios from 'axios';
export default {
	head: {
		title: '声乐培训',
	},
	data() {
		return {
			sing: { infos: [{ src: require('~/assets/images/sing/banner.jpg') }] },
			course: this.$store.state.options.sings,
		};
	},
	// async asyncData({ app }) {
	// 	const course_list = await app.$axios.post(api_course_id_list(), Qs.stringify({ id: 2 }));
	// 	return {
	// 		sing: {
	// 			infos: [{ src: require('~/assets/images/sing/banner.jpg') }],
	// 		},
	// 		course: course_list.data.data,
	// 	};
	// },
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

