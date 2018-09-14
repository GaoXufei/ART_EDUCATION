<template>
  <div class="column_container">
    <ColumnTop :title="title" />
    <Swiper :banner="banner" />
  </div>
</template>

<script>
import ColumnTop from '~/components/public/columnTop';
import Swiper from '~/components/swiper';
export default {
	props: ['banner', 'title'],
	components: {
		ColumnTop,
		Swiper,
	},
};
</script>


<style lang="scss" scoped>
.column_container {
	background: #fff;
	padding-bottom: 20px;
}
</style>

