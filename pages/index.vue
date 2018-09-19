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
  </main>
</template>

<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
import IndexNav from '~/components/indexNav';
import HotClass from '~/components/hotClass';
import ColumnContainer from '~/components/public/columnContainer';

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
	asyncData() {
		return {
			banner: {
				infos: [
					{ src: require('~/assets/images/index/banner.jpg'), name: 'dance' },
					{ src: require('~/assets/images/index/banner.jpg'), name: 'dance' },
				],
			},
			hot: [
				{
					src: require('~/assets/images/index/hot_shaoer_shengyue.png'),
					title: '少儿·声乐',
					name: 'sing-juvenile',
				},
				{ src: require('~/assets/images/index/hot_jita.png'), title: '吉他·培训', name: 'instrumental-guitar' },
				{
					src: require('~/assets/images/index/hot_chengren_wudao.png'),
					title: '成人·舞蹈',
					name: 'dance-fullgrown',
				},
				{ src: require('~/assets/images/index/hot_xianshang.png'), title: '线上·培训', name: 'online' },
			],
			environment: {
				isBtn: true,
				infos: [
					{ src: require('~/assets/images/index/environment_list.png') },
					{ src: require('~/assets/images/index/environment_list.png') },
				],
			},
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
