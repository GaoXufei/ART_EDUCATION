<template>
  <div class="container">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="course_detail">
      <CourseTitle :title="info.title" />
      <div class="content">
        <div class="introduce">
          <ul>
            <li>
              <dl>
                <dt>应用人群</dt>
                <dd>{{ info.be_propitious_to }}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>课程班型</dt>
                <dd>
                  <span v-for="item in info.course_style" :key="item.key">{{ item }}</span>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>课程介绍</dt>
                <dd>
                  <h5>课程说明</h5>
                  <p>{{ info.course_introduce.explain }}</p>
                  <h5>课程优势</h5>
                  <p v-for="item in info.course_introduce.superiority" :key="item.key">{{ item }}</p>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="target">
          <div class="title">
            <h2>课程目标和任务</h2>
          </div>
          <div class="content">
            <img src="~/assets/images/public/target_sing.jpg" alt="">
          </div>
        </div>
      </div>
    </main>

    <main class="innovate">
      <CourseInnovate :isServe="isServe" />
    </main>

    <Splendid class="Splendid" />
  </div>
</template>

<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
import CourseTitle from '~/components/public/courseTitle';
import CourseInnovate from '~/components/courseInnovate';
import Splendid from '~/components/public/splendid';
export default {
	scrollToTop: true,

	asyncData({ query }) {
		const title = query.title;
		return {
			// 一起弹还是一起唱 sing / play
			isServe: 'sing',
			// 顶部轮播
			sing: {
				infos: [{ src: require('~/assets/images/sing/juvenile/banner.jpg') }],
			},
			// 主体内容
			info: {
				title: title,
				be_propitious_to: '3岁至16岁青少儿，零基础，有基础，兴趣爱好提升，声乐考级，才艺提成。',
				course_style: ['1对1', '1对2', '精品小班'],
				course_introduce: {
					explain:
						'少儿歌唱教育有别于成人声乐教育，其根本在于少儿的生理、心理、理解力都与成人存在差异。因此艺启学教学目标、教学手法。',
					superiority: [
						'A.进阶闯关式学习模式 趣味性强；',
						'B.以孩子的嗓音条件、性格、学员之需为本、针对性强;',
						'C.创新的教学模式 、让孩子学唱歌更加通俗易懂、专业性强；',
						'D.培养儿童良好的上课纪律、礼节和意识；',
						'E.启迪孩子的心灵；',
						'F.立足于中华民族文化；',
					],
				},
			},
		};
	},
	head() {
		return {
			title: this.info.title,
		};
	},
	mounted() {
		// this.info.title = this.$route.query.title;
	},
	components: {
		Swiper,
		SummaryNew,
		CourseTitle,
		CourseInnovate,
		Splendid,
	},
};
</script>

<style lang="scss" scoped>
.container {
	& .Splendid {
		margin-bottom: 20px;
	}

	& .course_detail {
		background: #fff;
		padding: 40px 0;

		& .content {
			& .introduce {
				padding: 0 60px;
				box-sizing: border-box;

				& ul {
					background: url('~/assets/images/sing/juvenile/person.png') no-repeat;
					background-size: 45%;
					background-position: right 20px;

					& li {
						margin-top: 34px;

						&:first-child {
							padding-right: 50px;
							box-sizing: border-box;
						}

						& dl {
							& dt {
								display: flex;
								justify-content: flex-start;
								align-items: center;
								font-size: 30px;
								font-weight: 700;

								&::before {
									content: '';
									display: block;
									background: $background;
									height: 34px;
									width: 15px;
									margin-right: 10px;
								}
							}
							& dd {
								padding-left: 25px;
								box-sizing: border-box;
								line-height: 40px;
								margin-top: 15px;

								& span {
									&:not(:last-child)::after {
										content: '/';
										display: inline-block;
										padding: 0 10px;
										color: $background;
									}
								}

								& h5 {
									color: $background;
									font-weight: 700;
									margin-top: 10px;
								}
							}
						}
					}
				}
			}

			& .target {
				padding: 0 60px;
				box-sizing: border-box;

				& .title {
					display: flex;
					justify-content: center;
					margin: 30px 0;

					& h2 {
						text-align: center;
						color: #fff;
						background: $background;
						width: 90%;
						font-size: 35px;
						padding: 15px;
						font-weight: 700;
					}
				}

				& .content {
					& img {
						display: block;
						width: 100%;
					}
				}
			}
		}
	}
}
</style>
