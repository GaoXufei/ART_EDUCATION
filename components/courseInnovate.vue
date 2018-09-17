<template>
  <div class="innovate">
    <CourseTitle title="创新课程教学法" />
    <div class="content">
      <img src="../assets/images/public/innovate_item.png" alt="">
      <div class="serve">
        <span>服务优势：</span>
        <i>“一起弹” 线上视频辅助练习课包</i>
        <dl>
          <dt>
            <h4>Learning process</h4>
            <p>学习流程</p>
          </dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import CourseTitle from '~/components/public/courseTitle';
export default {
	data() {
		return {};
	},
	components: {
		CourseTitle,
	},
};
</script>

<style lang="scss" scoped>
.innovate {
	margin: 20px 0;
	background: #fff;
	padding: 40px 0;

	& .content {
		padding: 0 100px;
		box-sizing: border-box;
		margin-top: 40px;

		& img {
			display: block;
			width: 100%;
		}

		& .serve {
			margin: 40px 0 20px 0;
			font-size: 29px;

			& span {
				color: $background;
			}

			& dl {
				margin-top: 40px;

				& dt {
					text-align: center;
					color: #fff;
					background: $background;
					padding: 20px 0 20px 0;
					box-sizing: border-box;

					& h4 {
						font-size: 39px;
						text-transform: uppercase;
					}

					& p {
						font-size: 38px;
						margin-top: 20px;
						padding: 0 40px;
						box-sizing: border-box;
					}
				}
				& dd {
					// ...
					color: #333;
				}
			}
		}
	}
}
</style>
