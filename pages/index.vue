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
				{ src: require('~/assets/images/index/hot_shaoer_shengyue.png'), text: '少儿·声乐', type: 'shengyue' },
				{ src: require('~/assets/images/index/hot_jita.png'), text: '吉他·培训', type: 'qiyue' },
				{ src: require('~/assets/images/index/hot_chengren_wudao.png'), text: '成人·舞蹈', type: 'dance' },
				{ src: require('~/assets/images/index/hot_xianshang.png'), text: '线上·培训', type: 'online' },
			],
			environment: {
				isBtn: true,
				infos: [
					{ src: require('~/assets/images/index/environment_list.png'), name: 'environment' },
					{ src: require('~/assets/images/index/environment_list.png'), name: 'environment' },
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
