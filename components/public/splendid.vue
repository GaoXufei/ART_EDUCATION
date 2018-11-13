<template>
  <div class="splendid">
    <ColumnContainer title="精彩课堂" :banner="splendid" />
  </div>
</template>

<script>
// 精彩课堂
import ColumnContainer from '~/components/public/columnContainer';
export default {
	props: ['isType'],
	data() {
		const banner_type = this.isType || 'default';
		let splendid_data = {};
		switch (banner_type) {
			// 舞蹈
			case 'dance':
				splendid_data = {
					isBtn: true,
					infos: [
						{ src: require('~/assets/images/dance/banner-bottom/item01.jpg') },
						{ src: require('~/assets/images/dance/banner-bottom/item02.jpg') },
						{ src: require('~/assets/images/dance/banner-bottom/item03.jpg') },
					],
				};
				break;
			// 唱歌
			case 'sing':
				splendid_data = {
					isBtn: true,
					infos: [
						{ src: require('~/assets/images/sing/banner-bottom/item01.jpg') },
						{ src: require('~/assets/images/sing/banner-bottom/item02.jpg') },
						{ src: require('~/assets/images/sing/banner-bottom/item03.jpg') },
					],
				};
				break;
			// 器乐
			case 'ins':
				splendid_data = {
					isBtn: true,
					infos: [
						{ src: require('~/assets/images/instrumental/banner-bottom/item01.jpg') },
						{ src: require('~/assets/images/instrumental/banner-bottom/item02.jpg') },
						{ src: require('~/assets/images/instrumental/banner-bottom/item03.jpg') },
					],
				};
				break;
			// 在线
			case 'online':
				splendid_data = {
					isBtn: true,
					infos: [
						{ src: require('~/assets/images/online/banner-bottom/item01.jpg') },
						{ src: require('~/assets/images/online/banner-bottom/item02.jpg') },
						{ src: require('~/assets/images/online/banner-bottom/item03.jpg') },
					],
				};
				break;

			default:
				splendid_data = {
					isBtn: true,
					infos: [
						{ src: require('~/assets/images/dance/banner-bottom/item03.jpg') },
						{ src: require('~/assets/images/online/banner-bottom/item02.jpg') },
						{ src: require('~/assets/images/sing/banner-bottom/item03.jpg') },
					],
				};
				break;
		}

		return {
			splendid: splendid_data,
		};
	},
	components: {
		ColumnContainer,
	},
};
</script>

<style lang="scss" scoped>
</style>
