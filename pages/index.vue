<template>
  <main class="PageIndex">
    <section class="banner">
      <Swiper :banner="banner" />
    </section>
    <section class="summary">
      <SummaryNew />
    </section>
    <section class="nav">
      <IndexNav />
    </section>
    <section class="hot">
      <HotClass :hot="hot" />
    </section>
    <section class="environment">
      <ColumnContainer :banner="environment" title="校区地址" />
    </section>
    <section>
      {{ news }}
    </section>
  </main>
</template>

<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
import IndexNav from '~/components/indexNav';
import HotClass from '~/components/hotClass';
import ColumnContainer from '~/components/public/columnContainer';
import { api_banner, api_index_hot, api_index_environment, api_new_top } from '../ApiManage/index';
import qs from 'qs';

export default {
	layout: 'default',
	head: {
		title: '首页',
	},
	components: {
		Swiper,
		SummaryNew,
		IndexNav,
		HotClass,
		ColumnContainer,
	},
	data() {
		return {
			banner: {
				infos: this.$store.state.options.indexBanners,
			},
			hot: this.$store.state.options.indexHotList,
			environment: {
				isBtn: true,
				infos: this.$store.state.options.indexEnvironment,
			},
		};
	},
	async asyncData({ app }) {
		const { data } = await app.$axios.get(`${api_new_top()}&num=3`);
		return {
			news: data.data,
		};
	},
};
</script>

<style lang="scss" scoped>
.hot {
	margin-top: 20px;
}

.environment {
	margin: 20px 0;
}
</style>
