
<template>
  <div class="container">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="course_detail">
      <CourseTitle :title="info.title" />
      <div class="content">
        <div class="classify">
          <span>科目分类：</span>
          <i>少儿钢琴 成人古典钢琴 成人流行钢琴</i>
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
			isServe: 'play',
			// 顶部轮播
			sing: {
				infos: [{ src: require('~/assets/images/online/banner.jpg') }],
			},
			// 主体内容
			info: {
				title: title,
				be_propitious_to: '少儿、成人、零基础及有基础 音乐爱好者、兴趣培养、 才艺提升。',
				course_style: ['视频1对1'],
				course_introduce: {
					explain:
						'钢琴的学习，其根本在于学员的年龄，心理、生理、理解力、承受力等等都存在某种程度上的差异。因此，无论是教学手法、教学内容、都要量体裁衣，制定更加适合学员的一套教学大纲、教材、教学手法。 ',
					superiority: [
						'A.进阶闯关式学习模式 趣味性强；',
						'B.以学员的基础条件、性格、学员之需为本、针对性强',
						'C.创新的教学模式 让学员更加通俗易懂 、专业但不枯燥师资优势：美国辛辛那提大学 钢琴演奏 作曲 教学法 博士及柴可夫斯基音乐学院硕士。',
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
					background: url('~/assets/images/online/piano/person.png') no-repeat;
					background-size: 65%;
					background-position: right 25%;

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
