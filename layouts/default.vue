<template>
  <div class="layout-default">
    <Header />
    <div class="Occupation">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/header';
import Footer from '~/components/footer';
export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss" scoped>
.layout-default {
	height: 100%;

	.Occupation {
		min-height: 100%;
		box-sizing: border-box;
		padding: 180px 0;
		background: #e7e7e7;
	}
}
</style>


