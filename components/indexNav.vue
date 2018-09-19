<template>
  <nav>
    <ul>
      <li v-for="item in recommend" :key="item.key">
        <nuxt-link :to="{ name: item.name }">
          <dl>
            <dt><img :src="item.src" alt=""></dt>
            <dd>{{ item.title }}</dd>
          </dl>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
	data() {
		return {
			recommend: [
				{
					title: '唱歌',
					src: require('~/assets/images/index/nav-list01.png'),
					name: 'sing',
				},
				{
					title: '舞蹈',
					src: require('~/assets/images/index/nav-list02.png'),
					name: 'dance',
				},
				{
					title: '播音·口才',
					src: require('~/assets/images/index/nav-list03.png'),
					name: 'transmit',
				},
				{
					title: '器乐',
					src: require('~/assets/images/index/nav-list04.png'),
					name: 'instrumental',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
nav {
	background: #fff;
	padding: 20px 0;

	& ul {
		padding: 0 20px;
		box-sizing: border-box;
		display: -webkit-box;
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;

		& li {
			width: 24%;
			margin-right: 1.33333333%;

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
