<template>
  <footer>
    <div class="footer">
      <div class="logo-bar">
        <img src="../assets/logo.png" alt="">
        <dl>
          <dt>艺启学</dt>
          <dd>Art education</dd>
        </dl>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
	padding: 25px 0;
	background: $background;
	height: 180px;
	box-sizing: border-box;
	margin-top: -180px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	& .logo-bar {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		& > img {
			height: 100%;
			width: auto;
		}

		& > dl {
			color: #fff;
			text-align: center;
			margin-left: 10px;

			& dt {
				font-size: 56px;
				font-weight: 700;
			}
			& dd {
				text-transform: Uppercase;
				font-size: 19px;
				margin-top: 15px;
			}
		}
	}
}
</style>

