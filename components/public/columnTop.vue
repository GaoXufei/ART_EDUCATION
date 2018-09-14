<template>
  <div class="column">
    <i></i>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
	props: ['title'],
};
</script>

<style lang="scss" scoped>
.column {
	padding: 20px 34px;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 88px;

	& i {
		display: block;
		width: 10px;
		height: 100%;
		background: $background-tool;
		margin-right: 10px;
	}

	& h2 {
		font-size: 30px;
		font-weight: 700;
		color: #000;
	}
}
</style>
