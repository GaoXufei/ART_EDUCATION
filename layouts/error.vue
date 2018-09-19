<template>
  <div class="error">
    {{ error.message }}
  </div>
</template>
<script>
export default {
	props: ['error'],
	mounted() {},
};
</script>

<style lang="scss" scoped>
.error {
	padding: 50% 0;
	box-sizing: border-box;
	text-align: center;
}
</style>