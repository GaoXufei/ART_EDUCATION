<template>
  <div class="container">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="course_detail">
      <CourseTitle :title="info.title" />
      <div class="content">
        <div class="classify">
          <span>科目分类：</span>
          <i>流行唱法 民族唱法 美声唱法</i>
        </div>
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
                <dt>针对性解决问题</dt>
                <dd>
                  <h5>+</h5>
                  <p v-html="info.course_introduce.explain"></p>
                </dd>
              </dl>
              <dl>
                <dt>课程体系</dt>
                <dd>
                  <h5>+</h5>
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

    <Splendid class="Splendid" isType="sing" />
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
			// 服务类别
			isServe: 'sing',
			// 顶部轮播
			sing: {
				infos: [{ src: require('~/assets/images/sing/fullgrown/banner.jpg') }],
			},
			// 主体内容
			info: {
				title: title,
				be_propitious_to:
					'成人零基础“跑调 高音上不去 低音下不来 不会用气 节奏跟不上 唱歌没有感情，会唱的歌曲少等。',
				course_style: ['1对1', '1对2', '精品小班'],
				course_introduce: {
					explain:
						'很多学员第一节课说“自己唱歌跑调”“唱歌不好听”“没有高音”“跟不上节奏”“担心学不会”“怕坚持不下去”“不会识谱”等等……<br>您是否有以上的问题，艺启学声乐教师团队10年致力于零基础歌唱小白教学，这都可以通过学习解决掉哦！',
					superiority: [
						'1、经过3年的研发 实践、沉淀，分为：唱歌发声方法技巧、帮帮唱、一起唱三个环节，立体式进阶学习模式让“抽象”“枯燥”学习变得更加有趣。',
						'2、直接有效的教学方法，让声乐小白们学起来更加轻松、有效，彻底终结传统式教学给学生带来的“云里雾里”、“似懂非懂”的学习效果。',
						'3、独创线型学歌法，帮不会识谱的你，直接找到歌词的高低及节奏。不识简谱也可以学唱歌。',
						'4、帮帮唱课下学习课件，让你一部手机搞定发声、识简谱学唱歌，真正告别“小白”变身“麦霸”。',
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
					background: url('~/assets/images/sing/fullgrown/person.png') no-repeat;
					background-size: 60%;
					background-position: right 130px;

					& li {
						margin-top: 34px;

						&:first-child {
							padding-right: 50px;
							box-sizing: border-box;
						}

						& dl {
							&:nth-of-type(2) {
								margin-top: 20px;
							}

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
