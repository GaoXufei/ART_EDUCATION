<template>
  <mt-swipe ref="swipe" :auto="0" class="swiper">
    <mt-swipe-item v-for="item in banner.infos" :key="item.key">
      <nuxt-link v-if="item.name" :to="{ name: item.name }">
        <img :src="item.src" alt="">
      </nuxt-link>
      <img v-else :src="item.src" alt="">
    </mt-swipe-item>
    <template v-if="banner.isBtn">
      <i @click="prev" class="prev"><img src="../assets/images/public/swiper_btn_left.png" alt=""></i>
      <i @click="next" class="next"><img src="../assets/images/public/swiper_btn_right.png" alt=""></i>
    </template>
  </mt-swipe>
</template>

<script>
export default {
	props: ['banner'],
	methods: {
		prev() {
			this.$refs.swipe.prev();
		},
		next() {
			this.$refs.swipe.next();
		},
	},
};
</script>

<style lang="scss" scoped>
.swiper {
	width: 100%;
	height: 407px;
	position: relative;

	& .mint-swipe-items-wrap {
		& .mint-swipe-item {
			& img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}

	& .prev,
	& .next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		width: 50px;
		padding: 10px;
		box-sizing: border-box;

		& img {
			display: block;
			width: 100%;
		}
	}
	& .prev {
		left: 0;
	}

	& .next {
		right: 0;
	}
}
</style>
