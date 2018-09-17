<template>
  <div class="splendid">
    <ColumnContainer title="精彩课堂" :banner="splendid" />
  </div>
</template>

<script>
// 精彩课堂
import ColumnContainer from '~/components/public/columnContainer';
export default {
	data() {
		return {
			splendid: {
				isBtn: true,
				infos: [
					{ src: require('~/assets/images/index/environment_list.png') },
					{ src: require('~/assets/images/index/environment_list.png') },
				],
			},
		};
	},
	components: {
		ColumnContainer,
	},
};
</script>

<style lang="scss" scoped>
</style>
