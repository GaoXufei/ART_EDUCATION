<template>
  <div class="hotClass">
    <ColumnTop title="热门课程" />
    <div class="hotContent">
      <ul>
        <li v-for="item in hot" :key="item.key">
          <nuxt-link :to="item.type">
            <dl>
              <dt>
                <img :src="item.src" alt="">
              </dt>
              <dd>
                {{ item.text }}
              </dd>
            </dl>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ColumnTop from '~/components/public/columnTop';
export default {
	props: ['hot'],
	components: {
		ColumnTop,
	},
};
</script>

<style lang="scss" scoped>
.hotClass {
	background: #fff;

	& .hotContent {
		padding: 0 34px;

		& ul {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			& li {
				width: 49%;

				& a {
					display: block;

					& dl {
						width: 100%;

						& dt {
							width: 100%;

							& img {
								display: block;
								width: 100%;
							}
						}

						& dd {
							text-align: center;
							color: #666;
							padding: 10px 0;
						}
					}
				}
			}
		}
	}
}
</style>
