<template>
	<div class="about">
		<Swiper :banner="banner" />
		<SummaryNew />
		<main class="about_main">
			<!-- 公司简介 -->
			<section class="company_summary">
				<ColumnTop title="艺启学简介" />
				<div class="company_summary_main">
					<div class="company_summary_main_text">
						<p>“北京艺启学文化传播有限公司”创立于2017年五月份，专注于少儿和成人的艺术教育，主设声乐、吉他、尤克里里、钢琴、播音主持、中国舞、芭蕾、爵士和拉丁等。</p>
						<p>2018年艺启学开设线上学习平台，进阶式视频教程，VIP视频一对一学习，直播课堂，学员电子学习档案等。艺启学坚持专业的态度，注重高品质教学，立体式无缝隙帮助学员学习，让每一个学员学有所成。</p>
					</div>
					<div class="company_summary_main_img">
						<img src="../assets/images/about/intr_img.jpg" alt="">
					</div>
				</div>
			</section>
			<!-- 特色 -->
			<section class="company_feature">
				<div class="company_feature_title">
					<h2>艺启学教学特色</h2>
				</div>
				<div class="company_feature_main">
					<p>“艺启学提倡精品教学，开设的班级均为“一对一”私人订制班和“小班教学”，并根据每一位学员的不同情况定制专属的学习计划，在教学过程中，结合学员的情况进行灵活调整，切实做到“因材施教”，让学员的学习达到“事半功倍”的效果。线上课程（远程视频一对一学习 不出家门就可以学习唱歌 吉他 尤克里里 钢琴 播音主持）。艺启学独立创新教学服务体系：“一起唱”“一起弹”“一起跳”“一起说”。彻底改变传统式教学，解决学员课下练习难点与家长不知道让孩子怎么练问题，帮助学员一起成长。</p>
					<ul>
						<li>
							<img src="../assets/images/about/tese_list_img.jpg" alt="">
						</li>
						<li>
							<img src="../assets/images/about/tese_list_img.jpg" alt="">
						</li>
						<li>
							<img src="../assets/images/about/tese_list_img.jpg" alt="">
						</li>
						<li>
							<img src="../assets/images/about/tese_list_img.jpg" alt="">
						</li>
					</ul>
				</div>
			</section>
			<!-- 师资简介 -->
			<section class="company_teachers">
				<ColumnTop title="师资简介" />
				<div class="company_teachers_main">
					<p>艺启学师资团队均来自国内外著名艺术学院，如辛辛那提大学CCM音乐学院、曼哈顿音乐学院、柴可夫斯基音乐学院、中国音乐学院、中央音乐学院、北京舞蹈学院、中央民族大学、中国戏曲学院、中国传媒大学等，教学经验均在6年以上。 </p>
					<ul>
						<li>
							<dl>
								<dt><img src="../assets/images/about/teacher_list.jpg" alt=""></dt>
								<dd>
									<strong>舞蹈老师</strong>
									<p>中央音乐学院</p>
									<p>教龄：3年</p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src="../assets/images/about/teacher_list.jpg" alt=""></dt>
								<dd>
									<strong>舞蹈老师</strong>
									<p>中央音乐学院</p>
									<p>教龄：3年</p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src="../assets/images/about/teacher_list.jpg" alt=""></dt>
								<dd>
									<strong>舞蹈老师</strong>
									<p>中央音乐学院</p>
									<p>教龄：3年</p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src="../assets/images/about/teacher_list.jpg" alt=""></dt>
								<dd>
									<strong>舞蹈老师</strong>
									<p>中央音乐学院</p>
									<p>教龄：3年</p>
								</dd>
							</dl>
						</li>
					</ul>
				</div>
			</section>
			<!-- 地址 -->
			<section class="company_address">
				<h2>线下校区地址：</h2>
				<ul>
					<li>媒体村校区:北京市朝阳区双营路天畅园1号楼底商艺启学</li>
					<li>亚运村校区:北京市朝阳区北苑路中安盛业大厦601室</li>
				</ul>
				<ol>
					<li>崇文门 万寿路校区</li>
					<li>大望路 人民大学</li>
					<li>筹建中</li>
				</ol>
			</section>
			<section class="company_splendid">
				<Splendid />
			</section>
		</main>

	</div>
</template>

<script>
import Swiper from "~/components/swiper";
import SummaryNew from "~/components/summaryNew";
import ColumnTop from "~/components/public/columnTop";
import Splendid from "~/components/public/splendid";

export default {
  head: {
    title: "关于艺启学"
  },
  data() {
    return {
      banner: {
        infos: [{ src: require("../assets/images/about/about_banner.jpg") }]
      }
    };
  },
  components: {
    Swiper,
    SummaryNew,
    ColumnTop,
    Splendid
  }
};
</script>

<style lang="scss" scoped>
.about {
  & .about_main {
    margin: 20px 0;
    background: #fff;
    color: #666;

    // 企业简介
    & .company_summary {
      & .company_summary_main {
        padding: 0 34px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;

        & .company_summary_main_text {
          width: 416px;

          & p {
            line-height: 38px;
            text-indent: 48px;
          }
        }
        & .company_summary_main_img {
          width: 246px;

          & img {
            display: block;
            width: 100%;
          }
        }
      }
    }
    // 教学特色
    & .company_feature {
      margin-top: 20px;
      padding: 0 34px;
      box-sizing: border-box;

      & .company_feature_title {
        height: 88px;
        padding: 20px 0;
        box-sizing: border-box;

        & h2 {
          background: $background-tool;
          display: inline-flex;
          align-items: center;
          color: #fff;
          height: 100%;
          padding: 0 20px;
          font-size: 30px;
          font-weight: 700;
        }
      }

      & .company_feature_main {
        & p {
          text-indent: 48px;
          line-height: 38px;
        }

        & ul {
          display: -webkit-box;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          margin-top: 20px;

          & li {
            width: ((750- (34 * 2))/3 - 10) + px;
            margin-right: 10px;

            & img {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }
    // 师资简介
    & .company_teachers {
      margin-top: 20px;

      & .company_teachers_main {
        padding: 0 34px;
        box-sizing: border-box;

        & > p {
          text-indent: 48px;
          line-height: 38px;
        }

        & ul {
          display: -webkit-box;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          margin-top: 20px;

          & li {
            width: ((750- (34 * 2))/3 - 15) + px;
            margin-right: 15px;
            text-align: center;

            & dl {
              & dt {
                & img {
                  display: block;
                  width: 100%;
                }
              }

              & dd {
                line-height: 34px;
                margin-top: 10px;

                & strong {
                  font-size: 26px;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
    // 地址
    & .company_address {
      padding: 0 34px;
      box-sizing: border-box;
      margin-top: 40px;
      line-height: 38px;

      & > h2 {
        font-weight: 700;
        font-size: 26px;
      }

      & > ol {
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        & li {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>

