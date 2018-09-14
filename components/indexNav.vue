<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/sing">
          <dl>
            <dt><img src="../assets/images/index/nav-list01.png" alt=""></dt>
            <dd>唱歌</dd>
          </dl>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dance">
          <dl>
            <dt><img src="../assets/images/index/nav-list02.png" alt=""></dt>
            <dd>舞蹈</dd>
          </dl>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/broadcast">
          <dl>
            <dt><img src="../assets/images/index/nav-list03.png" alt=""></dt>
            <dd>播音
              <span></span>
              口才</dd>
          </dl>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/instrumental">
          <dl>
            <dt><img src="../assets/images/index/nav-list04.png" alt=""></dt>
            <dd>器乐</dd>
          </dl>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
	background: #fff;
	padding: 20px 0;

	& ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 20px;
		box-sizing: border-box;

		& li {
			width: 23%;

			& a {
				& dl {
					text-align: center;
					& dt {
						& img {
							display: block;
							width: 100%;
						}
					}
					& dd {
						margin-top: 15px;
						color: #333;
						font-size: 26px;
						display: flex;
						align-items: center;
						justify-content: center;

						& span {
							display: inline-block;
							width: 8px;
							height: 8px;
							margin: 0 5px;
							background: #934ae4;
							border-radius: 50%;
						}
					}
				}
			}
		}
	}
}
</style>
