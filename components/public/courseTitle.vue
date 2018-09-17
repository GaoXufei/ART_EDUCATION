<template>
  <div class="title">
    <span v-html="computed_title"></span>
  </div>
</template>

<script>
export default {
	props: ['title'],
	computed: {
		computed_title: function() {
			return this.title.replace(/(课程教学法|)/g, '<i style="color: #000">$1</i>');
		},
	},
};
</script>

<style lang="scss" scoped>
.title {
	text-align: center;
	position: relative;

	&::before {
		content: '';
		display: block;
		width: 100%;
		height: 6px;
		background: $background;
		position: absolute;
		top: 50%;
		transform: translateY(-50);
	}
	& span {
		background: #fff;
		color: $background;
		font-size: 55px;
		font-weight: 700;
		position: relative;
		z-index: 2;
		padding: 0 20px;
	}
}
</style>

