<template>
  <div class="innovate">
    <CourseTitle title="创新课程教学法" />
    <div class="content">
      <div class="innovate_item">
        <img src="../assets/images/public/innovate_item.png" alt="">
      </div>
      <div class="serve_play" v-if="isServe == 'play' ? true : false">
        <p>
          <span>服务优势：</span>
          <i>“一起弹” 线上视频辅助练习课包</i>
        </p>
        <dl>
          <dt>
            <h4>Learning process</h4>
            <div>
              <p>
                <span>学习流程</span>
              </p>
            </div>
          </dt>
          <dd>
            <ul>
              <li v-for="item in flowPathPlay" :key="item.key">{{ item }}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="serve_sing" v-if="isServe == 'sing' ? true : false">
        <h3>
          <span>服务</span>优势
        </h3>
        <p>“一起唱” 线上视频辅助练习课包 视频VIP一对一视频陪练</p>
        <dl>
          <dt>学习流程</dt>
          <dd>
            <ul>
              <li v-for="item in flowPathSing" :key="item">{{ item }}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="serve_dance" v-if="isServe == 'dance' ? true : false">
        <dl>
          <dt>
            <h4>Learning process</h4>
            <div>
              <p>
                <span>学习流程</span>
              </p>
            </div>
          </dt>
          <dd>
            <ul>
              <li v-for="item in flowPathDance" :key="item.key">{{ item }}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="serve_online" v-if="isServe == 'online' ? true : false">
        <dl>
          <dt>
            <h4>Learning process</h4>
            <div>
              <p>
                <span>学习流程</span>
              </p>
            </div>
          </dt>
          <dd>
            <ul>
              <li v-for="item in flowPathOnline" :key="item.key">{{ item }}</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import CourseTitle from '~/components/public/courseTitle';
export default {
	props: ['isServe'],
	data() {
		return {
			flowPathPlay: [
				'1、专业测评了解学员性格，习惯、接受能力、节奏左右手协调手指灵活度等。',
				'2、自由选择所要学习的课程;',
				'3、邮寄学习课程合同;',
				'4、根据学员之需匹配教师，出针对性教学大纲;',
				'5、达成学员学习目标。',
			],
			flowPathSing: [
				'1、专业测评了解孩子的性格习惯关注度嗓音条件',
				'2、根据学员性格习惯 关注度等匹配声乐教师，出针对性教学大纲',
				'3、线下课堂学习＋线上视频教程＋VIP视频一对一陪练辅助学习，达成学员学习目标',
				'4、声乐考级登台展演参加比赛学员学后输出。',
			],
			flowPathDance: [
				'1、专业测评 了解学员性格，习惯、接受能力、节奏肢体协调等；',
				'2、根据学员之需匹配教师，出针对性教学大纲',
				'3、达成学员学习目标',
			],
			flowPathOnline: [
				'1、专业测评了解学员性格，习惯、接受能力、节奏 、基本音乐理论的认知等;',
				'2、自由选择所要学习的课程;',
				'3、邮寄学习课程合同;',
				'4、根据学员之需匹配教师，出针对性教学大纲;',
				'5、达成学员学习目标。',
			],
		};
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
		margin-top: 40px;

		& .innovate_item {
			padding: 0 120px;
			box-sizing: border-box;

			& img {
				display: block;
				width: 100%;
			}
		}

		& .serve_play {
			margin: 40px 0 20px 0;
			font-size: 29px;
			padding: 0 100px;
			box-sizing: border-box;

			& > p {
				& span {
					color: $background;
				}
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

					& > div {
						font-size: 38px;
						margin-top: 20px;
						padding: 0 40px;
						box-sizing: border-box;

						& p {
							position: relative;
							width: 100%;
							&::before {
								content: '';
								display: block;
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								width: 100%;
								height: 2px;
								background: #fff;
							}

							& span {
								background: $background;
								color: #fff;
								position: relative;
								z-index: 1;
								padding: 0 20px;
							}
						}
					}
				}
				& dd {
					& ul {
						margin-top: 20px;
						& li {
							font-size: 24px;
							line-height: 38px;
							color: #666;
						}
					}
				}
			}
		}

		& .serve_sing {
			margin-top: 20px;
			padding: 40px 100px 0 100px;
			border-top: 20px solid #e7e7e7;
			box-sizing: border-box;

			& h3 {
				font-weight: 700;
				font-size: 45px;
				text-align: center;

				& span {
					color: $background;
				}
			}

			& > p {
				background: $background;
				color: #fff;
				font-size: 36px;
				font-weight: 700;
				padding: 20px;
				margin: 20px 0;
				line-height: 44px;
				box-sizing: border-box;
				text-align: center;
			}

			& dl {
				& dt {
					color: $background;
					font-size: 26px;
					font-weight: 700;
				}
				& dd {
					margin-top: 15px;
					& ul {
						& li {
							font-size: 24px;
							line-height: 38px;
							color: #666;
						}
					}
				}
			}
		}

		& .serve_dance {
			margin: 40px 0 20px 0;
			font-size: 29px;
			border-top: 20px solid #e7e7e7;
			padding: 0 60px;
			box-sizing: border-box;

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

					& > div {
						font-size: 38px;
						margin-top: 20px;
						padding: 0 40px;
						box-sizing: border-box;

						& p {
							position: relative;
							width: 100%;
							&::before {
								content: '';
								display: block;
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								width: 100%;
								height: 2px;
								background: #fff;
							}

							& span {
								background: $background;
								color: #fff;
								position: relative;
								z-index: 1;
								padding: 0 20px;
							}
						}
					}
				}
				& dd {
					& ul {
						margin-top: 20px;
						& li {
							font-size: 24px;
							line-height: 38px;
							color: #666;
						}
					}
				}
			}
		}

		& .serve_online {
			margin: 40px 0 20px 0;
			font-size: 29px;
			border-top: 20px solid #e7e7e7;
			padding: 0 60px;
			box-sizing: border-box;

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

					& > div {
						font-size: 38px;
						margin-top: 20px;
						padding: 0 40px;
						box-sizing: border-box;

						& p {
							position: relative;
							width: 100%;
							&::before {
								content: '';
								display: block;
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								width: 100%;
								height: 2px;
								background: #fff;
							}

							& span {
								background: $background;
								color: #fff;
								position: relative;
								z-index: 1;
								padding: 0 20px;
							}
						}
					}
				}
				& dd {
					& ul {
						margin-top: 20px;
						& li {
							font-size: 24px;
							line-height: 38px;
							color: #666;
						}
					}
				}
			}
		}
	}
}
</style>
