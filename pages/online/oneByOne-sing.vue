<template>
  <div class="container">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="course_detail">
      <CourseTitle :title="info.title" />
      <div class="content">
        <div class="classify">
          <span>科目分类：</span>
          <i>K歌方向 流行唱法 民族唱法 美声唱法</i>
        </div>
        <div class="introduce">
          <ul>
            <li>
              <dl>
                <dt>应用人群</dt>
                <dd v-html=" info.be_propitious_to "></dd>
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
			isServe: 'online',
			// 顶部轮播
			sing: {
				infos: [{ src: require('~/assets/images/sing/juvenile/banner.jpg') }],
			},
			// 主体内容
			info: {
				title: title,
				be_propitious_to:
					'<p><b style="font-weight: 700">少儿声乐：</b>纯少儿兴趣爱好提升 ;少儿声乐考级</p><p><b style="font-weight: 700">成人学唱歌：</b>.完全不敢开口的小白，O基础，满足去KTV一展歌喉的需求（工作应酬.聚会交友）;声乐爱好者，平时喜欢网络K歌发朋友圈，成人零基础“跑调 高音上不去 低音下不来 不会用气 节奏跟不上 唱歌没有感情，会唱的歌曲少 等。</p>',
				course_style: ['视频1对1'],
				course_introduce: {
					explain:
						'成人K歌方向。艺启学教学目标、教学手法、教学内容、都经过了量体裁衣，并制定更加适合成人学唱歌的一套教学大纲、教材、教学手法。 ',
					superiority: [
						'A.以学员嗓音条件、性格、习惯、之需为本、针对性强;',
						'B.创新的教学模式 、让学唱歌更加通俗易懂 、专业性强；',
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
			& .classify {
				text-align: center;
				margin: 20px 0 0 0;
				font-size: 20px;

				& span {
					color: $background;
				}
			}
			& .introduce {
				padding: 0 60px;
				box-sizing: border-box;

				& ul {
					background: url('~/assets/images/online/sing/person.png') no-repeat;
					background-size: 65%;
					background-position: right 50%;

					& li {
						margin-top: 34px;

						&:first-child {
							// padding-right: 50px;
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
