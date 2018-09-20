<template>
  <div class="error">
    <template v-if="error.statusCode === 404">
      <div class="undefined">
        <img src="../assets/images/error/undefined.png" alt="">
        <p>找不到该页面</p>
        <button class="btn" @click="backProv">返回上一页</button>
        <button class="btn" @click="backIndex">返回首页</button>
      </div>
    </template>
  </div>
</template>
<script>
export default {
	layout: 'hah',
	props: ['error'],
	head() {
		return {
			title: this.error.message,
		};
	},
	methods: {
		backProv() {
			this.$router.go(-1);
		},
		backIndex() {
			this.$router.push({ name: 'index' });
		},
	},
};
</script>

<style lang="scss" scoped>
.error {
	padding: 50% 0;
	box-sizing: border-box;
	text-align: center;

	.undefined {
		color: #999;

		& img {
			width: 150px;
		}

		& p {
			margin: 20px 0;
		}

		& .btn {
			background: #ccc;
			border: none;
			padding: 5px 10px;

			&:nth-of-type(1) {
				margin-right: 20px;
			}
		}
	}
}
</style>